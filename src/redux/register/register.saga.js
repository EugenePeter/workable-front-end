import { put, call, takeLatest, all } from "redux-saga/effects";

import Axios from "axios";

import {
    RegisterUserActionSuccess,
    RegisterUserActionFailure,
} from "./register.actions";
import { RegisterTypes } from "./register.types";

const registerUser = "http://localhost:7575";

function* registerUserAsync(value) {
    let newUser = {
        username: value.payload.username,
        password: value.payload.password,
        isOnline: false,
    };

    try {
        yield console.log(newUser.username);
        const response = yield Axios.post(`${registerUser}/createUsers`, newUser);
        const message = yield response.data.message;
        const status = yield response.data.registerSuccess;
        yield console.log(response);
        // yield console.log(results)
        yield put(RegisterUserActionSuccess({ message, status }));
    } catch (e) {
        console.log(e);
        const error = e.response.data.registerSuccess;
        const errorMessage = e.response.data.errorMessage;
        // console.log(error)
        // console.log(errorMessage)
        yield put(RegisterUserActionFailure({ error, errorMessage }));
    }
}

export function* registerUserStart() {
    yield takeLatest(RegisterTypes.REGISTER_USER_START, registerUserAsync);
}

export const registerUserSaga = function* () {
    yield all([call(registerUserStart)]);
};
