import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import styled from "styled-components";


const Projects = () => {
    return (
        <AboutMainWrapper>
            <Container>
                <AboutTitle>About Me</AboutTitle>
                <AboutContentWrapper>
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
                </AboutContentWrapper>
            </Container>
        </AboutMainWrapper>
    )
}

export default Projects;
