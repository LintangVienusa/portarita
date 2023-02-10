import React from "react";
import './Styling/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';

const MyNav = () => {
    return (
        <Navbar expand="lg" variant="dark" className="navBar">
            <Container>
                <Navbar.Brand><h3><b>Portarita</b></h3></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link className="customLink" to="/Home">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="customLink" to="/Features"> Features </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link className="customLink" to="/About">About</Link>
                    </Nav.Link>

                    <Outlet />
                </Nav>
                
            </Container>
        </Navbar>
    )
}

export default MyNav;