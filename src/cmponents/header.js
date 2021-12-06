import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import "./header.css"

function Header(){
    return (
    <Navbar expand="lg" className = "navbar-groc">
    <Container>
    <Navbar.Brand href="#home" className="logo">
        <div className="logo-first">Deli </div>
        <div className="logo-sec">Ranch</div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className="nav-link-gr">Nosotros</Nav.Link>
          <Nav.Link href="#link" className="nav-link-gr">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Header;