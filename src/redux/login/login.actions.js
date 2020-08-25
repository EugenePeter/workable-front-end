import { LoginTypes } from "./login.types";

export const LoginUserActionStart = (value) => ({
    type: LoginTypes.LOGIN_USER_START,
    payload: value,
});

export const LoginIsFetching = (value) => ({
    type: LoginTypes.LOGIN_IS_FETCHING,
    payload: value,
});

export const LoginUserActionSuccess = (value) => ({
    type: LoginTypes.LOGIN_USER_SUCCESS,
    payload: value,
});

export const LoginUserActionFailure = (value) => ({
    type: LoginTypes.LOGIN_USER_FAILURE,
    payload: value,
});

export const PostTokenToDb = (value) => ({
    type: LoginTypes.LOGIN_POST_TOKEN_TO_DB,
    payload: value,
});
