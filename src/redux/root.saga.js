import { call, all } from "redux-saga/effects";

import { registerUserSaga } from "./register/register.saga";
import { loginUserSaga } from "./login/login.saga";
import { postRoomNameSaga } from "./rooms/rooms.saga";
import { getChannelNameSaga } from "./channels/channels.saga";

export default function* () {
    yield all([
        call(registerUserSaga),
        call(loginUserSaga),
        call(postRoomNameSaga),
        call(getChannelNameSaga),
    ]);
}
