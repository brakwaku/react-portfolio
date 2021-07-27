import logo from '../assets/logo.svg';
import React from 'react';
import '../App.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import styled from "styled-components";
import { Animated } from "react-animated-css";


const NavbarWrapper = styled(Container)`
    padding-top: 1.5rem;
`;

const NavBar = () => {
    return (
        <Animated animationIn="fadeIn" animationInDuration="5000" isVisible={true}>
            <NavbarWrapper>
                <Navbar bg="" variant={"dark"} expand="md">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top App-logo"
                            alt="Kwaku logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <NavDropdown title="Experiences" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#experiences">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">My Music</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </NavbarWrapper>
        </Animated>
    )
}

export default NavBar;
