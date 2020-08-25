import { RoomMessagesTypes } from "./room-messages.types";

export const RoomMessagesActionStart = (value) => ({
  type: RoomMessagesTypes.ROOM_MESSAGES_START,
  payload: value,
});
