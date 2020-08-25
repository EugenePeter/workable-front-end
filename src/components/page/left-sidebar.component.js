import React, { useEffect, Fragment } from "react";

import { connect } from "react-redux";
import { toggleModalAction } from "../../redux/modal/modal.action";
import { getChannelsStart } from "../../redux/channels/channels.actions";

import {
    ChannelIcons,
    ChannelWrapper,
    Title,
    AddChannelIcon,
    AddChannel,
} from "./home-page.styles";
import { StyledLink } from "../../global-styles/nav-links.style";
import { Modifiers } from "../../global-styles/global-styles";

const LeftSidebarInner = (props) => {
    const {
        toogleModalDispatch,
        getChannelsDispatch,
        channels,
        isFetchingChannel,
        room,
        isModalOpen,
    } = props;

    useEffect(() => {
        getChannelsDispatch();
    }, [room || isModalOpen]);

    const toggleModal = () => {
        toogleModalDispatch();
    };

    return (
        <Fragment>
            <Modifiers />
            <Title className="">
                <h1>Gollab</h1>
            </Title>
            <h3>Channels</h3>

            <AddChannel className="margin-bottom" onClick={toggleModal}>
                <ChannelWrapper left>
                    <AddChannelIcon>+</AddChannelIcon>
                    <h5>Add Channel</h5>
                </ChannelWrapper>
            </AddChannel>

            {!isFetchingChannel &&
                channels.map((channel) => (
                    <StyledLink to={`/channels/${channel.roomName}`} key={channel.id}>
                        <ChannelWrapper left>
                            <ChannelIcons />
                            <h5>{channel.roomName}</h5>
                        </ChannelWrapper>
                    </StyledLink>
                ))}
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toogleModalDispatch: (value) => dispatch(toggleModalAction()),
    getChannelsDispatch: () => dispatch(getChannelsStart()),
});

const mapStateToProps = (state) => ({
    channels: state.channels.channelsName,
    isFetchingChannel: state.channels.isFetchingChannels,
    room: state.roomName.room,
    isModalOpen: state.isModalOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebarInner);
