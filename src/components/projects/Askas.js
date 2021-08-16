import askasImage from '../../assets/askas.jpg';
import live from '../../assets/live.png';
import source from '../../assets/source.png';
import React from 'react';
import styled from "styled-components";
import breakpoint from '../../breakpoints';

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
    color: #95a1c5;
`;

const ProjectImageWrapper = styled.div`
    height: auto;
    max-width: 100%;
`;

const IconsWrapper = styled.div`
    display: flex;
`;

const EachIcon = styled.div`
    > a > img {
        margin: 0 3rem 0 0;
        width: 2.5rem;
        transition: all 1.4s;

        &:hover {
            transform: scale(1.4);
            // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }
    }

    
`;

const PImageWrapper = styled.img`
    filter: grayscale(100%);
    width: 80%;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    

    &:hover {
        filter: none;
        transition: all 0.2s ease-out;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
        transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.5s box-shadow, 0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
    }

    @media only screen and ${breakpoint.device.sm}{
        filter: none;
        width: 100%;
    }
`;

const Askas = () => {
    return (
        <MainContentWrapper>
            <DescriptionWrapper>
                <p>
                    A web application used by a supervisor and his subordinates to
                    keep track of the hours worked and the tasks they worked on. This
                    application was developed because the supervisor had to create an excel
                    document every week and provide a link for the subordinates to enter their
                    hours worked and what they worked on. The application uses technologies
                    such as Node / Express Js, JavaScript, Custom CSS, Bootstrap, EJS and
                    Database (MongoDB).
                </p>
                <IconsWrapper>
                    <EachIcon><a href="https://byuibroadcastaudio.herokuapp.com" target="_blank" rel="noreferrer"><img src={live} alt="byuibroadcastaudio"/></a></EachIcon>
                    <EachIcon><a href="https://github.com/brakwaku/byuibroadcastaudio" target="_blank" rel="noreferrer"><img src={source} alt="byuibroadcastaudio Github"/></a></EachIcon>
                </IconsWrapper>
            </DescriptionWrapper>
            <ProjectImageWrapper>
                <a href="https://byuibroadcastaudio.herokuapp.com" target="_blank" rel="noreferrer">
                    <PImageWrapper src={askasImage} alt="ASKAS Project" />
                </a>
            </ProjectImageWrapper>
        </MainContentWrapper>
    )
}

export default Askas;