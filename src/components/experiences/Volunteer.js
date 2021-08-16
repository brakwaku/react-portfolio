import React from 'react';
import styled from "styled-components";
import breakpoint from '../../breakpoints';

const OutterWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr;
    gap: 1rem;
    row-gap: 1.5rem;
    column-gap: 1.5rem;
    padding-top: 1.2rem;

    @media only screen and ${breakpoint.device.sm}{
        display: flex;
        flex-direction: column;
    }
`;

const MainProjectWrapper = styled.div`
    background: #143149;
    // background: #8892B0;
    color: #95a1c5;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.2s ease-out;
    // transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.5s box-shadow, 0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

    &:hover {
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
        transform: scale(1.33);
        // transform: rotate(.2deg);
    }

    @media only screen and ${breakpoint.device.sm}{
        &:hover {
            transform: scale(1.03);
        }
    }
`;

const IconWrapper = styled.div`
    display: flex;
`;

const ProjTitle = styled.h6`
    color: #aebbe4;
    // color: #95a1c5;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`;

const TextWrapper = styled.div`

`;

const TechnologiesWrapper = styled.div`
    font-size: .67rem;
    opacity: .7;
    display: flex;

    > p {
        margin: 0 2rem 0 0;
    }
`;

const EachIcon = styled.div`
    > a > img {
        margin: 0 3rem 0 0;
        width: 2.5rem;
        transition: all 1.4s;

        &:hover {
            transform: scale(1.4);
            // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            filter: hue-rotate(55%);
        }
    }

    
`;

const ExperienceListWrapper = styled.ul`
    color: #95a1c5;
    margin: 15px 0px 0px 0px;
    list-style: none;
    padding-left: 0;
`;

const ExperienceList = styled.li`
    font-family: 'Cabin Condensed', sans-serif;
    font-size: .7rem;
    &:before {
        content: "▹ ";
        color: rgb(222,184,135);;
        font-size: .8rem;
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


const Volunteer = () => {
    return (
        <OutterWrapper>
            <MainProjectWrapper>
                <IconWrapper>
                    <ProjTitle>Heber J. Grant Mentor</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <ExperienceListWrapper>
                        <ExperienceList>Mentored new incoming students in setting goals and making plans for a smooth transition into college to achieve academic success and beyond</ExperienceList>
                        <ExperienceList>Met regularly with those students to follow up on goals made and provide emotional support</ExperienceList>
                        <ExperienceList>Collaborated with a team of over 10 mentors weekly to discuss and plan how to improve overall mentors' techniques..</ExperienceList>
                    </ExperienceListWrapper>
                    <TechnologiesWrapper>
                        <p>Service</p>
                        <p>Hope</p>
                        <p>Teacher</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>

            <MainProjectWrapper>
                <IconWrapper>
                    <ProjTitle>Children Are Reason Enough</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <ExperienceListWrapper>
                        <ExperienceList>Collaborated with other developers to build a modern <a href="www.buildingfit.com">website</a> for the company.</ExperienceList>
                        <ExperienceList>Leverage HTML, CSS, JS and WP to build a website consistent with UX design best practices.</ExperienceList>
                        <ExperienceList>Collaborated efforts through regular meetings and consultation in an agile development environment.</ExperienceList>
                    </ExperienceListWrapper>
                    <TechnologiesWrapper>
                        <p>Principle 1</p>
                        <p>Principle 2</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>

            <MainProjectWrapper>
                <IconWrapper>
                    <ProjTitle>BuildingFit</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <ExperienceListWrapper>
                        <ExperienceList>Collaborated with other developers to build a modern <a href="www.buildingfit.com">website</a> for the company.</ExperienceList>
                        <ExperienceList>Leverage HTML, CSS, JS and WP to build a website consistent with UX design best practices.</ExperienceList>
                        <ExperienceList>Collaborated efforts through regular meetings and consultation in an agile development environment.</ExperienceList>
                    </ExperienceListWrapper>
                    <TechnologiesWrapper>
                        <p>Team-work</p>
                        <p>Self motivation</p>
                        <p>Scrum</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>

            <MainProjectWrapper>
                <IconWrapper>
                    <EachIcon>
                    </EachIcon>
                    <ProjTitle>Music Teacher</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <ExperienceListWrapper>
                        <ExperienceList>Collaborated with other developers to build a modern <a href="www.buildingfit.com">website</a> for the company.</ExperienceList>
                        <ExperienceList>Leverage HTML, CSS, JS and WP to build a website consistent with UX design best practices.</ExperienceList>
                        <ExperienceList>Collaborated efforts through regular meetings and consultation in an agile development environment.</ExperienceList>
                    </ExperienceListWrapper>
                    <TechnologiesWrapper>
                        <p>Principle 1</p>
                        <p>Principle 2</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>
        </OutterWrapper>
    )
}

export default Volunteer;