import equipMeImage from '../../assets/equipme.jpg';
import source from '../../assets/source.png';
import React from 'react';
import styled from "styled-components";
import media from '../../../media';

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
    transition: all 0.2s ease-out;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.5s box-shadow, 0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

    &:hover {
        filter: none;
    }

    ${media.small`
        filter: none;
        width: 100%;
    `}
`;


const EquipMe = () => {
    return (
        <MainContentWrapper>
            <DescriptionWrapper>
                <p>
                    Collaborative work with two other developers. This is an android
                    application written in Java. The application tracks inventory of
                    company tools and employees. Users are able to add tools and assign
                    them to employees.
                </p>
                <IconsWrapper>
                    {/* <EachIcon><a href="https://byuibroadcastaudio.herokuapp.com" target="_blank"><img src={live}/></a></EachIcon> */}
                    <EachIcon><a href="https://github.com/brakwaku/C9forlife-app" target="_blank" rel="noreferrer"><img src={source} alt="Equip Me"/></a></EachIcon>
                </IconsWrapper>
            </DescriptionWrapper>
            <ProjectImageWrapper>
                <a href="https://github.com/brakwaku/equip-me" target="_blank" rel="noreferrer">
                    <PImageWrapper src={equipMeImage} alt="ASKAS Project" />
                </a>
            </ProjectImageWrapper>
        </MainContentWrapper>
    )
}

export default EquipMe;