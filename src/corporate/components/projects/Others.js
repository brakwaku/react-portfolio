import React from 'react';
import source from '../../assets/source.png';
import styled from "styled-components";
import media from '../../../media';


const OutterWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr;
    gap: 1rem;
    row-gap: 1.5rem;
    column-gap: 1.5rem;
    padding-top: 1.2rem;

    ${media.small`
        display: flex;
        flex-direction: column;
    `}
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
        transform: scale(1.031);
        // transform: rotate(.2deg);
    }
`;

const IconWrapper = styled.div`
    display: flex;
`;

const ProjTitle = styled.h4`
    color: #aebbe4;
    // color: #95a1c5;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`;

const TextWrapper = styled.div`

`;

const TechnologiesWrapper = styled.div`
    font-size: .8rem;
    display: flex;
    font-style: oblique;

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

const Others = () => {
    return (
        <OutterWrapper>
            <MainProjectWrapper>
                <IconWrapper>
                    <EachIcon>
                        <a href="https://github.com/brakwaku/CSharp-Sacrament-Meeting-Planner" target="_blank" rel="noreferrer">
                            <img src={source} alt="Github Repo"/>
                        </a>
                    </EachIcon>
                    <ProjTitle>Meeting Planner</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <p>
                        Collaborated with another developer to build a web application using the
                        .NETCore and C#. The application follows the MVC pattern of development.
                        Data is stored in a MySQL database which is queried and served to the user
                        based on the parameters passed to the backend. 
                    </p>
                    <TechnologiesWrapper>
                        <p>C#</p>
                        <p>Linq Queries</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>

            {/* <MainProjectWrapper>
                <IconWrapper>
                    <EachIcon>
                        <a href="https://github.com/brakwaku/Ananses3mFrontend" target="_blank" rel="noreferrer">
                            <img src={source} alt="Github Repo"/>
                        </a>
                    </EachIcon>
                    <ProjTitle>Anansesɛm Frontend</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <p>
                        The front-end of an ecommerce web application that displays items sold by the company.
                        The application has an admin page where administrators can add and remove items. Users can add and
                        remove items from their cart and place orders. The application uses technologies
                        such as Node / Express Js, JavaScript, Custom CSS, Bootstrap, Vue and
                        Database management.
                    </p>
                    <TechnologiesWrapper>
                        <p>Vue</p>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>Bootstrap</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper> */}

            <MainProjectWrapper>
                <IconWrapper>
                    <EachIcon>
                        <a href="https://github.com/brakwaku/react-interface" target="_blank" rel="noreferrer">
                            <img src={source} alt="Github Repo"/>
                        </a>
                    </EachIcon>
                    <ProjTitle>Appointments Organizer</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <p>
                        A web application that is used to set appointments for an animal doctor.
                        The application collects information such as the name of the animal,
                        the name of its ownwer, time of the appointment and date of the appointment.
                        Appointments can be created, deleted, sorted and searched on the fly. The application uses technologies
                        such as Node / Express Js, Custom CSS, Bootstrap, and
                        React Js.
                    </p>
                    <TechnologiesWrapper>
                        <p>Node Js</p>
                        <p>React Js</p>
                        <p>CSS</p>
                        <p>Bootstrap</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>

            <MainProjectWrapper>
                <IconWrapper>
                    <EachIcon>
                        <a href="https://github.com/brakwaku/house-year_predict" target="_blank" rel="noreferrer">
                            <img src={source} alt="Github Repo"/>
                        </a>
                    </EachIcon>
                    <ProjTitle>Year Predictor</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <p>
                        A machine learning model that predicts the year a house was built based on some
                        variables provided by the data. It also looks at some possible relationships between the 
                        various variables. The model uses python libraries such as pandas, numpy, seaborn,
                        altair and sklearn.
                    </p>
                    <TechnologiesWrapper>
                        <p>Python</p>
                        <p>Pandas</p>
                        <p>Seaborn</p>
                        <p>Sklearn</p>
                        <p>Numpy</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>

            <MainProjectWrapper>
                <IconWrapper>
                    <EachIcon>
                        <a href="https://github.com/brakwaku/Gradient-preview" target="_blank" rel="noreferrer">
                            <img src={source} alt="Github Repo"/>
                        </a>
                    </EachIcon>
                    <ProjTitle>Gradient Preview</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <p>
                        A simple web page that helps designers have a quick preview of a two-color gradient.
                        This serves as a tool to help designers get a visual representation of a gradient idea
                        before actually applying it.
                    </p>
                    <TechnologiesWrapper>
                        <p>JavaScript</p>
                        <p>HTML</p>
                        <p>CSS</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>
        </OutterWrapper>
    )
}

export default Others;