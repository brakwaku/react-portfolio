import profileImage from '../assets/profile6.jpg';
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import ScrollAnimation from 'react-animate-on-scroll';

const AboutMainWrapper = styled.div`
    background: linear-gradient(135deg, #6086A9, #334C62);
    color: #8892B0;
    padding-top: 10vw;
`;

const AboutContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
    row-gap: 50px;
    column-gap: 50px;
`;

const AboutTitle = styled.h2`
    color: white;
`;

const AboutTextWrapper = styled.div`
    color: white;
`;

const AboutPicWrapper = styled.div`
    max-width: 500px;
`;

const ImageWrapper = styled.img`
    height: auto;
    max-width: 100%;
    border-radius: 50%;
    border: 6px solid rgb(222,184,135);
`;


const About = () => {
    return (

        <AboutMainWrapper id="about">
            <ScrollAnimation animateIn='fadeInUp'>
                <Container>
                    <AboutTitle>About Me</AboutTitle>
                    <AboutContentWrapper>
                        <AboutTextWrapper>
                            <p>
                                My name is Theophilus Appau-Nkansah but people call me Kwaku.
                                I am an innovative Software Engineer student of Brigham Young
                                University - Idaho (BYUI). I have efficient skills in C++,
                                Java, JavaScript, Node js / Express js, CSS, HTML, PHP, React,
                                JQuery and MySQL. I care about solving problems and making
                                things as simple as they can be for people.
                            </p>
                            <p>
                                My extensive knowledge and experience in Graphic designing
                                combined with my knowledge in backend and front end development
                                makes me an exceptional Full-Stack Developer candidate. As a
                                kid I loved to sketch cartoons and pictures of people which
                                groomed me to pay good attention to details.
                            </p>
                        </AboutTextWrapper>
                        <AboutPicWrapper>
                            <ImageWrapper src={profileImage} alt="Kwaku Picture" />
                        </AboutPicWrapper>
                    </AboutContentWrapper>
                </Container>
            </ScrollAnimation>
        </AboutMainWrapper>
    )
}

export default About;