import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ShelterDropDowns = (props) => {
    const navigate = useNavigate()

    //my branch doesnt have this url rn it will when we merge
    function listings(){
        navigate(`/listings`)
    }

    //change if we need to
    function manage(){
        navigate(`/listings`)
    }

    function create(){
        navigate(`/listings/create`)
    }

    function shelter(){
        navigate(`/accounts/shelter/${props.user_id}/profile`)
    }

    return (
        <Nav className="me-auto mb-2 mb-lg-0">
          <NavDropdown title="Pet Listings" id="adopt-dropdown" className="h1 fs-3 btn-cream m-0 pe-5">
            <NavDropdown.Item  onClick={listings} className="font-plain">Find Listings</NavDropdown.Item>
            <NavDropdown.Item  onClick={manage} className="font-plain">Manage Listings</NavDropdown.Item>
            <NavDropdown.Item  onClick={create} className="font-plain">Create Listing</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Shelter Management" id="shelter-dropdown" className="h1 fs-3 btn-cream m-0">
            {/* add link for this one */}
            <NavDropdown.Item className="font-plain">Your Reviews</NavDropdown.Item>
            <NavDropdown.Item onClick={create}className="font-plain">Your Shelter</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    );
}

export default ShelterDropDowns;