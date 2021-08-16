import React from 'react';
import styled from "styled-components";
import breakpoint from '../../breakpoints';

const ExpMainWrapper = styled.div`
    background: #1d2f3f;
    color: #8892B0;
`;

const ExpTitle = styled.h5`
    color: #95a1c5;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;

    > h6 {
        display: inline-block;
        color: rgb(222,184,135);;
    }
`;

const TimeFrame = styled.div`
    color: #8892B0;
    font-style: italic;
    font-size: .8rem;
    margin: -.7rem 0 0 0;
`;

const ExperienceListWrapper = styled.ul`
    color: #95a1c5;
    margin: 15px 0px 0px 0px;
    list-style: none;

    @media only screen and ${breakpoint.device.sm}{
        padding-left: 0;
    }
`;

const ExperienceList = styled.li`
    font-family: 'Cabin Condensed', sans-serif;
    &:before {
        content: "▹ ";
        color: rgb(222,184,135);;
        font-size: 1rem;
        margin: 0 .5rem 0 0;
    }

    > a {
        text-decoration: none;
        transition: all 1.4s;
        &:hover {
            transform: scale(1.4);
        }
    }
`;


const FlexSim = () => {
    return (
        <ExpMainWrapper>
            <ExpTitle>Software Developer | <h6>FlexSim Software Products, Inc.</h6></ExpTitle>
            <TimeFrame>April 2021 - Present</TimeFrame>
            <ExperienceListWrapper>
                <ExperienceList>Partnered in developing web applications and components utilizing PHP, Laravel / Livewire, Tailwind and Alpine Js</ExperienceList>
                <ExperienceList>Utilizing Eloquent models for easier and faster interaction with database.</ExperienceList>
                <ExperienceList>Partnered with teammates utilizing GIT version control.</ExperienceList>
                <ExperienceList>Wrote unit tests using PHPUnit to ensure quality components and products.</ExperienceList>
            </ExperienceListWrapper>
        </ExpMainWrapper>
    )
}

export default FlexSim;