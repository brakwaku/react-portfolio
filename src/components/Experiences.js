import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import styled from "styled-components";

const ExperiencesMainWrapper = styled.div`
    background: linear-gradient(135deg, #6086A9, #334C62);
    color: #8892B0;
    padding-top: 10vw;
`;
const ExperiencesContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
    row-gap: 50px;
    column-gap: 50px;
`;

const ExperiencesTitle = styled.h2`
    color: white;
`;

const ExperiencesTextWrapper = styled.div`
    color: white;
`;

const Experiences = () => {
    return (
        <ExperiencesMainWrapper id="experiences">
            <Container>
                <ExperiencesTitle>Experiences</ExperiencesTitle>
                <ExperiencesContentWrapper>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
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
