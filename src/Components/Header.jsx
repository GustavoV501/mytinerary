import React from "react";
import '../App.css';
import { Navbar, Container, Offcanvas, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";


const Header =()=> {

        return(
            <Navbar bg="transparent" expand={false} >
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">My Tinerary</Offcanvas.Title>
                    </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/search">Cities</Nav.Link>
                            <NavDropdown title="Login" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signin">Sign In</NavDropdown.Item> 
                            </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>        
        );
        
    }

export default Header;