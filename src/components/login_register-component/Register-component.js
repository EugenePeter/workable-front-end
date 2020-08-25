import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { RegisterUserActionStart } from "../../redux/register/register.actions";

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
    FormTitle,
} from "../../global-styles/global-form.styles";
import { GlobalButton } from "../../global-styles/global-button.styles";

function RegisterComponent(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { registerUser, registerStatus, isPosting, errorMessage } = props;

    const handleUsername = (e) => {
        const value = e.target.value;
        // registerUsername(value)
        setUsername(value);
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        // registerPassword(value)
        setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerUser({ username, password });
    };

    useEffect(() => {
        if (!isPosting) {
            console.log("is still posting " + isPosting);
            console.log("Status is " + registerStatus);
            props.history.push("/login");
        }
    }, [registerStatus]);

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>
                <h2>Register</h2>
            </FormTitle>
            <GroupContainer>
                <FormInput
                    onChange={handleUsername}
                    name="username"
                    type="text"
                    value={username}
                    label="username"
                />
                <ErrorMessage>{errorMessage}</ErrorMessage>
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
                <GlobalButton onClick={handleSubmit} register>
                    Register
                </GlobalButton>
            </ButtonWrapper>
        </FormContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    registerUser: (value) => dispatch(RegisterUserActionStart(value)),
});

const mapStateToProps = (state) => ({
    registerStatus: state.registerUser.registerStatus,
    isPosting: state.registerUser.registerIsPosting,
    error: state.registerUser.registerError,
    errorMessage: state.registerUser.registerErrorMessage,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(RegisterComponent));
