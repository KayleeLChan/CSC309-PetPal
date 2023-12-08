import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

function UserCorner(props) {
  const navigate = useNavigate();
  const user_id = localStorage.getItem('user_id');
  const accessToken = localStorage.getItem('access_token');
  const [notifAlert, setNotifAlert] = useState(false);

  const handleViewProfile = () => {
    navigate(`/accounts/${user_id}`)
  };

  const handleNotifications = () => {
    navigate("/notifications")
  };

  useEffect(() => {
    // Logic to check for new notifications and update the title
    const checkForNotifications = async () => {
      try {
        const response = await fetch("http://localhost:8000/notifications/?filter=unread",
          {
            headers: { Authorization: `Bearer ${accessToken}`, }
          });
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setNotifAlert(true);
        }
        else {
          setNotifAlert(false);
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
    <>
      <DropdownButton
        as={ButtonGroup}
        key='start'
        id='dropdown-button-drop-start'
        drop='start'
        variant="primary"
        className="hide-lg"
        title={
          <>
            {notifAlert ? <div class="ratio ratio-1x1 notif-dot w-20 rounded-circle position-absolute top-0 start-60"></div> : <></>}
            <img
              src={props.profilepic}
              alt="pfp"
              className="p-0 profile-pic rounded-circle border btn btn-secondary dropdown-toggle"
            />
          </>
        }
      >
        <Dropdown.Item eventKey="1" onClick={handleViewProfile}>View Profile</Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={handleNotifications}>Notifications {notifAlert ? <div class="ratio ratio-1x1 w-7 notif-dot rounded-circle position-absolute bottom-50 start-65"></div> : <></>}</Dropdown.Item>
        <Dropdown.Item eventKey="3" onClick={props.handleLogout}>Log Out</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        key='end'
        id='dropdown-button-drop-end'
        drop='end'
        variant="primary"
        className="show-md mx-0"
        title={<>
          {notifAlert ? <div class="ratio ratio-1x1 notif-dot w-20 rounded-circle position-absolute top-0 start-60"></div> : <></>}
          <img
            src={props.profilepic}
            alt="pfp"
            className="p-0 profile-pic rounded-circle border btn btn-secondary dropdown-toggle"
          />
        </>}
      >
        <Dropdown.Item eventKey="1" onClick={handleViewProfile}>View Profile</Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={handleNotifications}>Notifications {notifAlert ? <div class="ratio ratio-1x1 w-7 notif-dot rounded-circle position-absolute bottom-50 start-65"></div> : <></>}</Dropdown.Item>
        <Dropdown.Item eventKey="3" onClick={props.handleLogout}>Log Out</Dropdown.Item>
      </DropdownButton>
    </>

  );
}

export default UserCorner;


