import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, withRouter } from "react-router-dom";
import io from "socket.io-client";

import ChatLog from "./chat-log";
import ChatInput from "./chat-input";

import { ChatWrapper } from "./chat-component.styles";
import { Title, Modifiers } from "../../global-styles/global-styles";

import { RoomActionStart } from "../../redux/rooms/rooms.actions";
import { RoomMessagesActionStart } from "../../redux/room-messages/room-messages.actions";
import { addMessagesToState } from "../../redux/channels/channels.actions";

const socket = io("http://localhost:7575", {
    transports: ["websocket"],
    jsonp: false,
    forceNew: true,
});

function ChatComponent(props) {
    const {
        username,
        id,
        isOnline,
        room,
        roomNameDispatch,
        roomMessagesDispatch,
        token,
        addMessagesDispatch,
    } = props;
    const getRoom = useParams().name;

    useEffect(() => {
        let newUser = {
            id,
            token,
            username,
            room,
            isOnline,
        };

        socket.emit("userJoined", newUser, (error) => {
            // alert(room);
        });
    }, [room]);

    useEffect(() => {
        socket.on("message", (message) => {
            console.log(message);
            console.log(token);

            const roomName = message.room;

            addMessagesDispatch(message);
            roomMessagesDispatch(message);
        });
    }, [room && getRoom]);

    useEffect(() => {
        roomNameDispatch(getRoom);
    }, [getRoom]);

    useEffect(() => {
        if (room) {
        }
    }, [room]);

    return (
        <Fragment>
            <Modifiers />
            <ChatWrapper>
                <Title className="margin-remove">
                    <h4>Chat messages</h4>
                </Title>

                <ChatLog />
                <ChatInput />
            </ChatWrapper>
        </Fragment>
    );
}

const mapDispatchToProps = (dispatch) => ({
    roomNameDispatch: (getRoom) => dispatch(RoomActionStart(getRoom)),
    roomMessagesDispatch: (message) => dispatch(RoomMessagesActionStart(message)),
    addMessagesDispatch: (message) => dispatch(addMessagesToState(message)),
});

const mapStateToProps = (state) => ({
    username: state.loginUser.username,
    isOnline: state.loginUser.isOnline,
    id: state.loginUser.id,
    token: state.loginUser.token,
    room: state.roomName.room,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ChatComponent));
