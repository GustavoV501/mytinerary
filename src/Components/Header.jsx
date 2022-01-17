import React from "react";
import '../App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Offcanvas, Nav, NavDropdown } from 'react-bootstrap'


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
                            <Nav.Link href="#/">Home</Nav.Link>
                            <Nav.Link href="./Pages/Cities.js">Cities</Nav.Link>
                            <NavDropdown title="Login" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">Sign Up</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Sign In</NavDropdown.Item> 
                            </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>        
        );
    }

export default Header;