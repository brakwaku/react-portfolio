import React from 'react';
import styled from "styled-components";
import media from '../../media';

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

    ${media.small`
        padding-left: 0;
    `}
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


const Rogmoth = () => {
    return (
        <ExpMainWrapper>
            <ExpTitle>Assistant Director | <h6>Rogmoth Ventures Ltd</h6></ExpTitle>
            <TimeFrame>March 2012 - July 2016</TimeFrame>
            <ExperienceListWrapper>
                <ExperienceList>Conducted and presided over meetings of about 20 people to enhance customer trust and satisfaction</ExperienceList>
                <ExperienceList>Facilitated one-on-one training in team work and communication skills to raise output by about 12%.</ExperienceList>
                <ExperienceList>Trained 12 staff members on teamwork to enhance work efficiency.</ExperienceList>
                <ExperienceList>Increased office efficiency by 15% through weekly feedback reports of all employees.</ExperienceList>
                <ExperienceList>Saved company GHC53,450 ($10,000) through detailed analysis of contracts to improve problem solving skills.</ExperienceList>
            </ExperienceListWrapper>
        </ExpMainWrapper>
    )
}

export default Rogmoth;