import React from 'react';
import '../corporate.css';
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

const FooterTextWrapper = styled.div`
    background: #141d25;
`;

const FooterLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: darken(white, 50%);

    > a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.5rem;
        width: 5rem;
        height: 5rem;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-3px);
            color: red;
        }
    }
`;

const Footer = () => {
    return (
        <FooterContentWrapper id="footer">
            <FooterWrapper>
                <FooterTextWrapper>Feel free to connect with me via any of these and I will get right back to you</FooterTextWrapper>
                <FooterLinksWrapper>
                    <a href="https://www.linkedin.com/in/theophilus-kwaku-appau-nkansah-b57393a2" target="_blank" rel="noreferrer">
                        <i className="fa fa-linkedin fa-inverse"></i>
                    </a>
                    <a href="https://github.com/brakwaku" target="_blank" rel="noreferrer">
                        <i className="fa fa-github fa-inverse"></i>
                    </a>
                    <a href="https://www.facebook.com/brakwakumusic" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook fa-inverse"></i>
                    </a>
                    <a href="https://www.facebook.com/brakwakumusic" target="_blank" rel="noreferrer">
                        <i className="fa fa-instagram fa-inverse"></i>
                    </a>
                    <a href="mailto:brakwakujr@gmail.com">
                        <i className="fa fa-paper-plane fa-inverse"></i>
                    </a>
                    <a href="https://open.spotify.com/artist/6Bu0ogVJIM6VB20GXQkmh9" target="_blank" rel="noreferrer">
                        <i className="fa fa-spotify fa-inverse"></i>
                    </a>
                    {/* <a href="https://codesandbox.io/dashboard/home?file=/index.js">
                        <i className="fa fa-codesandbox fa-inverse"></i>
                    </a> */}
                    {/* <a href="https://codepen.io/your-work" target="_blank" rel="noreferrer">
                        <i className="fa fa-codepen fa-inverse"></i>
                    </a> */}
                </FooterLinksWrapper>
                <hr />
                <p>© 2020 - Kwaku Appau-Nkansah</p>
            </FooterWrapper>
        </FooterContentWrapper>
    )
}

export default Footer;
