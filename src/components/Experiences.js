import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import styled from "styled-components";
import breakpoint from '../breakpoints';

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
    display: flex;
`;

const ExperiencesContent = styled.div`
    display: flex;
`;

const ExperiencesTitle = styled.h2`
    color: #95a1c5;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    // font-family: 'Righteous', cursive;

    @media only screen and ${breakpoint.device.sm}{
        text-align: center;
        margin-bottom: 2rem;
    }
`;

const VerticalMenu = styled.div`
    > a {
        background-color: #eee;
        color: black;
        display: block;
        padding: 12px;
        text-decoration: none;
    }

    > a:hover {
        background-color: #ccc;
    }

    > a:active {
        background-color: #04AA6D;
        color: white;
    }
`;

export const ExperienceMenu = () => {
    return (
        <VerticalMenu>
            <a href="#" class="active">Home</a>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
        </VerticalMenu>
    )
}


const Experiences = () => {
    return (
        <ExperiencesMainWrapper id="experiences">
            <Container>
                <ExperiencesTitle>Experiences</ExperiencesTitle>
                <ExperiencesContentWrapper>
                    <ExperienceMenu />
                    <ExperiencesContent></ExperiencesContent>
                    {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-4 col3">
                        <Tab eventKey="home" title="Home">
                            Home
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            Profile
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            Contact
                        </Tab>
                    </Tabs> */}
                </ExperiencesContentWrapper>
            </Container>
        </ExperiencesMainWrapper>
    )
}

export default Experiences;
