import React from "react";
import './Styling/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from "react-bootstrap";

export default class MyNav extends React.Component {
    render() {
        return (
            <Navbar expand="lg" variant="dark" className="navBar">
                <Container>
                    <Navbar.Brand href="#"><h3><b>Portarita</b></h3></Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}