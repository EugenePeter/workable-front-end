import { RoomTypes } from "./rooms.types";
const INITIAL_STATE = {
    room: null,
    isRoomPosted: null,
    successMessage: null,
    errorMessage: null,
};

const roomReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RoomTypes.ROOM_USER_START:
            return {
                ...state,
                room: action.payload,
            };
        case RoomTypes.ROOM_NAME_POSTING_SUCCESS:
            return {
                ...state,
                room: action.payload.roomName,
                isRoomPosted: action.payload.status,
                successMessage: action.payload.message,
                errorMessage: "",
            };
        case RoomTypes.ROOM_NAME_POSTING_FAILURE:
            return {
                ...state,
                isRoomPosted: action.payload.error,
                errorMessage: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default roomReducer;
