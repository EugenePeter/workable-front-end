import styled, { createGlobalStyle, css } from "styled-components";

export const Modifiers = createGlobalStyle`
    .text-decorations {
        text-decoration: none;
        :active {
            text-decoration: none;
        }
    }
    .padding-left {
      padding-left: 2rem;
    }

    .margin-bottom {
      margin-bottom: 2rem;
    }
    
`;

export const ThreeColumns = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    /* padding: 2rem; */

    @media screen and (min-width: 992px) {
        max-width: 100%;
        flex-direction: row;
    }
`;

export const Title = styled.div`
    padding-bottom: 2rem;
    box-shadow: none !important;
    color: #fff;
    /* background-color: #7d03b2; */
    width: 100%;
    box-sizing: border-box;

    h1 {
        font-weight: 700;
    }
`;

export const AddChannel = styled.div`
    cursor: pointer;
`;

export const LeftSideBar = styled.div`
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;

    background-color: #5b5b5b;
    color: #fff;

    h3 {
        color: #fff;
    }

    div {
        margin-bottom: 0.5rem;
        -webkit-box-shadow: 0 18px 40px -14px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 18px 40px -14px rgba(0, 0, 0, 0.2);
        box-shadow: 0 18px 40px -14px rgba(0, 0, 0, 0.4);
    }

    @media screen and (min-width: 992px) {
        max-width: 100%;
    }
`;

export const MiddleBar = styled.div`
    position: relative;
    flex-grow: 4;
    flex-shrink: 1;
    flex-basis: 0;
    width: 100%;

    @media screen and (min-width: 992px) {
        max-width: 100%;
    }
`;

export const RightSideBar = styled.div`
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    background-color: #9000cf;
    box-sizing: border-box;
    width: 100%;

    h3 {
        color: #fdceff;
    }

    div {
        margin-bottom: 0.5rem;
        -webkit-box-shadow: 0 18px 40px -14px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 18px 40px -14px rgba(0, 0, 0, 0.2);
        box-shadow: 0 18px 40px -14px rgba(0, 0, 0, 0.4);
    }

    @media screen and (min-width: 992px) {
        max-width: 100%;
        box-sizing: border-box;
    }
`;

export const ChannelIcons = styled.div`
    background: #fff;
    height: 1rem;
    width: 1rem;
    border-radius: 25px;
    margin-bottom: 0 !important;
`;

export const AddChannelIcon = styled.div`
    color: #fff;
    margin-bottom: 4px !important;
    font-size: 1.4rem;
`;

const left = css`
    border-radius: 25px 0 0 25px;
`;

const right = css`
    border-radius: 0 25px 25px 0;
`;

const getChannelStyles = (props) => {
    if (props.left) {
        return left;
    }

    if (props.right) {
        return right;
    }
};

export const ChannelWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.5rem;

    box-sizing: border-box;

    ${getChannelStyles}

    h5 {
        margin: 0;
        padding-left: 1rem;
        color: #fff;
    }
`;
