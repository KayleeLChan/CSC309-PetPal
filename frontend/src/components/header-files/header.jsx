import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import NavbarBrand from './navbar-brand';
import NavbarDropdowns from './navbar-dropdowns';
import NavbarMainSearch from './navbar-main-search';
import NavbarToggleSearch from './navbar-toggle-search';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate() 

  function handleLoginCLick(){
    navigate(`/accounts`)
  }
  

    return (
        <Navbar expand="lg" sticky="top" bg="cream" className="shadow">
          <NavbarBrand></NavbarBrand>

          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent" className="ps-5">
            <NavbarDropdowns></NavbarDropdowns>

            <NavbarMainSearch></NavbarMainSearch>
            <NavbarToggleSearch></NavbarToggleSearch>

            <div className="text-primary-orange">
              <a href="login.html">
                <Button variant="primary-cream" className="m-3 ms-0 shadow-sm" type="button">
                  Log In
                </Button>
              </a>
            </div>
            <div className="text-primary-brown pe-3">
              <a href="seekersignup.html">
                <Button variant="primary-orange" className="m-3 ms-0 shadow-sm" type="button" onClick={handleLoginCLick}>
                  Sign Up
                </Button>
              </a>
            </div>
          </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;