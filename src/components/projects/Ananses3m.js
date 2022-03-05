import React from 'react';
import ananses3mImage from '../../assets/ananses3m.jpg';
import live from '../../assets/live.png';
import source from '../../assets/source.png';
import styled from "styled-components";
import media from '../../media';

const MainContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    row-gap: 3rem;
    column-gap: 3rem;

    ${media.small`
        display: flex;
        flex-direction: column-reverse;
    `}
`;

const DescriptionWrapper = styled.div`
    color: #95a1c5;
`;

const ProjectImageWrapper = styled.div`
    height: auto;
    max-width: 100%;
`;

const IconsWrapper = styled.div`
    display: flex;
`;

const EachIcon = styled.div`
    > a > img {
        margin: 0 3rem 0 0;
        width: 2.5rem;
        transition: all 1.4s;

        &:hover {
            transform: scale(1.4);
            // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }
    }

    
`;

const PImageWrapper = styled.img`
    filter: grayscale(100%);
    width: 80%;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    

    &:hover {
        filter: none;
        transition: all 0.2s ease-out;
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
        transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.5s box-shadow, 0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
    }

    ${media.small`
        filter: none;
        width: 100%;
    `}
`;

const Ananses3m = () => {
    return (
        <MainContentWrapper>
            <DescriptionWrapper>
                <p>
                    An eCommerce single page web application for selling goods and services.
                    This application uses the MVC patern of development. Users are able to see
                    listed products based on categories. They are also able to search for products
                    by name or category. It enforces user authorization and authentication. 
                    Administrators are able to perforn CRUD actions on products. The application
                    uses technologies such as Node / Express Js, JavaScript, Custom CSS, Bootstrap,
                    React and a Database (MongoDB).
                </p>
                <IconsWrapper>
                    <EachIcon><a href="https://ananses3m.herokuapp.com" target="_blank" rel="noreferrer"><img src={live} alt="C9ForLife"/></a></EachIcon>
                    <EachIcon><a href="https://github.com/brakwaku/ananses3mShop" target="_blank" rel="noreferrer"><img src={source} alt="C9ForLife Github"/></a></EachIcon>
                </IconsWrapper>
            </DescriptionWrapper>
            <ProjectImageWrapper>
                <a href="https://ananses3m.herokuapp.com" target="_blank" rel="noreferrer">
                    <PImageWrapper src={ananses3mImage} alt="Cloud 9 for life Project" />
                </a>
            </ProjectImageWrapper>
        </MainContentWrapper>
    )
}

export default Ananses3m
