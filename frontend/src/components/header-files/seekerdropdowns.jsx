import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const SeekerDropDowns = (props) => {
      const navigate = useNavigate()
      

        // pet shelters
      function handleFeelingLucky(){
        fetch('http://localhost:8000/accounts/shelter/all/')
        .then(response => response.json())
        .then(data =>{
          const ids = data.map(item => item.id);
          const randomIndex = Math.floor(Math.random() * ids.length);
          const luckyId = ids[randomIndex];
          navigate(`/accounts/shelters/${luckyId}/`)
        }
        )
      }

      function handleFeelingLuckyListing(){
        fetch('http://localhost:8000/listings/')
        .then(response => response.json())
        .then(data =>{
          console.log(data)
          console.log(data.results)
          const ids = data.results.map(item => item.id);
          console.log(ids)
          const randomIndex = Math.floor(Math.random() * ids.length);
          const luckyId = ids[randomIndex];
          navigate(`/listings/${luckyId}/`)
        }
        )
      }

      function handleViewAll(){
      navigate(`/accounts/shelters`)
      }

      function handleAdoptNow(){
      navigate(`/listings`)
      }

      function applications(){
        navigate(`/listings`)
      }
      
      function blogs(){
        navigate(`/accounts/blogs/`)
      }


      return (
      <Nav className="me-auto mb-2 mb-lg-0">
        <NavDropdown title="Adopt" id="adopt-dropdown" className="h1 fs-3 btn-cream m-0 pe-3">
          <NavDropdown.Item onClick={handleAdoptNow} className="font-plain">Adopt Now</NavDropdown.Item>
          <NavDropdown.Item onClick={handleAdoptNow} className="font-plain">My Applications</NavDropdown.Item>
          {/* need listings for this button to work */}
          <NavDropdown.Item  onClick={handleFeelingLuckyListing} className="font-plain">Feeling Lucky?</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Shelter" id="shelter-dropdown" className="h1 fs-3 btn-cream m-0 pe-3">
          <NavDropdown.Item onClick={handleViewAll} className="font-plain">View All Shelters</NavDropdown.Item>
          <NavDropdown.Item  onClick={handleFeelingLucky} className="font-plain">Feeling Lucky?</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Blogs" id="shelter-dropdown" className="h1 fs-3 btn-cream m-0">
            <NavDropdown.Item onClick={blogs} className="font-plain">View All Blogs</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      );
}

export default SeekerDropDowns;