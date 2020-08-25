import { put, call, takeLatest, all } from "redux-saga/effects";

import Axios from "axios";

import {
    LoginUserActionSuccess,
    LoginUserActionFailure,
    PostTokenToDb,
} from "./login.actions";
import { LoginTypes } from "./login.types";

const loginUser = "http://localhost:7575";
const postToken = "http://localhost:7575/postToken";

function* loginUserAsync(value) {
    let newUser = {
        username: value.payload.username,
        password: value.payload.password,
    };

    try {
        yield console.log(newUser.username);
        const response = yield Axios.post(`${loginUser}/login`, newUser);

        const status = yield response.data.status;
        const token = yield response.data.token;
        const username = yield response.data.username;
        const message = yield response.data.loginMessage;
        const id = yield response.data.id;
        yield console.log(response);
        yield console.log(id);

        yield put(LoginUserActionSuccess({ status, token, username, message, id }));

        let tokenTable = {
            token,
            id,
        };

        // let tokenTable = {
        //     [token]: {
        //         id,
        //     },
        // };

        const postRes = yield Axios.post(postToken, tokenTable);
        yield put(PostTokenToDb(postRes));
    } catch (e) {
        console.log(e);
        const error = e.response.data.loginStatus;
        const errorMessage = e.response.data.errorMessage;
        console.log(error);
        console.log(errorMessage);
        yield put(LoginUserActionFailure({ error, errorMessage }));
    }
}

export function* loginUserStart() {
    yield takeLatest(LoginTypes.LOGIN_USER_START, loginUserAsync);
}

export function* postTokenTodb() {}

export const loginUserSaga = function* () {
    yield all([call(loginUserStart)]);
};
