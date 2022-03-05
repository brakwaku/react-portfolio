import styled from "styled-components";
import breakpoint from '../../breakpoints';
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

    /* @media only screen and ${breakpoint.device.sm}{
        padding-left: 0;
    } */
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

const IBM = () => {
    return (
        <ExpMainWrapper>
            <ExpTitle>Software Developer | <h6>International Business Machines (IBM) Corp.</h6></ExpTitle>
            <TimeFrame>Feb. 2022 - Present</TimeFrame>
            <ExperienceListWrapper>
                <ExperienceList>Design, develop, test and deliver offerings using leading edge and proven technologies.</ExperienceList>
                <ExperienceList>Work in an Agile, collaborative environment to understand stakeholder requirements.</ExperienceList>
                <ExperienceList>Design, code and test innovative component-level software solutions.</ExperienceList>
                <ExperienceList>Ensure that implemented solutions are unit tested and ready to be integrated into their product.</ExperienceList>
                <ExperienceList>Debug customer-reported problems: design, develop and unit test code fixes.</ExperienceList>
            </ExperienceListWrapper>
        </ExpMainWrapper>
    )
}

export default IBM
