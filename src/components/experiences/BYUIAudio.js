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


const BYUIAudio = () => {
    return (
        <ExpMainWrapper>
            <ExpTitle>Administrative Assistant | <h6>BYU-Idaho Av Production</h6></ExpTitle>
            <TimeFrame>July 2019 - Present</TimeFrame>
            <ExperienceListWrapper>
                <ExperienceList>Devised a NodeJS web application to track work hours and tasks assigned to employees. <a href="https://github.com/brakwaku/byuibroadcastaudio" target='_blank' rel="noreferrer"> Source Code</a></ExperienceList>
                <ExperienceList>Boosted workflow and efficiency with monthly inventory sheets employing Microsoft office tools.</ExperienceList>
                <ExperienceList>Process audio files with Avid Pro Tools to enhance consumer satisfaction and engagement by 99%.</ExperienceList>
                <ExperienceList>Created monthly inventory sheets with Microsoft Excel to keep track of gear and for training purposes.</ExperienceList>
            </ExperienceListWrapper>
        </ExpMainWrapper>
    )
}

export default BYUIAudio;