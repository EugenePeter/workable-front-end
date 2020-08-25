import { put, call, takeLatest, all } from "redux-saga/effects";

import Axios from "axios";

import { RoomNameActionSuccess, RoomNameActionFailure } from "./rooms.actions";
import { RoomTypes } from "./rooms.types";
import { ChannelTypes } from "../channels/channels.types";

const createRoom = "http://localhost:7575/createRoom";

function* postRoomNameAsync(value) {
    let room = {
        roomName: value.payload,
        messages: [],
    };
    try {
        yield console.log(value);
        const response = yield Axios.post(createRoom, room);
        const message = yield response.data.successMessage;
        const status = yield response.data.isRoomPosted;
        const roomName = yield response.data.room;
        // const room = yield response.data.room;
        yield console.log(response);
        yield console.log(roomName);
        // yield console.log(results)
        yield put(RoomNameActionSuccess({ message, status, roomName }));
    } catch (e) {
        console.log(e);
        const error = e.response.data.isRoomPosted;
        const errorMessage = e.response.data.errorMessage;
        // console.log(error)
        // console.log(errorMessage)
        yield put(RoomNameActionFailure({ error, errorMessage }));
    }
}

export function* postRoomNameStart() {
    yield takeLatest(RoomTypes.ROOM_USER_START, postRoomNameAsync);
    yield takeLatest(ChannelTypes.ADD_NEW_CHANNEL, postRoomNameAsync);
}

export const postRoomNameSaga = function* () {
    yield all([call(postRoomNameStart)]);
};
