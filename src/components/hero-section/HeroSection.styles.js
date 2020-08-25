import styled from "styled-components";

export const HeroSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 80%;

    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: multiply;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

export const HeroColumns = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 992px) {
        flex-direction: row;
    }
    /* background-color: red; */
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;
    flex-grow: 4;
    flex-shrink: 1;
    flex-basis: 0;
    height: 100%;
    font-family: "Roboto", sans-serif;

    color: white;

    /* background-color: blue; */
`;
export const HeroTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 100%;

    h1 {
        font-size: 4rem;
        margin: ;
    }

    h2 {
        font-size: 2rem;
        font-weight: 300;
    }

    /* background-color: red; */
`;

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 1;
    flex-basis: 0;
    flex-grow: 4;
    height: 100%;
    /* background-color: red; */
`;

export const Navigation = styled.div`
    width: 100%;
    height: 4rem;
    background-color: pink;
`;
