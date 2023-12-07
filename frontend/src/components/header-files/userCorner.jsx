import React from 'react';
import { useState } from 'react';

function UserCorner(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <>
                <div className="pe-3 dropdown dropstart hide-lg">
                    <img
                        src={props.profilepic}
                        alt="pfp"
                        className="p-0 profile-pic rounded-circle border btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded={isOpen}
                        onClick={toggleDropdown}
                    />
                    <ul className={`dropdown-menu bg-primary-cream ${isOpen ? 'show' : ''}`}>
                        <li>
                        <a className="dropdown-item text-primary-brown" href="viewaccount-shelter.html">
                            View Profile
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item text-primary-brown" href="notification.html">
                            Notifications
                        </a>
                        </li>
                        <li onClick={props.handleLogout}>
                            Log Out
                        </li>
                    </ul>
                    </div>
        </>
    );
}

export default UserCorner;


