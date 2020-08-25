import React, { Fragment } from "react";

import HeroSectionComponent from "../hero-section/HeroSection.component";
import { Container } from "../../global-styles/global-styles";

const LandingPageComponent = () => {
    return (
        <Container>
            <HeroSectionComponent />
        </Container>
    );
};

export default LandingPageComponent;
