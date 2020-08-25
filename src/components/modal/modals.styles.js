import styled from "styled-components";

export const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    h2 {
        position: absolute;
        align-self: flex-end;
        top: 0;
        padding: 0;
        margin: 1rem 1rem 0 0;
        cursor: pointer;
    }
`;

export const ModalInner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-color: #fff;
    box-sizing: border-box;

    border-radius: 0.5rem;

    @media screen and (min-width: 992px) {
        max-width: 50rem;
    }
    z-index: 1000;

    /* &::after {
        content: "test";
        position: absolute;
        top: 80;
        left: 70;
    } */
`;
