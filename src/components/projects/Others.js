import React from 'react';
import source from '../../assets/source.png';
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
        transform: scale(1.031);
        // transform: rotate(.2deg);
    }
`;

const IconWrapper = styled.div`
    display: flex;
`;

const ProjTitle = styled.h4`
    color: #95a1c5;
    font-family: 'Poppins', sans-serif;
`;

const TextWrapper = styled.div`

`;

const TechnologiesWrapper = styled.div`
    font-size: .8rem;
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

const Others = () => {
    return (
        <OutterWrapper>
            <MainProjectWrapper>
                <IconWrapper>
                    <EachIcon>
                        <a href="https://github.com/brakwaku/CSharp-Sacrament-Meeting-Planner" target="_blank">
                            <img src={source} />
                        </a>
                    </EachIcon>
                    <ProjTitle>Sacrament Meeting Planner</ProjTitle>
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
                        <p>Linq</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>

            <MainProjectWrapper>
                <IconWrapper>
                    <EachIcon>
                        <a href="https://github.com/brakwaku/byuibroadcastaudio" target="_blank">
                            <img src={source} />
                        </a>
                    </EachIcon>
                    <ProjTitle>Project Title</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <p>
                        A web application that is used by a supervisor and his subordinates to
                        keep track of the hours worked and the tasks they worked on. This
                        application was developed because the supervisor had to create an excel
                        document every week and provide a link for the subordinates to enter their
                        hours worked and what they worked on. The application uses technologies
                        such as Node / Express Js, JavaScript, Custom CSS, Bootstrap, EJS and
                        Database (MongoDB).
                    </p>
                    <TechnologiesWrapper>
                        <p>Tech 1</p>
                        <p>Tech 2</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>

            <MainProjectWrapper>
                <IconWrapper>
                    <EachIcon>
                        <a href="https://github.com/brakwaku/byuibroadcastaudio" target="_blank">
                            <img src={source} />
                        </a>
                    </EachIcon>
                    <ProjTitle>Project Title</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <p>
                        A web application that is used by a supervisor and his subordinates to
                        keep track of the hours worked and the tasks they worked on. This
                        application was developed because the supervisor had to create an excel
                        document every week and provide a link for the subordinates to enter their
                        hours worked and what they worked on. The application uses technologies
                        such as Node / Express Js, JavaScript, Custom CSS, Bootstrap, EJS and
                        Database (MongoDB).
                    </p>
                    <TechnologiesWrapper>
                        <p>Tech 1</p>
                        <p>Tech 2</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>

            <MainProjectWrapper>
                <IconWrapper>
                    <EachIcon>
                        <a href="https://github.com/brakwaku/byuibroadcastaudio" target="_blank">
                            <img src={source} />
                        </a>
                    </EachIcon>
                    <ProjTitle>Project Title</ProjTitle>
                </IconWrapper>
                <TextWrapper>
                    <p>
                        A web application that is used by a supervisor and his subordinates to
                        keep track of the hours worked and the tasks they worked on. This
                        application was developed because the supervisor had to create an excel
                        document every week and provide a link for the subordinates to enter their
                        hours worked and what they worked on. The application uses technologies
                        such as Node / Express Js, JavaScript, Custom CSS, Bootstrap, EJS and
                        Database (MongoDB).
                    </p>
                    <TechnologiesWrapper>
                        <p>Tech 1</p>
                        <p>Tech 2</p>
                    </TechnologiesWrapper>
                </TextWrapper>
            </MainProjectWrapper>
        </OutterWrapper>
    )
}

export default Others;