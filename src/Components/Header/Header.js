import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
    <Container className="d-md-flex  py-1">
    <Navbar.Brand href="#" className="text-white align-items-center" >PS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className=" d-md-flex align-items-center justify-content-end">
    <Nav.Item >
        <a href="#" className="text-white nav-link">Home</a>
      </Nav.Item>
      <Nav.Item>
        <a href="#skills" className="text-white nav-link">Skills</a>
      </Nav.Item>
      <Nav.Item>
        <a href="#projects" className="text-white nav-link">Projects</a>
      </Nav.Item>
   
<Nav.Item className="text-white nav-link">
    <a href="https://www.linkedin.com/in/parvezshaikh456" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{color: "#FFF",}} /></a>
    </Nav.Item>
    <Nav.Item className="text-white nav-link">
  <a href='https://github.com/Parvez785' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: "#FFF",}} /></a>
    </Nav.Item>
    <button className="button-main"><a href="#contact">Let's Connect</a></button>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}
