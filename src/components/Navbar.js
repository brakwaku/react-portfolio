import logo from '../assets/logo.svg';
import React from 'react';
import '../App.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import styled from "styled-components";


const NavbarWrapper = styled(Container)`
    position: relative;
    vertical-align:top;
`;

const NavBar = () => {
    return (
        <NavbarWrapper>
            <Navbar bg="" variant={"dark"} expand="md">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top App-logo"
                        alt="Kwaku logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <NavDropdown title="Experiences" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">My Music</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavbarWrapper>
    )
}

export default NavBar;
