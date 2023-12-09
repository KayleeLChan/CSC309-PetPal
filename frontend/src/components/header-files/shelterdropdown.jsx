import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ShelterDropDowns = (props) => {
    const navigate = useNavigate()
    const username = localStorage.getItem('username');

    //my branch doesnt have this url rn it will when we merge
    function listings(){
        navigate(`/listings`)
    }

    //change if we need to
    function blogs(){
      navigate(`/accounts/blogs/`)
    }

    function createBlog(){
      navigate(`/accounts/blogs/create`)
    }

    function manage(){
        navigate(`/listings/?shelter=${username}`)
    }

    function create(){
        navigate(`/listings/create`)
    }

    function shelter(){
        navigate(`/accounts/shelters/${props.user_id}`)
    }

    function review(){
      navigate(`/accounts/shelters/${props.user_id}/reviews`)
  }

    function handleViewAll(){
      navigate(`/accounts/shelters`)
      }

    return (
        <Nav className="me-auto mb-2 mb-lg-0">
          <NavDropdown title="Pet Listings" id="adopt-dropdown" className="h1 fs-3 btn-cream m-0 pe-3">
            <NavDropdown.Item  onClick={listings} className="font-plain">Find Listings</NavDropdown.Item>
            <NavDropdown.Item  onClick={manage} className="font-plain">Manage Listings</NavDropdown.Item>
            <NavDropdown.Item  onClick={create} className="font-plain">Create Listing</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Shelter Management" id="shelter-dropdown" className="h1 fs-3 btn-cream m-0 pe-3">
            <NavDropdown.Item onClick={handleViewAll} className="font-plain">View All Shelters</NavDropdown.Item>
            <NavDropdown.Item onClick={review} className="font-plain">Your Reviews</NavDropdown.Item>
            <NavDropdown.Item onClick={shelter}className="font-plain">Your Shelter</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Blogs" id="shelter-dropdown" className="h1 fs-3 btn-cream m-0">
            <NavDropdown.Item onClick={blogs} className="font-plain">View All Blogs</NavDropdown.Item>
            <NavDropdown.Item onClick={createBlog} className="font-plain">Create Blog</NavDropdown.Item>
          </NavDropdown>
        </Nav>
    );
}

export default ShelterDropDowns;