import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import registerReducer from "./register/register.reducer";
import loginReducer from "./login/login.reducer";
import roomReducer from "./rooms/rooms.reducer";
import roomMessagesReducer from "./room-messages/room-messages.reducer";
import toggleModalReducer from "./modal/modal.reducer";
import channelReducer from "./channels/channels.reducer";

// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: [],
// };

const rootReducer = combineReducers({
    registerUser: registerReducer,
    loginUser: loginReducer,
    roomName: roomReducer,
    roomMessages: roomMessagesReducer,
    isModalOpen: toggleModalReducer,
    channels: channelReducer,
});

export default rootReducer;
