import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import styled from "styled-components";
import breakpoint from '../breakpoints';

const ExperiencesMainWrapper = styled.div`
background: linear-gradient(135deg, #44627D, #2C4458);
    color: #8892B0;
    padding-top: 7vw;
    padding-bottom: 5vw;

    @media only screen and ${breakpoint.device.sm}{
        // font-size: 3.5rem;
    }
`;
const ExperiencesContentWrapper = styled.div`

`;

const ExperiencesTitle = styled.h2`
    color: white;
    font-family: 'Righteous', cursive;
`;


const Experiences = () => {
    return (
        <ExperiencesMainWrapper id="experiences">
            <Container>
                <ExperiencesTitle>Experiences</ExperiencesTitle>
                <ExperiencesContentWrapper>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-4 col3">
                        <Tab eventKey="home" title="Home">
                            Home
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            Profile
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            Contact
                        </Tab>
                    </Tabs>
                </ExperiencesContentWrapper>
            </Container>
        </ExperiencesMainWrapper>
    )
}

export default Experiences;
