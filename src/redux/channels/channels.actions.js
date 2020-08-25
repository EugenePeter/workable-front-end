import { ChannelTypes } from "./channels.types";

export const channelActions = (value) => ({
    type: ChannelTypes.ADD_NEW_CHANNEL,
    payload: value,
});

export const getChannelsStart = (value) => ({
    type: ChannelTypes.GET_CHANNELS_START,
    payload: value,
});

export const getChannelsSuccess = (value) => ({
    type: ChannelTypes.GET_CHANNELS_SUCCESS,
    payload: value,
});

export const getChannelsFailure = (value) => ({
    type: ChannelTypes.GET_CHANNELS_FAILURE,
    payload: value,
});

export const addMessagesToState = (value) => ({
    type: ChannelTypes.ADD_MESSAGES_START,
    payload: value,
});
