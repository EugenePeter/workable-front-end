import { RoomMessagesTypes } from "./room-messages.types";

const INITIAL_STATE = {
    roomMessages: [],
};

const roomMessagesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RoomMessagesTypes.ROOM_MESSAGES_START:
            return {
                ...state,
                roomMessages: [...state.roomMessages, action.payload],
            };
        default:
            return state;
    }
};

export default roomMessagesReducer;
