import logo from '../assets/logo.svg';
import React from 'react';
import '../App.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import styled from "styled-components";
import { Animated } from "react-animated-css";
import MyTooltip from './features/ToolTip';


const NavbarWrapper = styled(Container)`
    padding-top: 1.5rem;
`;

const NavBar = () => {
    const text = "Ananse Ntontan (a-NAN-Se N-ton-TAN) literally means Spider's Web. It is a symbol of wisdom, creativity, and the complexities of life. Wisdom relates to experience, knowledge, and good judgment in decision-making and taking action.";
    return (
        <Animated animationIn="fadeIn" animationInDuration="5000" isVisible={true}>
            <NavbarWrapper>
                <Navbar bg="" variant={"dark"} expand="md">
                    <Navbar.Brand href="#home">
                        <MyTooltip text={text}>
                            <img src={logo} width="40" height="40"
                                className="d-inline-block align-top App-logo"
                                alt="Kwaku logo" />
                        </MyTooltip>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about">Know More</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#experiences">Experiences</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            {/* <NavDropdown title="Experiences" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#flexSim">FlexSim</NavDropdown.Item>
                                <NavDropdown.Item href="#ldsChurch">LDS Church</NavDropdown.Item>
                                <NavDropdown.Item href="#buildingFit">BuildingFit</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#ds">Data Science</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </NavbarWrapper>
        </Animated>
    )
}

export default NavBar;
