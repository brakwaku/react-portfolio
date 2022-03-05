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


const ExcessEra = () => {
    return (
        <ExpMainWrapper>
            <ExpTitle>Managing Director & Graphic Designer | <h6>Excess Era</h6></ExpTitle>
            <TimeFrame>Jan. 2011 – Sept. 2018</TimeFrame>
            <ExperienceListWrapper>
                <ExperienceList>Negotiated constructively with clients to boost patronage by 5% over 4 months</ExperienceList>
                <ExperienceList>Created new designs through creative thinking to retain 80% of new customers and consumers.</ExperienceList>
                <ExperienceList>Increased customer satisfaction through creative use of Adobe Photoshop, Adobe Illustrator and Blender 3D.</ExperienceList>
            </ExperienceListWrapper>
        </ExpMainWrapper>
    )
}

export default ExcessEra;