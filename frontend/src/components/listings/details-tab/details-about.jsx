import React, { useState, useEffect, props } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const DetailsAbout = ({listing}) => {
    const [showAboutModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        description: ""
    });

    useEffect(() => {
        // Check if modelInstance prop is provided
        if (listing) {
            // If yes, update the formData state with the values from the modelInstance
            setFormData({ description: listing.description });
        }
    }, [listing]);

    const handleModalShow = async () => {
        setShowModal(true);
    };

    const handleModalHide = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you can submit the form data to your Django backend
        updateListing();
        setShowModal(false);
    };

    const updateListing = async () => {
        try {
            // setLoading(true);
            const id = listing.id;

            // Make request to backend
            const response = await fetch(`http://localhost:8000/listings/${id}/`,
                {
                    method: 'PUT',
                    body: JSON.stringify(formData),
                    // contenttype: 'application/json',
                    headers: {
                        'Content-Type': 'application/json',  // Set content type to JSON
                        'Accept': 'application/json',  // Specify that your client can handle JSON responses
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNzk1MDQ4LCJpYXQiOjE3MDE1ODU0NDgsImp0aSI6IjM4ODg4MWU5OTk0MjQ2MWQ4YzUxNjQ1NzZjNDE5ZGQ2IiwidXNlcl9pZCI6Mn0.PvJxLtuV3J4_3XMRSCi40pPqDdKlnQ9PFzZzGi_tjTI",
                    }
                }); //TODO: Make authorization better later
            // const data = await response.json();
            // console.log(data);
            // setListing(data);
            // setLoading(false);
        } catch (error) {
            // setLoading(false);
            console.error('Error updating listing:', error);
        }
    };

    return (
        <>
            <div className="w-100 text-start">
                <div className="d-flex flex-column modal-div">
                    <h1 className="fs-0">
                        Description
                        {/* Button trigger modal */}
                        <a
                            type="button"
                            className="btn border border-0 h-25 m-0 ps-0 translate-middle-y"
                            onClick={handleModalShow}
                        >
                            <img src="imgs/edit.png" height="20" width="20" alt="Edit" />
                        </a>
                    </h1>
                    {listing ? (<p>{formData.description}</p>) : <></>}
                </div>

                {/* Modal */}
                <Modal show={showAboutModal} onHide={handleModalHide} data-bs-theme="petpal" centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="fs-4 text-primary-brown">Description</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Control as="textarea"
                            placeholder="Add a description here"
                            className="font-plain"
                            rows={9}
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary-orange" onClick={(e) => {handleSubmit(e)}} >
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* Modal */}
            </div>
        </>
    );
}

export default DetailsAbout;