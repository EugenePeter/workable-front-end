import React from "react";
import { connect } from "react-redux";

import { ChatLogBox, ChatContent } from "./chat-log.styles";

const ChatLog = (props) => {
  const { roomMessages } = props;
  console.dir(roomMessages);

  return (
    <ChatLogBox>
      {roomMessages.length > 0
        ? roomMessages.map((message, i) => {
            const date = new Date(message.date);
            const dateFormatted = `${date.toLocaleTimeString()}`;
            return (
              <ChatContent others key={i}>
                <h4>{message.sender}</h4>
                <p>{dateFormatted}</p>
                <p>{message.message} </p>
              </ChatContent>
            );
          })
        : null}
      <ChatContent self>
        <h4>Eugene</h4>
        <p>2:05am</p>
        <p> Lorem ipsum dolor sit amet</p>
      </ChatContent>
      <ChatContent self>
        <h4>Eugene</h4>
        <p>2:05am</p>
        <p> Lorem ipsum dolor sit amet</p>
      </ChatContent>
      <ChatContent others>
        <h4>Eugene</h4>
        <p>2:05am</p>
        <p> Lorem ipsum dolor sit amet</p>
      </ChatContent>
    </ChatLogBox>
  );
};

const mapStateToProps = (state) => ({
  roomMessages: state.roomMessages.roomMessages,
});

export default connect(mapStateToProps)(ChatLog);
