import styled, { createGlobalStyle } from "styled-components";

export const Modifiers = createGlobalStyle`
    .text-decorations {
        text-decoration: none;
        :active {
            text-decoration: none;
        }
    }

    .full-with {
      width: 100;
    }

        .narrower-width {
        width: 80%;
      }
    .padding-left {
      padding-left: 2rem;
    }
    .padding-right {
      padding-right: 2rem;
    }
    .padding-top {
      padding-top: 2rem;
    }
    .padding-bottom {
      padding-bottom: 2rem;
    }
    .padding-all-sides {
      padding: 2rem;
    }

    .margin-bottom {
      margin-bottom: 2rem!important;
    }

    .margin-remove {
      margin: 0!important;
    }

    .position-fixed {
      position: fixed!important;
      background-color:#F1EFFF;
      width: 100%;
      bottom: 0;
      margin: 10px;
      padding: 1rem;
      box-sizing: border-box;
    }

    .width--narrower {
      width: 80%!important;
    }
    
    .modal-is-open {
      display: flex;
    }

    .modal-is-close {
      display: none;
    }
    
`;

export const mainColorGreen = "#3BC453";
export const subColorGrey = "grey";
export const mainColorBlack = "black";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    height: 100vh;
    /* background-color: red; */
`;

export const ContainerRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-family: "Quicksand", sans-serif !important;
    /* background-color: red; */

    @media screen and (min-width: 992px) {
        max-width: 50rem;
    }
`;

export const ContainerMid = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;

    @media screen and (min-width: 992px) {
        max-width: 100rem;
    }
`;

export const ContainerNarrow = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;

    /* background-color: violet; */

    @media screen and (min-width: 992px) {
        max-width: 50rem;
    }
`;

export const ContainerNarrower = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    box-sizing: border-box;

    @media screen and (min-width: 992px) {
        max-width: 50rem;
    }
`;

export const Small = styled.small`
    text-align: center;

    &.margin-top {
        margin-top: 8%;
    }
`;

export const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 2rem; */

    &__margin-top {
        margin-top: 2rem;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 1.705882352941176rem;
    margin-bottom: 1.705882352941176rem;
    small {
        text-align: center;
    }
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 1.705882352941176rem;
    margin-bottom: 1.705882352941176rem;

    h3,
    p,
    small {
        text-align: center;
    }
`;

export const ThreeColumns = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    background-color: green;

    @media screen and (min-width: 992px) {
        max-width: 100%;
    }
`;
