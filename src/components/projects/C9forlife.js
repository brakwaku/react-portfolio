import c9forlifeImage from '../../assets/c9forlife.jpg';
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import ScrollAnimation from 'react-animate-on-scroll';
import breakpoint from '../../breakpoints';
// import { MainContentWrapper, DescriptionWrapper, ProjectImageWrapper, PImageWrapper } from './Askas';

const MainContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    row-gap: 3rem;
    column-gap: 3rem;

    @media only screen and ${breakpoint.device.sm}{
        display: flex;
        flex-direction: column-reverse;
    }
`;

const DescriptionWrapper = styled.div`
    color: white;
`;

const ProjectImageWrapper = styled.div`
    height: auto;
    max-width: 100%;
`;

const PImageWrapper = styled.img`
    filter: grayscale(100%);
    width: 80%;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.2s ease-out;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.5s box-shadow, 0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

    &:hover {
        filter: none;
    }

    @media only screen and ${breakpoint.device.sm}{
        filter: none;
        width: 100%;
    }
`;


const C9forlife = () => {
    return (
        <MainContentWrapper>
            <DescriptionWrapper>
                <p>
                  A web application that serves as an environment for people who
                  have any form of depression, PTSD, victims of abuse or trauma
                  to interact with an administrator who cordinates activities. Users
                  of the app are able to take and complete tasks as they get rewarded.
                  They can also suggest activities that can be added by the administrator
                  so that others can perform it too. The application uses technologies
                  such as Node / Express Js, JavaScript, Custom CSS, Bootstrap, EJS and
                  Database (MongoDB).
                </p>
            </DescriptionWrapper>
            <ProjectImageWrapper>
                <PImageWrapper src={c9forlifeImage} alt="ASKAS Project" />
            </ProjectImageWrapper>
        </MainContentWrapper>
    )
}

export default C9forlife;