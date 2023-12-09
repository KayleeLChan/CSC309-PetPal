import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavbarDropdowns = () => {
    const navigate = useNavigate()

          // petlisting
      function handleFeelingLucky(){
        
      }

      function handleViewAll(){
        navigate(`/accounts/shelters`)
      }

      function handleAdoptNow(){
        navigate(`/listings`)
      }


    return (
        <Nav className="me-auto mb-2 mb-lg-0">
          <NavDropdown title="Adopt" id="adopt-dropdown" className="h1 fs-3 btn-cream m-0 pe-5">
            <NavDropdown.Item onClick={handleAdoptNow} className="font-plain">Adopt Now</NavDropdown.Item>
            <NavDropdown.Item  className="font-plain">Feeling Lucky?</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Shelter" id="shelter-dropdown" className="h1 fs-3 btn-cream m-0">
            <NavDropdown.Item onClick={handleViewAll} className="font-plain">View All Shelters</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    );
}

export default NavbarDropdowns;