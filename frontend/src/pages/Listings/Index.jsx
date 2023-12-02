import React, { useState, useEffect } from 'react';
import { Nav, Tab, Row, Col } from 'react-bootstrap';
import DetailsTab from '../../components/listings/details-tab/details-tab';
import ApplicationsTab from '../../components/listings/applications-tab';
import CompatabilityTab from '../../components/listings/compatability-tab';
import ApplicationStatus from '../../components/listings/application-status';

const ListingPage = () => {
    const [loading, setLoading] = useState(true);
    const [key, setKey] = useState("#nav-details");

    // useEffect(() => {
    //     // Fetch the list of notifications when the component mounts
    //     createListing();
    // }, []);

    // const createListing = async () => {
    //     try {
    //         setLoading(true);
    //         // Set queryParams to pass into request
    //         const queryParams = new URLSearchParams({
    //             page: query.page,
    //             filter: query.filter,
    //         });

    //         // Make request to backend
    //         const response = await fetch(`http://localhost:8000/notifications/?${queryParams}`,
    //             {
    //                 headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNjc2NTAzLCJpYXQiOjE3MDE0NjY5MDMsImp0aSI6ImEyMDA4OWY2NzY3ZTRjYmNiYjdhYzRhNTU1NWViMzdiIiwidXNlcl9pZCI6MX0.Em63InqkhayO9AFzGVAy1Y7B-FvPysNxG7--1yWFPJ4", }
    //             }); //TODO: Make authorization better later
    //         const data = await response.json();
    //         setNotifications(data.results); 
    //         setTotalPages(
    //             Math.ceil(Number(data.count) / 10)
    //         );
    //         setLoading(false);
    //     } catch (error) {
    //         setLoading(false);
    //         console.error('Error fetching notifications:', error);
    //     }
    // };

    // const handleDeleteNotification = (deletedNotificationId) => {
    //     // Remove the deleted notification from the list
    //     setNotifications((prevNotifications) =>
    //         prevNotifications.filter((notification) => notification.id !== deletedNotificationId)
    //     );
    // };

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex flex-column justify-content-start align-items-center">
                    <Tab.Container id="listing-tabs" defaultActiveKey={key}>
                        <Nav variant="tabs" className="mt-5 fs-5">
                            <Nav.Item>
                                <Nav.Link eventKey={"#nav-details"}>Details</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey={"#nav-compatability"}>Compatability</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey={"#nav-applicants"}>Applicants</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className="d-flex one-col-child w-50 m-5 mt-0 p-3 px-5 bg-cream flex-column align-items-center justify-content-center rounded">
                            <Tab.Content className="w-100">
                                <Tab.Pane eventKey={"#nav-details"}>
                                    <div className="tab-content w-100" id="nav-tabContent">
                                        <DetailsTab></DetailsTab>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className="w-100">
                                <Tab.Pane eventKey={"#nav-compatability"}>
                                    <div className="tab-content w-100" id="nav-tabContent">
                                        <CompatabilityTab></CompatabilityTab>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className="w-100">
                                <Tab.Pane eventKey={"#nav-applicants"}>
                                    <div className="tab-content w-100" id="nav-tabContent">
                                        <ApplicationsTab></ApplicationsTab>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
<ApplicationStatus></ApplicationStatus>
                </div>
            </div>
        </>
    );
}

export default ListingPage;