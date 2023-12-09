import React, { useState, useEffect } from 'react';
import { Nav, Tab, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import DetailsTab from '../../components/listings/details-tab/details-tab';
import ApplicationsTab from '../../components/listings/applications-tab';
import CompatabilityTab from '../../components/listings/compatability-tab';
import ApplicationStatus from '../../components/listings/application-status';
import Error403 from '../../components/403';

const ListingPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [key, setKey] = useState("#nav-details");
    const [listing, setListing] = useState(null);
    const [images, setImages] = useState([]);
    const [error, setError] = useState('');
    const accessToken = localStorage.getItem('access_token');
    const accountType = localStorage.getItem('accounttype');
    const username = localStorage.getItem('username');

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
        // Set the formdata with the listing after it's fetched
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
        }
    }, [listing]);

    const fetchListing = async () => {
        try {
            // Make request to backend
            const response = await fetch(`http://localhost:8000/listings/${id}/`,
                {
                    headers: { Authorization: `Bearer ${accessToken}`, }
                });
            const data = await response.json();
            setListing(data);
        } catch (error) {
            // setLoading(false);
            console.error('Error fetching listing:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can submit the form data to your Django backend
        updateListing();
    };

    const updateListing = async () => {
        try {
            const url = id ? `http://localhost:8000/listings/${id}/` : 'http://localhost:8000/listings/';
            const method = id ? 'PUT' : 'POST';
            const dataBody = JSON.stringify(formData)

            // Make request to backend
            const response = await fetch(url,
                {
                    method: method,
                    body: dataBody,
                    // contenttype: 'application/json',
                    headers: {
                        'Content-Type': 'application/json',  // Set content type to JSON
                        'Accept': 'application/json',  // Specify that your client can handle JSON responses
                        'Authorization': `Bearer ${accessToken}`,
                    }
                });

            if (response.ok) {
                // Update successful, navigate to the new URL
                const newData = await response.json();
                if (!id) {
                    // If it was a POST request, update the id with the new id
                    setListing({ ...newData, id: newData.id });
                    await uploadImages(newData.id);
                }
                else {
                    await uploadImages(id);
                }

                navigate(`/listings/${id || newData.id}`)
            } else {
                // Handle the case where the update was not successful
                console.error('Listing update failed.');
                setError("You are one or more fields");
            }
        } catch (error) {
            console.error('Error updating listing:', error);
        }
    };

    const uploadImages = async (newID) => {
        if (images.length === 0 && (!id || listing.images.length === 0)) {
            const formData = new FormData();
            formData.append('image', await fetch("/imgs/Logo.png").then((res) => res.blob()), 'default-image.jpg');

            try {
                const response = await fetch(`http://localhost:8000/listings/${newID}/image/`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    }
                });

                if (response.ok) {
                    console.log('Default file uploaded successfully');
                } else {
                    console.error('Failed to upload default file');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
        else {
            for (const file of images) {
                const formData = new FormData();
                formData.append('image', file);
                const listingID = id ? id : newID
    
                try {
                    console.log(accessToken);
                    const response = await fetch(`http://localhost:8000/listings/${listingID}/image/`, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                        }
                    });
    
                    if (response.ok) {
                        console.log(`File ${file.name} uploaded successfully`);
                    } else {
                        console.error(`Failed to upload file ${file.name}`);
                    }
                } catch (error) {
                    console.error('Error uploading file:', error);
                }
            }
        }
    };

    if (!accessToken || (accountType != "petshelter") || (listing && listing.shelter.username != username)) {
        return <Error403></Error403>
    }

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex flex-column justify-content-start align-items-center">
                    {loading ? (<p className="text-center">Loading...</p>) : (
                        <>
                        <DetailsTab listing={listing} formData={formData} setFormData={setFormData} setImages={setImages}></DetailsTab>
                            {/* <Tab.Container id="listing-tabs" defaultActiveKey={key}>
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
                                                <DetailsTab listing={listing} formData={formData} setFormData={setFormData} setImages={setImages}></DetailsTab>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>

                                    <Tab.Content className="w-100">
                                <Tab.Pane eventKey={"#nav-compatability"}>
                                    <div className="tab-content w-100" id="nav-tabContent">
                                        <CompatabilityTab listing={listing}></CompatabilityTab>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>

                                    <Tab.Content className="w-100">
                                        <Tab.Pane eventKey={"#nav-applicants"}>
                                            <div className="tab-content w-100" id="nav-tabContent">
                                                <ApplicationsTab listing={listing}></ApplicationsTab>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Tab.Container> */}
                            <ApplicationStatus listing={listing} formData={formData} setFormData={setFormData}></ApplicationStatus>
                            {error ? <p className="pb-0">{error}</p> : <></>}
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