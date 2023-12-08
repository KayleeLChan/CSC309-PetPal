import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

function UserCorner(props) {
    const navigate = useNavigate();
    const user_id = localStorage.getItem('user_id');

    const handleViewProfile = () => {
        navigate(`/accounts/${user_id}`)
      };
    
      const handleNotifications = () => {
        navigate("/notifications")
      };

    return (
        <>
        <DropdownButton
              as={ButtonGroup}
              key='start'
              id='dropdown-button-drop-start'
              drop='start'
              variant="primary"
              className="hide-lg"
              title={<img
                src={props.profilepic}
                alt="pfp"
                className="p-0 profile-pic rounded-circle border btn btn-secondary dropdown-toggle"
            />}
            >
              <Dropdown.Item eventKey="1" onClick={handleViewProfile}>View Profile</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={handleNotifications}>Notifications</Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={props.handleLogout}>Log Out</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              as={ButtonGroup}
              key='end'
              id='dropdown-button-drop-end'
              drop='end'
              variant="primary"
              className="show-md mx-0"
              title={<img
                src={props.profilepic}
                alt="pfp"
                className="p-0 profile-pic rounded-circle border btn btn-secondary dropdown-toggle"
            />}
            >
              <Dropdown.Item eventKey="1" onClick={handleViewProfile}>View Profile</Dropdown.Item>
              <Dropdown.Item eventKey="2" onClick={handleNotifications}>Notifications</Dropdown.Item>
              <Dropdown.Item eventKey="3" onClick={props.handleLogout}>Log Out</Dropdown.Item>
            </DropdownButton>
        </>
        
    );
}

export default UserCorner;


