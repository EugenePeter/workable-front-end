import React from "react";

import RegisterComponent from "../login_register-component/Register-component";

import { ContainerNarrow } from "../../global-styles/global-styles";

import {
    HeroSection,
    Navigation,
    HeroColumns,
    Header,
    RegisterWrapper,
    HeroTitle,
} from "./HeroSection.styles";

import { Modifiers } from "../../global-styles/global-modifiers.styles";

const HeroSectionComponent = () => {
    return (
        <HeroSection
            style={{
                backgroundImage: `url(${require("../../assets/img/austin-distel-wawEfYdpkag-unsplash.jpg")})`,
            }}
        >
            <Modifiers />
            <Navigation />
            <HeroColumns>
                <Header>
                    <ContainerNarrow>
                        <HeroTitle>
                            <h1>GET YOUR IDEA UP AND RUNNING</h1>
                            <h2>
                                Your best resource in finding gigs and industry
                                profesionals
                            </h2>
                        </HeroTitle>
                    </ContainerNarrow>
                </Header>
                <RegisterWrapper>
                    <ContainerNarrow>
                        <RegisterComponent />
                    </ContainerNarrow>
                </RegisterWrapper>
            </HeroColumns>
        </HeroSection>
    );
};

export default HeroSectionComponent;
