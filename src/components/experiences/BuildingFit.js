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


const BuildingFit = () => {
    return (
        <ExpMainWrapper>
            <ExpTitle>Web & Full Stack Developer | <h6>BuildingFit LLC</h6></ExpTitle>
            <TimeFrame>Sept. 2020 - Dec 2020</TimeFrame>
            <ExperienceListWrapper>
                <ExperienceList>Cooperated team efforts to create modern responsive company <a href="https://buildingfit.com/" target='_blank' rel="noreferrer">website</a> in an agile development environment</ExperienceList>
                <ExperienceList>Leverage HTML, CSS, JavaScript and WordPress to build a website consistent with UX design best practices.</ExperienceList>
                <ExperienceList>Implement effective SEO principles to attract more useful web traffic.</ExperienceList>
            </ExperienceListWrapper>
        </ExpMainWrapper>
    )
}

export default BuildingFit;