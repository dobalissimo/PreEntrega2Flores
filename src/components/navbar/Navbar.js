import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/iconos/android-chrome transparent-512x512.png';
import CartWidget from '../cartwidget/cartwidget';
import { NavLink, Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <div className="container-fluid">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />{' '}
          Bourdeaux
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <NavDropdown title="Burgers" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/simple">
                Simples
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/doble">
                Dobles
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/triple">
                Triples
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/locales">Locales</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
