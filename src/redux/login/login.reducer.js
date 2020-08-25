import { LoginTypes } from "./login.types.js";

const INITIAL_STATE = {
    userDetails: null,
    token: null,
    id: null,
    username: null,
    loginStatus: null,
    loginMessage: null,
    isOnline: false,
    postTokenToDB: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LoginTypes.LOGIN_USER_START:
            return {
                ...state,
                userDetails: action.payload,
            };

        case LoginTypes.LOGIN_USER_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                id: action.payload.id,
                token: action.payload.token,
                loginStatus: action.payload.status,
                username: action.payload.username,
                loginMessage: action.payload.message,
                isOnline: true,
                userDetails: "",
            };
        case LoginTypes.LOGIN_USER_FAILURE:
            return {
                ...state,
                loginStatus: action.payload.error,
                loginMessage: action.payload.errorMessage,
                loginIsPosting: false,
            };

        case LoginTypes.LOGIN_POST_TOKEN_TO_DB:
            return {
                ...state,
                postTokenToDB: true,
            };
        default:
            return state;
    }
};

export default loginReducer;
