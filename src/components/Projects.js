import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import styled from "styled-components";

const ProjectsMainWrapper = styled.div`
    background: linear-gradient(135deg, #6086A9, #334C62);
    color: #8892B0;
    padding-top: 10vw;
`;
const ProjectsContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
    row-gap: 50px;
    column-gap: 50px;
`;

const ProjectsTitle = styled.h2`
    color: white;
`;

const ProjectsTextWrapper = styled.div`
    color: white;
`;

const Projects = () => {
    return (
        <ProjectsMainWrapper id="projects">
            <Container>
                <ProjectsTitle>Projects</ProjectsTitle>
                <ProjectsContentWrapper>
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
                </ProjectsContentWrapper>
            </Container>
        </ProjectsMainWrapper>
    )
}

export default Projects;
