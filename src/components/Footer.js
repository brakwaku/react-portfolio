import React from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';
import styled from "styled-components";


const FooterWrapper = styled(Container)`
    padding: 1rem;
    color: #676e74;
    text-align: center;

    > p {
        font-size: .7rem;
    }
`;

const FooterContentWrapper = styled.div`
    background: #141d25;
`;

const FooterLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: darken(white, 50%);

    > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.5rem;
        width: 5rem;
        height: 5rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-2px);
        }
    }
`;

const Footer = () => {
    return (
        <FooterContentWrapper>
            <FooterWrapper>
                <FooterLinksWrapper>
                    <a href="https://www.linkedin.com/in/theophilus-kwaku-appau-nkansah-b57393a2" target="_blank">
                        <i class="fa fa-linkedin fa-inverse"></i>
                    </a>
                    <a href="https://github.com/brakwaku" target="_blank">
                        <i class="fa fa-github fa-inverse"></i>
                    </a>
                    <a href="https://www.facebook.com/brakwakumusic" target="_blank">
                        <i class="fa fa-facebook fa-inverse"></i>
                    </a>
                    <a href="https://www.facebook.com/brakwakumusic" target="_blank">
                        <i class="fa fa-instagram fa-inverse"></i>
                    </a>
                </FooterLinksWrapper>
                <hr />
                <p>© 2020 - Kwaku Appau-Nkansah</p>
            </FooterWrapper>
        </FooterContentWrapper>
    )
}

export default Footer;
