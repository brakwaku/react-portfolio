import heroimage from '../assets/background.jpg';
import React from 'react';
import NavBar from './Navbar';
import styled from "styled-components";
import { Animated } from "react-animated-css";

// Styled components
const HeroWrapper = styled.div`
    min-height: 100vh;
    height: 100vh;
    align-items: center;
    border-bottom: 0px;
    background: $white-color;
    font-weight: 400;
    color: $dark-blue-text;
    padding: 0rem 5.6rem;
    margin-bottom: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;

    background: linear-gradient(to bottom, rgba(0,0,0,.73), rgba(0,0,0,.7)),  url(${heroimage}) center no-repeat;
    background-attachment: fixed;
    background-size: cover;
`;

const HeroTitle = styled.div`
    padding-top: 17vw;
    color: white;
`;

const HeroName = styled.h1`
    color: rgb(222,184,135);
    font-family: 'Hammersmith One', sans-serif;
    font-weight: bolder;
    font-size: 4.5rem;
`;

const HeroText = styled.h1`
    font-family: 'Hammersmith One', sans-serif;
    color: #8892B0;
`;



// Component definition
const Hero = () => {
    return (
        <HeroWrapper>
            <NavBar />
            <Animated animationIn="fadeIn" animationInDuration="7600" isVisible={true}>
                <HeroTitle>
                    Hello there, I am
                    <HeroName>
                        Kwaku Appau-Nkansah,
                    </HeroName>
                    <HeroText>
                        the gem you lose if ignored.
                    </HeroText>
                </HeroTitle>
            </Animated>
        </HeroWrapper >
    )
}

export default Hero;