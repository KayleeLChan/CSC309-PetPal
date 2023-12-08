import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import RegisterSeeker from '../RegisterSeeker/Index';
import RegisterShelter from '../RegisterShelter/Index';

function Register() {
    const [key, setKey] = useState("#seeker");

    return (
        <div className="main d-flex flex-column justify-content-start align-items-center" data-bs-theme="petpal">
            <Tab.Container id="listing-tabs" defaultActiveKey={key}>
                <Nav variant="tabs" className="mt-5 fs-5">
                    <Nav.Item>
                        <Nav.Link eventKey={"#seeker"}>Seeker</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey={"#shelter"}>Shelter</Nav.Link>
                    </Nav.Item>
                </Nav>

                <div className="d-flex one-col-child w-50 m-5 mt-0 p-3 px-5 bg-cream flex-column align-items-center justify-content-center rounded">
                    <Tab.Content className="w-100">
                        <Tab.Pane eventKey={"#seeker"}>
                            <div className="tab-content w-100" id="nav-tabContent">
                                <RegisterSeeker></RegisterSeeker>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>

                    <Tab.Content className="w-100">
                        <Tab.Pane eventKey={"#shelter"}>
                            <div className="tab-content w-100" id="nav-tabContent">
                                <RegisterShelter></RegisterShelter>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </div>

    );
}


export default Register;