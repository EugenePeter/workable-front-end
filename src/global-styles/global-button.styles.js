import styled, { css } from "styled-components";
export const mainColorGreen = "#3BC453";
const signInBtn = css`
    border-radius: 4px;
    background-color: #ff0058f;
    &:hover {
        background-color: #ff0058;
        color: #fff;
        border: 1px solid #3bc453;
    }
`;

const registerBtn = css`
    border-radius: 4px;
    background-color: #ff0058;
    &:hover {
        background-color: #ff0058;
        color: #fff;
        border: 1px solid #3bc453;
    }
`;
const getButtonStyles = (props) => {
    if (props.signin || props.createChannel) {
        return signInBtn;
    }

    if (props.register) {
        return registerBtn;
    }
};

export const GlobalButton = styled.button`
    width: 100%;
    height: 60px;
    letter-spacing: 0.5px;
    line-height: 50px;
    font-size: 15px;
    margin-bottom: 8%;

    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: ${({ isActive }) => (isActive ? "none" : "inline-block")};

    justify-content: center;
    align-items: center;

    -webkit-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    -moz-box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);
    box-shadow: -4px 39px 59px -63px rgba(0, 0, 0, 1);

    box-sizing: border-box;

    &.inverted {
        background-color: #3bc453;
        color: black;
        border: 4px solid black;
        &:hover {
            background-color: #3bc453;
            color: white;
            border: none;
        }
    }

    ${getButtonStyles}
`;
