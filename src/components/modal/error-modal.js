import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import { toggleModalAction } from "../../redux/modal/modal.action";
import { channelActions } from "../../redux/channels/channels.actions";

import { ModalContainer, ModalInner } from "./modals.styles";
import { Modifiers } from "../../global-styles/global-styles";
import {
    FormContainer,
    FormInput,
    FormInputSpan,
    ButtonWrapper,
    GroupContainer,
    ErrorMessage,
} from "../../global-styles/global-form.styles";

import { GlobalButton } from "../../global-styles/global-button.styles";

const AddChannelsModal = (props) => {
    const { toogleModalDispatch, addChannelsDispatch } = props;
    const { isModalOpen } = props.isModalOpen;

    const [channelName, setChannelName] = useState("");

    const toggleModal = () => {
        toogleModalDispatch();
    };

    const handleChannelName = (e) => {
        const value = e.target.value;
        setChannelName(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        addChannelsDispatch(channelName);
        setChannelName("");
    };

    return (
        <Fragment>
            <Modifiers />
            <ModalContainer
                className={isModalOpen ? "modal-is-open" : "modal-is-close"}
            >
                <ModalInner>
                    <h2 onClick={toggleModal}>x</h2>
                    {channelName}
                    <FormContainer
                        className="width--narrower"
                        onSubmit={handleSubmit}
                    >
                        <h1>Channel Name</h1>
                        <GroupContainer>
                            <FormInput
                                name="channelName"
                                type="text"
                                value={channelName}
                                label="Channel Name or project Name"
                                onChange={handleChannelName}
                            />
                            <ErrorMessage></ErrorMessage>
                            <FormInputSpan value={channelName}>
                                Channel Name or project Name
                            </FormInputSpan>
                        </GroupContainer>
                        <GroupContainer>
                            <FormInput
                                name="description"
                                type="text"
                                label="username"
                            />
                            <FormInputSpan>Channel Description</FormInputSpan>
                        </GroupContainer>
                        <ButtonWrapper>
                            <GlobalButton createChannel>Create Channel</GlobalButton>
                        </ButtonWrapper>
                    </FormContainer>
                </ModalInner>
            </ModalContainer>
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toogleModalDispatch: (value) => dispatch(toggleModalAction()),
    addChannelsDispatch: (value) => dispatch(channelActions(value)),
});

const mapStateToProps = (state) => ({
    isModalOpen: state.isModalOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddChannelsModal);
