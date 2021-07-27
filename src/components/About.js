import profileImage from '../assets/profile.png';
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import ScrollAnimation from 'react-animate-on-scroll';

const AboutMainWrapper = styled.div`
    background: linear-gradient(135deg, #44627D, #2C4458);
    color: #8892B0;
    padding-top: 7vw;
    padding-bottom: 5vw;
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
    font-family: 'Righteous', cursive;
`;

const AboutTextWrapper = styled.div`
    color: white;
    border: 2px solid;
    border-radius: 10px;
    padding: 1rem;
    font-family: 'Cabin Condensed', sans-serif;
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

const SkillsListWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    padding: 0px;
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
`;

const SkillsList = styled.li`
    // font-family: 'Josefin Slab', serif;
    font-family: 'Cabin Condensed', sans-serif;
    &:before {
        content: "▹ ";
        color: #8892B0;
    }
`;

const MyContainer = styled(Container)`
    position: relative;
`;


const About = () => {
    return (

        <AboutMainWrapper id="about">
            <ScrollAnimation animateIn='fadeInUp'>
                <Container>
                    <AboutTitle>Who am I?</AboutTitle>
                    <AboutContentWrapper>
                        <AboutTextWrapper>
                            <p>
                                My name is Theophilus Appau-Nkansah but usually called Kwaku.
                                I am an innovative Software Engineer / Data Science student of Brigham Young
                                University - Idaho (BYUI). I was exposed to programming in 2019 when I 
                                took a C++ class about procedural programming and I loved it. I care 
                                about solving problems and making things as simple as they can be for people so 
                                I loved the flexibility and creativity it allowed.
                            </p>
                            <p>
                                My extensive knowledge and experience in Graphic designing
                                combined with my knowledge in backend and front end development
                                makes me an exceptional Full-Stack Developer candidate. Growing up as a
                                kid I loved sketching and drawing pictures of people which
                                groomed me to pay good attention to details (especially when it comes to graphics).
                            </p>
                            <p>Over the years, I have tackled a series of projects and have had the privilege of working with technologies such as:</p>

                            <SkillsListWrapper>
                                <SkillsList>JavaScript</SkillsList>
                                <SkillsList>Node Js / Express Js</SkillsList>
                                <SkillsList>PHP</SkillsList>
                                <SkillsList>React</SkillsList>
                                <SkillsList>jQuery</SkillsList>
                                <SkillsList>MySQL</SkillsList>
                                <SkillsList>Java</SkillsList>
                                <SkillsList>C++</SkillsList>
                                <SkillsList>C#</SkillsList>
                                <SkillsList>Python</SkillsList>
                                <SkillsList>R</SkillsList>
                                <SkillsList>HTML5 & CSS</SkillsList>
                            </SkillsListWrapper>
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