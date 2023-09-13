import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/iconos/android-chrome transparent-512x512.png';
import CartWidget from '../cartwidget/cartwidget';
import {NavLink, Link } from 'react-router-dom'

function NavbarComponent() {
  return (
    <Navbar expand="lg">
      <div className="container-fluid">
        <Navbar.Brand href='/'>
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
            <Nav.Link href="pages/cervezas.html">Cervezas</Nav.Link>
            <NavDropdown title="Gastronomia" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/simple">Simples</NavDropdown.Item>
              <NavDropdown.Item href="/category/doble">Dobles</NavDropdown.Item>
              <NavDropdown.Item href="/category/triple">Triples</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="pages/locales.html">Locales</Nav.Link>
            <Nav.Link href="pages/contacto.html">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
