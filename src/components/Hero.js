import heroimage from '../assets/background.jpg';
import React from 'react';
import NavBar from './Navbar';
import styled from "styled-components";

// Styled component
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
    padding-top: 20vw;
    color: white;
`;

const HeroName = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
    color: rgb(222,184,135);
    // font-family: 'Hammersmith One', sans-serif;
`;

const HeroText = styled.h1`
    color: #8892B0;
`;




const Hero = () => {
    return (
        <HeroWrapper>
            <NavBar />
            <HeroTitle>
                Hello there, I am
                <HeroName>
                    Kwaku Appau-Nkansah.
                </HeroName>
                <HeroText>
                    I am the gem you lose if ignored.
                </HeroText>
            </HeroTitle>
        </HeroWrapper>
    )
}

export default Hero;