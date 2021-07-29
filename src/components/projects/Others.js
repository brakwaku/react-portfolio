import React from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components";
import ScrollAnimation from 'react-animate-on-scroll';
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
    background: #8892B0;
    color: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.2s ease-out;
    transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.5s box-shadow, 0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

    &:hover {
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
        transform: rotate(.2deg);
    }
`;

const IconWrapper = styled.div`

`;

const TextWrapper = styled.div`

`;

const Others = () => {
    return (
        <OutterWrapper>
            <MainProjectWrapper>
                <IconWrapper>ICONS HERE</IconWrapper>
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
                </TextWrapper>
            </MainProjectWrapper>
            <MainProjectWrapper>
                <IconWrapper>
                    ICONS HERE
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
                </TextWrapper>
            </MainProjectWrapper>

            <MainProjectWrapper>
                <IconWrapper>ICONS HERE</IconWrapper>
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
                </TextWrapper>
            </MainProjectWrapper>

            <MainProjectWrapper>
                <IconWrapper>ICONS HERE</IconWrapper>
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
                </TextWrapper>
            </MainProjectWrapper>
        </OutterWrapper>
    )
}

export default Others;