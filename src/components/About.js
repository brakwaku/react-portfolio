import profileImage from '../assets/profile.jpg';
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import media from '../media';

const AboutMainWrapper = styled.div`
  // background: linear-gradient(135deg, #44627D, #2C4458);
  background: #1d2f3f;
  color: #8892b0;
  padding-top: 5vw;
  padding-bottom: 3vw;
`;

const AboutContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  row-gap: 50px;
  column-gap: 50px;

  ${media.extraSmall`
    display: flex;
        flex-direction: column-reverse;
    `}

  ${media.small`
    display: flex;
        flex-direction: column-reverse;
    `}
`;

const AboutTitle = styled.h2`
  color: #95a1c5;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;

  ${media.small`
    text-align: center;
    margin-bottom: 2rem;
    `}
`;

const AboutTextWrapper = styled.div`
  color: #95a1c5;
  border: 2px solid #8892b088;
  // border: 2px solid #8892B0;
  border-width: 0.55rem 0 0 0.18rem;
  // border-width: .55rem .1rem .1rem .1rem;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  // font-family: 'Cabin Condensed', sans-serif;
`;

const AboutPicWrapper = styled.div`
  max-width: 500px;
`;

const ImageWrapper = styled.img`
  height: auto;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: 2.5rem dashed #8892b088;
  // border: 2.5rem dashed rgb(222,184,135);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.123), 0 0 6px rgba(0, 0, 0, 0.151);

  filter: grayscale(100%);

  &:hover {
    filter: none;
  }

  ${media.small`
    max-width: 60%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    `}
`;

const SkillsListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;

  ${media.small`
    grid-template-columns: repeat(2, minmax(140px, 200px));
    `}
`;

const SkillsList = styled.li`
  // font-family: 'Josefin Slab', serif;
  font-family: 'Cabin Condensed', sans-serif;
  &:before {
    content: '??? ';
    // content: "??? ";
    color: #8892b0;
    font-size: 0.7rem;
  }
`;

const About = () => {
  return (
    <AboutMainWrapper id="about">
      <ScrollAnimation animateIn="fadeInUp">
        <Container>
          <AboutTitle>Who am I?</AboutTitle>
          <AboutContentWrapper>
            <AboutTextWrapper>
              <p>
                My name is Theophilus (Kwaku) Appau-Nkansah. I am an innovative
                creator. I graduated from Brigham Young University - Idaho
                (BYUI) with a B.S. in Software Engineering and a certificate in
                Data Science. I was exposed to programming in 2019 when I took a
                C++ class about procedural programming and I loved it. I care
                about making complex things as simple as possible and solving
                problems for people so I loved the flexibility and creativity
                programing allowed.
              </p>
              <p>
                My extensive knowledge and experience in Graphic designing
                combined with my technical knowledge in backend and front end
                development makes me an exceptional Full-Stack Developer
                candidate. Growing up as a kid I loved sketching and drawing
                pictures of people which groomed me to pay good attention to
                detail (especially when it comes to graphics).
              </p>
              <p>
                Over the years, I have tackled a series of projects and have had
                the privilege of working with technologies such as:
              </p>

              <SkillsListWrapper>
                <SkillsList>JavaScript</SkillsList>
                <SkillsList>Node Js / Express Js</SkillsList>
                <SkillsList>PHP</SkillsList>
                <SkillsList>React & Angular</SkillsList>
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
              <ImageWrapper src={profileImage} alt="Kwaku's Profile Picture" />
            </AboutPicWrapper>
          </AboutContentWrapper>
        </Container>
      </ScrollAnimation>
    </AboutMainWrapper>
  );
};

export default About;
