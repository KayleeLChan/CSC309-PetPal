import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavbarBrand = () => {
    return (
        <Navbar.Brand href="/" className="h1 fs-1 btn-cream mb-0 px-3 mx-0">
        <img
          src="./imgs/Logo.svg"
          alt="Logo"
          width="50"
          height="50"
          className="d-inline-block align-text-top me-3"
        />
        PetPal
      </Navbar.Brand>
    );
}

export default NavbarBrand;