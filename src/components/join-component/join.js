import React, { useEffect, useState, useContext } from "react";

import {
  Container,
  ContainerNarrower,
  TitleContainer,
} from "../global-styles/global-styles";

import {
  FormContainer,
  FormInputContainer,
  FormInputSpan,
  ButtonWrapper,
  GroupContainer,
} from "./login.style";
import { GlobalButton } from "../global-styles/global-button.styles";

import DispatchContext from "../context/DispatchContext";
import StateContext from "../context/StateContext";

function LoginComponent(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [username, setUsername] = useState();
  const [room, setRoom] = useState();
  // const [password, setPassword] = useState();

  const handleChange = (e) => {
    setUsername(e.target.value);
    setRoom(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    appDispatch({ type: "login" });
    appDispatch({ type: "username", value: username });
    appDispatch({ type: "chatRoom", value: room });
  };

  return (
    <Container>
      <ContainerNarrower>
        <FormContainer onSubmit={handleSubmit}>
          {username}
          <TitleContainer>
            <h2>Please signin</h2> {""}
            <small>Getting there champ!</small>
          </TitleContainer>
          <GroupContainer>
            <FormInputContainer
              onChange={handleChange}
              name="username"
              type="text"
              value={username}
              label="username"
            />
            <FormInputSpan value={username}>username</FormInputSpan>
            <FormInputContainer
              onChange={handleChange}
              name="room"
              type="text"
              value={room}
              label="room"
            />
            <FormInputSpan value={username}>username</FormInputSpan>
          </GroupContainer>

          <ButtonWrapper>
            <GlobalButton onClick={handleSubmit} signin>
              Sign In
            </GlobalButton>
          </ButtonWrapper>
        </FormContainer>
      </ContainerNarrower>
    </Container>
  );
}

export default LoginComponent;
