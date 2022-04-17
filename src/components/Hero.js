import heroimage from '../assets/background.jpg';
import heroimageSmall from '../assets/backgroundSmall.jpg';
import myResume from '../assets/resume.pdf';
import React from 'react';
import NavBar from './Navbar';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import media from '../media';

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

  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.73),
      rgba(0, 0, 0, 0.7)
    ),
    url(${heroimage}) center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  filter: grayscale(50%);

  &:hover {
    filter: none;
  }

  ${media.small`
    padding: .5rem;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.73),
      rgba(0, 0, 0, 0.7)
    ),
    url(${heroimageSmall}) center no-repeat;
    `}
`;

const HeroTitle = styled.div`
  padding-top: 10vw;
  color: white;

  > p {
    font-size: 1.5rem;
    margin-bottom: -0.1rem;
  }
`;

const HeroName = styled.h1`
  color: rgb(222, 184, 135);
  font-family: 'Hammersmith One', sans-serif;
  font-weight: bolder;
  font-size: 4.5rem;

  ${media.small`
    font-size: 3.5rem;
    `}
`;

const HeroText = styled.h1`
  font-family: 'Hammersmith One', sans-serif;
  color: #8892b0;
`;

const CTAWrapper = styled.div`
  display: flex;
  gap: 5em;
  font-family: 'Hammersmith One', sans-serif;
  color: #8892b0;
  margin: 4em 0 0 0;

  ${media.small`
        margin: 1em 0 0 0;
        gap: 1.2em;
    `}
`;

const ActionWrapper = styled.a`
  text-decoration: none;
  font-family: 'Hammersmith One', sans-serif;
  // color: rgb(36, 145, 36);
  // color: rgb(13, 145, 13);
  color: #97a2c5;
  padding: 1em 1.5em;
  border: 2px solid rgb(222, 184, 135);
  border-radius: 7px;

  background: linear-gradient(to right, #aebbe46b 50%, #ffffff00 50%);
  background-size: 200% 100%;
  background-position: right bottom;

  &:hover {
    color: #b6c3ee;
    background-position: left bottom;
    transition: all 1s ease;
  }

  ${media.small`
    padding: .5em;
    `}
`;

// Component definition
const Hero = () => {
  return (
    <HeroWrapper>
      <NavBar />
      <Animated
        animationIn="fadeIn"
        animationInDuration={7600}
        isVisible={true}
      >
        <Container>
          <HeroTitle>
            <p>Hello there, I am</p>
            <HeroName>Kwaku Appau-Nkansah,</HeroName>
            <HeroText>the gem you lose if ignored.</HeroText>
            <CTAWrapper>
              <ActionWrapper href="mailto:brakwakujr@gmail.com">
                Shoot me an email
              </ActionWrapper>
              <ActionWrapper href={myResume} target="_blank" rel="noreferrer">
                My Resume
              </ActionWrapper>
            </CTAWrapper>
          </HeroTitle>
        </Container>
      </Animated>
    </HeroWrapper>
  );
};

export default Hero;
