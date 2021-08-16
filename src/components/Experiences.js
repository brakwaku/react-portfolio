import React from 'react';
import { Container } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from "styled-components";
import breakpoint from '../breakpoints';
import LineMenu from './features/LineMenu';

const ExperiencesMainWrapper = styled.div`
    background: #1d2f3f;
    // background: #1d2f3f;
    color: #8892B0;
    padding-top: 7vw;
    padding-bottom: 5vw;
    box-shadow: 0px -4px 3px rgba(0, 0, 0, 0.123), 0 0 6px rgba(0, 0, 0, 0.151);

    @media only screen and ${breakpoint.device.sm}{
        // font-size: 3.5rem;
    }
`;

const ExperiencesContentWrapper = styled.div`
    // display: flex;
`;

const ExperiencesTitle = styled.h2`
    margin: 0 0 1rem 0;
    color: #95a1c5;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    // font-family: 'Righteous', cursive;

    @media only screen and ${breakpoint.device.sm}{
        text-align: center;
        margin-bottom: 2rem;
    }
`;


const Experiences = () => {
    return (
        <ExperiencesMainWrapper id="experiences">

            <ScrollAnimation animateIn='fadeInUp'>
                <Container>
                    <ExperiencesTitle>Work Experience</ExperiencesTitle>
                    <ExperiencesContentWrapper>
                        <LineMenu />
                    </ExperiencesContentWrapper>
                </Container>

            </ScrollAnimation>
        </ExperiencesMainWrapper>
    )
}

export default Experiences;
