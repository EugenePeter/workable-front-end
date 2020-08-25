import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { LoginUserActionStart } from "../../redux/login/login.actions";

import {
    Container,
    ContainerNarrower,
    Title,
} from "../../global-styles/global-styles";

import {
    FormContainer,
    FormInput,
    FormInputSpan,
    ButtonWrapper,
    GroupContainer,
    ErrorMessage,
} from "../../global-styles/global-form.styles";
import { GlobalButton } from "../../global-styles/global-button.styles";

function LoginComponent(props) {
    const { loginUser, message, loginStatus, token, userName } = props;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const loginSuccess = async () => {
            if (loginStatus) {
                await localStorage.setItem("token", token);
                await localStorage.setItem("username", userName);
                props.history.push("/");
            }
        };
        loginSuccess();
    }, [loginStatus, props.history, token, userName]);

    const handleUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginUser({ username, password });
    };

    return (
        <Container>
            <ContainerNarrower>
                <FormContainer onSubmit={handleSubmit}>
                    <Title>
                        <h2>Please signin</h2> {""}
                        <small>Getting there champ!</small>
                    </Title>
                    <GroupContainer>
                        <FormInput
                            onChange={handleUsername}
                            name="username"
                            type="text"
                            value={username}
                            label="username"
                        />
                        <ErrorMessage>{message}</ErrorMessage>
                        <FormInputSpan value={username}>username</FormInputSpan>
                    </GroupContainer>
                    <GroupContainer>
                        <FormInput
                            onChange={handlePassword}
                            name="username"
                            type="password"
                            value={password}
                            label="username"
                        />
                        <FormInputSpan value={password}>Password</FormInputSpan>
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

const mapDispatchToProps = (dispatch) => ({
    loginUser: (value) => dispatch(LoginUserActionStart(value)),
});

const mapStateToProps = (state) => ({
    message: state.loginUser.loginMessage,
    loginStatus: state.loginUser.loginStatus,
    token: state.loginUser.token,
    userName: state.loginUser.username,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LoginComponent));
