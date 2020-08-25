import { RoomTypes } from "./rooms.types";

export const RoomActionStart = (value) => ({
    type: RoomTypes.ROOM_USER_START,
    payload: value,
});

export const RoomNameActionIsPosting = (value) => ({
    type: RoomTypes.ROOM_NAME_IS_POSTING,
    payload: value,
});

export const RoomNameActionSuccess = (value) => ({
    type: RoomTypes.ROOM_NAME_POSTING_SUCCESS,
    payload: value,
});

export const RoomNameActionFailure = (value) => ({
    type: RoomTypes.ROOM_NAME_POSTING_FAILURE,
    payload: value,
});
