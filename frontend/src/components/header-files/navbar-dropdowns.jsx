import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const NavbarDropdowns = () => {
    return (
        <Nav className="me-auto mb-2 mb-lg-0">
          <NavDropdown title="Adopt" id="adopt-dropdown" className="h1 fs-3 btn-cream m-0 pe-5">
            <NavDropdown.Item href="search.html" className="font-plain">Adopt Now</NavDropdown.Item>
            <NavDropdown.Item href="MrNewdles.html" className="font-plain">Feeling Lucky?</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Shelter" id="shelter-dropdown" className="h1 fs-3 btn-cream m-0">
            <NavDropdown.Item href="search.html" className="font-plain">Find Shelters</NavDropdown.Item>
            <NavDropdown.Item href="shelterdetails.html" className="font-plain">Feeling Lucky?</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    );
}

export default NavbarDropdowns;