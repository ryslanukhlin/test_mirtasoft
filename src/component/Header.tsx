import React from 'react';
import {
    Navbar,
    Container,
    Offcanvas,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">Test task</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Burger</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link className="link" to="/">
                                Gallery
                            </Link>
                            <Link className="link" to="/aboutMe">
                                About me
                            </Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;
