import { ChannelTypes } from "./channels.types";
import { addMessagesToState } from "./channels.utils";
const INITAL_STATE = {
    channelsName: null,
    isFetchingChannels: true,
    room: null,
};

const channelReducer = (state = INITAL_STATE, action) => {
    console.log(action.payload);
    switch (action.type) {
        case ChannelTypes.GET_CHANNELS_SUCCESS:
            return {
                ...state,
                channelsName: action.payload,
                isFetchingChannels: false,
            };

        // case ChannelTypes.ADD_MESSAGES_START:
        //     return {
        //         ...state,
        //         room: addMessagesToState(state.channelsName, action.payload),
        //     };
        default:
            return state;
    }
};

export default channelReducer;
