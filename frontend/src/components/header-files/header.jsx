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
import ShelterDropDowns from './shelterdropdown';
import SeekerDropDowns from './seekerdropdowns';





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

  // function handleProfile(){
  //   if(isSeeker){
  //   navigate(`/accounts/seeker/${user_id}/profile`)
  //   }
  //   else{
  //     navigate(`/accounts/shelter/${user_id}/profile`)
  //   }
  // }

  // function handleNotifications(){
  //   navigate(`/notifications`)
  // }

  const fetchProfilePic = async () => {
    try {
    const fetchData = await fetch(`http://127.0.0.1:8000/accounts/${user_id}/profile/`, {
        method:"GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }});
        const data = await fetchData.json();
        if(data.profilepic){
          setProfilePic(data.profilepic);
          localStorage.setItem("profilepic", profilePic)
        }
        else if(isSeeker){
          setProfilePic(`/imgs/pfp.jpg`)
        }
        else{
          setProfilePic(`/imgs/shelterpfp.png`)
        }
    } catch (error) {
        console.error('Error fetching', error);
    }
}


      useEffect(() => {
        console.log("useffect")
        console.log(accounttype)
        console.log(profilePic)
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

      },[isLoggedIn, isSeeker, isShelter, profilePic, navigate])

  
    return (
        <Navbar expand="lg" sticky="top" bg="cream" className="shadow">
          <NavbarBrand></NavbarBrand>

          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent" className="ps-5">
            {isLoggedIn && isSeeker && <SeekerDropDowns user_id={user_id}></SeekerDropDowns>}
            {isLoggedIn && isShelter && <ShelterDropDowns user_id={user_id}></ShelterDropDowns>}
            {!isLoggedIn && <NavbarDropdowns />}

            <NavbarMainSearch></NavbarMainSearch>
            <NavbarToggleSearch></NavbarToggleSearch>
              {isLoggedIn && <UserCorner user_id={user_id} profilepic={profilePic} handleLogout={handleLogout} />}
              {!isLoggedIn && <AnonCorner />}
          </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;