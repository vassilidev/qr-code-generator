import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from '../logo.png';

const Sidebar = () => {
    return (
        <Navbar className="mb-4" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        width="64"
                        height="64"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Accueil</Nav.Link>
                        <Nav.Link as={Link} to="/about">A propos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Sidebar;
