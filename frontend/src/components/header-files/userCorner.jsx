import React from 'react';
import { useState } from 'react';

function UserCorner(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <>
                <div className="pe-3 dropdown dropstart hide-lg" style={{left: 0}}>
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
                        <li className="dropdown-item text-primary-brown"onClick={props.handleProfile}>
                            View Profile
                        </li>

                        <li>
                        <a className="dropdown-item text-primary-brown" href="notification.html">
                            Notifications
                        </a>
                        </li>
                        <li onClick={props.handleLogout}>
                            <a className="dropdown-item text-primary-brown" href="#">
                            Log Out
                            </a>
                        </li>
                    </ul>
                    </div>


                    <div class="pe-3 dropdown show-md">
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
                        <li className="dropdown-item text-primary-brown"onClick={props.handleProfile}>
                            View Profile
                        </li>

                        <li>
                        <a className="dropdown-item text-primary-brown" href="notification.html">
                            Notifications
                        </a>
                        </li>
                        <li onClick={props.handleLogout}>
                            <a className="dropdown-item text-primary-brown" href="#">
                            Log Out
                            </a>
                        </li>
                    </ul>
              </div>
        </>
    );
}

export default UserCorner;


