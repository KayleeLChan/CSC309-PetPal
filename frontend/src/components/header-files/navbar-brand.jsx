import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';

const NavbarBrand = () => {
  
  //TODO: CHANGE NOTIFICATION ALERT TO BE RED DOT AND NOT TITLE CHANGE
  const [title, setTitle] = useState('PetPal');

  useEffect(() => {
    // Logic to check for new notifications and update the title
    const checkForNotifications = async () => {
      try {
        const response = await fetch("http://localhost:8000/notifications/?filter=unread",
          {
            headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMDk3NjE0LCJpYXQiOjE3MDE4ODgwMTQsImp0aSI6ImQ3ZWMxNjViNjEyYjQ5ZDc4NTkwMGQyM2EzMzI0M2Y2IiwidXNlcl9pZCI6MX0.Fv6GKpDQbb5GohtlAb1ukdA_RkOF4EMlvUX6FWCRqgY", }
          });
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setTitle('Notify');
        }
        else {
          setTitle('Petpal');
        }
      } catch (error) {
        console.error('Error checking notifications:', error);
      }
    };

    checkForNotifications();
    const notificationInterval = setInterval(checkForNotifications, 3000); // Check every 3s
    return () => clearInterval(notificationInterval); // Cleanup function to clear the interval when the component unmounts
  }, []);


  return (
    <Navbar.Brand href="/" className="h1 fs-1 btn-cream mb-0 px-3 mx-0">
      <img
        src="/imgs/Logo.svg"
        alt="Logo"
        width="50"
        height="50"
        className="d-inline-block align-text-top me-3"
      />
      {title}
    </Navbar.Brand>
  );
}

export default NavbarBrand;