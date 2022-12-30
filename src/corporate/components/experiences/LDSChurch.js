import React from 'react';
import styled from "styled-components";
import media from '../../../media';

const BFMainWrapper = styled.div`
    background: #1d2f3f;
    color: #8892B0;
`;

const BFTitle = styled.h5`
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


const LDSChurch = () => {
    return (
        <BFMainWrapper>
            <BFTitle>Software Engineer | <h6>The Church of Jesus Christ of Latter-Day Saints</h6></BFTitle>
            <TimeFrame>Jan. 2021 - April 2021</TimeFrame>
            <ExperienceListWrapper>
                <ExperienceList>Partnered in developing of a web application and components utilizing React JS and Java</ExperienceList>
                <ExperienceList>Partnered with teammates utilizing GIT version control</ExperienceList>
                <ExperienceList>Wrote unit tests using jest and enzyme to ensure quality products.</ExperienceList>
            </ExperienceListWrapper>
        </BFMainWrapper>
    )
}

export default LDSChurch;