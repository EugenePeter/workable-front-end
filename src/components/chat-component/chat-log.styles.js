import styled, { css } from "styled-components";

export const ChatLogBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    background-color: #fbfbff;
    overflow: scroll;
`;

const self = css`
    align-self: flex-end;
`;

const others = css`
    align-self: flex-start;
`;

const getChatItemStyles = (props) => {
    if (props.self) {
        return self;
    }

    if (props.others) {
        return others;
    }
};

export const ChatContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: space-between;
    min-width: 60%;
    min-width: 60%;
    max-width: 60%;
    /* height: 6rem; */
    box-sizing: border-box;
    background-color: #fff;
    /* border: 0.2px solid #434343; */
    margin: 0 2rem 2rem 2rem;
    padding: 1rem;

    border-radius: 0.1rem;

    -webkit-box-shadow: 0px 50px 32px -32px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 50px 32px -32px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 50px 32px -32px rgba(0, 0, 0, 0.05);

    :nth-of-type(1) {
        margin-top: 2rem;
    }

    h4,
    h5,
    p {
        margin: 0 0 0.2rem 0;
    }

    ${getChatItemStyles}
`;
