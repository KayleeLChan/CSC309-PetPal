import React, { useState, useEffect } from 'react';
import { Nav, Tab, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DetailsTab from '../../components/listings/details-tab/details-tab';
import ApplicationsTab from '../../components/listings/applications-tab';
import CompatabilityTab from '../../components/listings/compatability-tab';
import ApplicationStatus from '../../components/listings/application-status';

const ListingPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [key, setKey] = useState("#nav-details");
    const [listing, setListing] = useState(null);

    console.log("id: ", id);

    useEffect(() => {
        // Fetch the list of notifications when the component mounts
        if (id) {
            fetchListing();
        }
    }, [id]);

    const fetchListing = async () => {
        try {
            setLoading(true);

            // Make request to backend
            const response = await fetch(`http://localhost:8000/listings/${id}/`,
                {
                    headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNzk0OTgxLCJpYXQiOjE3MDE1ODUzODEsImp0aSI6Ijg2NTgzN2I0NjNkMzQ5MWM5M2FmMTBlZmI2ODAzN2NjIiwidXNlcl9pZCI6MX0.PPHuhQqkpaGuF7wv2FEqbY9B8dVd5izi6n0KBfFs3wQ", }
                }); //TODO: Make authorization better later
            const data = await response.json();
            console.log(data);
            setListing(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching listing:', error);
        }
    };
    console.log("listing: ", listing);

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex flex-column justify-content-start align-items-center">
                    {loading ? (<p className="text-center">Loading...</p>) : (
                        <>
                            <Tab.Container id="listing-tabs" defaultActiveKey={key}>
                                <Nav variant="tabs" className="mt-5 fs-5">
                                    <Nav.Item>
                                        <Nav.Link eventKey={"#nav-details"}>Details</Nav.Link>
                                    </Nav.Item>

                                    {/* <Nav.Item>
                                <Nav.Link eventKey={"#nav-compatability"}>Compatability</Nav.Link>
                            </Nav.Item> */}

                                    <Nav.Item>
                                        <Nav.Link eventKey={"#nav-applicants"}>Applicants</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <div className="d-flex one-col-child w-50 m-5 mt-0 p-3 px-5 bg-cream flex-column align-items-center justify-content-center rounded">
                                    <Tab.Content className="w-100">
                                        <Tab.Pane eventKey={"#nav-details"}>
                                            <div className="tab-content w-100" id="nav-tabContent">
                                                <DetailsTab listing={listing}></DetailsTab>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>

                                    {/* <Tab.Content className="w-100">
                                <Tab.Pane eventKey={"#nav-compatability"}>
                                    <div className="tab-content w-100" id="nav-tabContent">
                                        <CompatabilityTab listing={listing}></CompatabilityTab>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content> */}

                                    <Tab.Content className="w-100">
                                        <Tab.Pane eventKey={"#nav-applicants"}>
                                            <div className="tab-content w-100" id="nav-tabContent">
                                                <ApplicationsTab listing={listing}></ApplicationsTab>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Tab.Container>
                            <ApplicationStatus listing={listing}></ApplicationStatus>
                        </>
                    )}

                </div>
            </div>
        </>
    );
}

export default ListingPage;