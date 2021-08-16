import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import '../App.css';
import styled from "styled-components";
import Askas from './projects/Askas';
import C9forlife from './projects/C9forlife';
import EquipMe from './projects/EquipMe';
import Others from './projects/Others';
import ScrollAnimation from 'react-animate-on-scroll';
import breakpoint from '../breakpoints';

const ProjectsMainWrapper = styled.div`
    // background: #2C4458;
    background: #1f3141;
    color: #8892B0;
    padding-top: 7vw;
    padding-bottom: 5vw;

    @media only screen and ${breakpoint.device.sm}{
        // font-size: 3.5rem;
    }
`;
const ProjectsContentWrapper = styled.div`
    // border: 2px solid;
`;

const ProjectsTitle = styled.h2`
    color: #95a1c5;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    // font-family: 'Righteous', cursive;
`;


const Projects = () => {
    return (
        <ProjectsMainWrapper id="projects">
            <ScrollAnimation animateIn='fadeInUp'>
            <Container>
                <ProjectsTitle>Projects</ProjectsTitle>
                <ProjectsContentWrapper>
                    <Tabs defaultActiveKey="askas" className="mb-3">
                        <Tab eventKey="askas" title="ASKAS">
                            <Askas/>
                        </Tab>
                        <Tab eventKey="c9forlife" title="C9forlife">
                            <C9forlife />
                        </Tab>
                        <Tab eventKey="equipMe" title="EquipMe">
                            <EquipMe />
                        </Tab>
                        <Tab eventKey="otherProjects" title="Others">
                            <Others />
                        </Tab>
                    </Tabs>
                </ProjectsContentWrapper>
            </Container>
            </ScrollAnimation>
        </ProjectsMainWrapper>
    )
}

export default Projects;
