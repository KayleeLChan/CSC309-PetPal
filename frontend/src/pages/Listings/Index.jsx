import React, { useState, useEffect } from 'react';
import { Nav, Tab, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import DetailsTab from '../../components/listings/details-tab/details-tab';
import ApplicationsTab from '../../components/listings/applications-tab';
import CompatabilityTab from '../../components/listings/compatability-tab';
import ApplicationStatus from '../../components/listings/application-status';

const ListingPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState("#nav-details");
    const [listing, setListing] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        animal: '',
        breed: '',
        colour: '',
        deadline: '',
        status: '',
        personality: '',
        age: '',
        size: '',
        good_with: '',
        sex: '',
        description: '',
    });


    useEffect(() => {
        // Fetch the list of notifications when the component mounts
        if (id) {
            fetchListing();
        }
    }, [id]);

    useEffect(() => {
        // Fetch the list of notifications when the component mounts
        if (listing) {
            setFormData({
                name: listing.name,
                location: listing.location,
                animal: listing.animal,
                breed: listing.breed,
                colour: listing.colour,
                deadline: listing.deadline,
                status: listing.status,
                personality: listing.personality,
                age: listing.age,
                size: listing.size,
                good_with: listing.good_with,
                sex: listing.sex,
                description: listing.description,
            });
            // setLoading(false);
        }
    }, [listing]);

    const fetchListing = async () => {
        try {
            // setLoading(true);

            // Make request to backend
            const response = await fetch(`http://localhost:8000/listings/${id}/`,
                {
                    headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNzk0OTgxLCJpYXQiOjE3MDE1ODUzODEsImp0aSI6Ijg2NTgzN2I0NjNkMzQ5MWM5M2FmMTBlZmI2ODAzN2NjIiwidXNlcl9pZCI6MX0.PPHuhQqkpaGuF7wv2FEqbY9B8dVd5izi6n0KBfFs3wQ", }
                }); //TODO: Make authorization better later
            const data = await response.json();
            setListing(data);
        } catch (error) {
            // setLoading(false);
            console.error('Error fetching listing:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formData:", formData);
        // Here you can submit the form data to your Django backend
        updateListing();
    };

    const updateListing = async () => {
        try {
            const url = id ? `http://localhost:8000/listings/${id}/` : 'http://localhost:8000/listings/';
            const method = id ? 'PUT' : 'POST';

            // Make request to backend
            const response = await fetch(url,
                {
                    method: method,
                    body: JSON.stringify(formData),
                    // contenttype: 'application/json',
                    headers: {
                        'Content-Type': 'application/json',  // Set content type to JSON
                        'Accept': 'application/json',  // Specify that your client can handle JSON responses
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNzk1MDQ4LCJpYXQiOjE3MDE1ODU0NDgsImp0aSI6IjM4ODg4MWU5OTk0MjQ2MWQ4YzUxNjQ1NzZjNDE5ZGQ2IiwidXNlcl9pZCI6Mn0.PvJxLtuV3J4_3XMRSCi40pPqDdKlnQ9PFzZzGi_tjTI",
                    }
                }); //TODO: Make authorization better later
            // const data = await response.json();
            // setListing(data);
            if (response.ok) {
                // Update successful, navigate to the new URL
                const newData = await response.json();
                if (!id) {
                    // If it was a POST request, update the id with the new id
                    setListing({ ...newData, id: newData.id });
                }
                navigate(`/listings/view/${id || newData.id}`)
            } else {
                // Handle the case where the update was not successful
                console.error('Listing update failed.');
            }
        } catch (error) {
            console.error('Error updating listing:', error);
        }
    };

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
                                                <DetailsTab listing={listing} formData={formData} setFormData={setFormData}></DetailsTab>
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
                            <ApplicationStatus listing={listing} formData={formData} setFormData={setFormData}></ApplicationStatus>
                            <Button
                                className="btn btn-xl cta-btn-xl bg-primary-orange text-primary-cream mb-5 shadow-sm"
                                type="button"
                                onClick={(e) => { handleSubmit(e) }}
                            >
                                Upload Details
                            </Button>
                        </>
                    )}

                </div>
            </div>
        </>
    );
}

export default ListingPage;