import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import NavbarBrand from './navbar-brand';
import NavbarDropdowns from './navbar-dropdowns';
import NavbarMainSearch from './navbar-main-search';
import NavbarToggleSearch from './navbar-toggle-search';
import { useNavigate } from 'react-router-dom';
import AnonCorner from './anon_corner';
import UserCorner from './userCorner';
import { useEffect, useState } from 'react';





const Header = () => {
  const navigate = useNavigate() 
  const accessToken = localStorage.getItem('access_token');
  const user_id = localStorage.getItem('user_id');
  const profilepic = localStorage.getItem('profilepic');
  const accounttype = localStorage.getItem('accounttype');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSeeker, setIsSeeker] = useState(false);
  const [isShelter, setIsShelter] = useState(false);
  const [profilePic, setProfilePic] = useState();


  function handleLogout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    localStorage.removeItem('accounttype');
    localStorage.removeItem('user_id');
    localStorage.removeItem('profilepic');
    setIsLoggedIn(false)
    navigate(`/accounts`)
    // other logout logic
  }

  function fetchProfilePic(){
    fetch(`http://127.0.0.1:8000/accounts/${user_id}/profile/`, {
      method: 'GET',  
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("data", data)
        if(data.profilepic){
          setProfilePic(data.profilepic);
          localStorage.setItem("profilepic", profilepic)
        }
        else{
          setProfilePic('/imgs/pfp.jpg')
        }
        console.log(data);
      })
  }

      useEffect(() => {
        console.log("useffect")
        console.log(accounttype)
        if(accessToken){
          console.log("isloggedin")
          setIsLoggedIn(true)
          if(accounttype === "petseeker"){
            console.log("isloggedinseeker")
            setIsSeeker(true)
          }
          else{
            setIsShelter(true)
          }
        }

        if(isLoggedIn){
          fetchProfilePic()
        }

      },[isLoggedIn, isSeeker, isShelter, profilePic])

  
    return (
        <Navbar expand="lg" sticky="top" bg="cream" className="shadow">
          <NavbarBrand></NavbarBrand>

          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent" className="ps-5">
            <NavbarDropdowns></NavbarDropdowns>

            <NavbarMainSearch></NavbarMainSearch>
            <NavbarToggleSearch></NavbarToggleSearch>
              {isLoggedIn && isSeeker && <UserCorner user_id={user_id} profilepic={profilePic} handleLogout={handleLogout}/>}
              {!isLoggedIn && <AnonCorner />}
          </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;