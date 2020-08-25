import { put, call, takeLatest, all } from "redux-saga/effects";

import Axios from "axios";

import { getChannelsSuccess, getChannelsFailure } from "./channels.actions";
import { ChannelTypes } from "./channels.types";

const getRoom = "http://localhost:7575/getRoom";

function* getChannelAsync() {
    try {
        const response = yield Axios.get(getRoom);
        const channels = response.data;
        // yield console.dir(channels);
        const arrOfChannels = yield Object.entries(channels).map((tupleEntry) => {
            const [id, object] = tupleEntry;
            return { id, ...object };
        });
        console.log(arrOfChannels);
        yield put(getChannelsSuccess(arrOfChannels));
    } catch (e) {
        console.log(e);

        yield put(getChannelsFailure(e));
    }
}

export function* getChannelNameStart() {
    yield takeLatest(ChannelTypes.GET_CHANNELS_START, getChannelAsync);
}

export const getChannelNameSaga = function* () {
    yield all([call(getChannelNameStart)]);
};
