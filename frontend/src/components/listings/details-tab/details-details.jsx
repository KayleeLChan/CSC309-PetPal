import React, { useState, useEffect, props } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const DetailsDetails = ({ listing }) => {
    // const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        personality: '',
        age: '',
        size: '',
        good_with: '',
        sex: '',
    });

    useEffect(() => {
        // Check if modelInstance prop is provided
        if (listing) {
            // If yes, update the formData state with the values from the modelInstance
            setFormData({
                personality: listing.personality,
                age: listing.age,
                size: listing.size,
                good_with: listing.good_with,
                sex: listing.sex,
            });
        }
    }, [listing]);

    const handleModalShow = async () => {
        setShowModal(true);
    };

    const handleModalHide = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        console.log("event", e);
        e.preventDefault();

        // Here you can submit the form data to your Django backend
        // if (props.onSubmit) {
        //     props.onSubmit(formData);
        // }
        updateListing();
        setShowModal(false);
    };

    const updateListing = async () => {
        console.log("stringified:", JSON.stringify(formData));
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

    // if (loading) {
    //     return <p className="text-center">Loading...</p>
    // }

    console.log("data:", formData);
    return (
        <>
            <div className="w-100 text-start">
                <div className="d-flex flex-column modal-div">
                    <h1 className="fs-0">
                        About
                        {/* Button trigger modal */}
                        <a
                            type="button"
                            className="btn border border-0 h-25 m-0 ps-0 translate-middle-y"
                            onClick={handleModalShow}
                        >
                            <img src="imgs/edit.png" height="20" width="20" alt="Edit" />
                        </a>
                    </h1>
                    <div className="w-90 text-start">
                        <p className="fs-3 mb-0">Personality</p>
                        {formData.personality ? (<p className="fs-5">{formData.personality}</p>) : (<></>)}
                        <p className="fs-3 mb-0">Sex</p>
                        {formData.sex ? (<p className="fs-5">{formData.sex}</p>) : (<></>)}
                        <p className="fs-3 mb-0">Age</p>
                        {formData.age ? (<p className="fs-5">{formData.age}</p>) : (<></>)}
                        <p className="fs-3 mb-0">Size</p>
                        {formData.size ? (<p className="fs-5">{formData.size}</p>) : (<></>)}
                        <p className="fs-3 mb-0">Good In a Home With</p>
                        {formData.good_with ? (<p className="fs-5">{formData.good_with}</p>) : (<></>)}

                    </div>
                </div>

                {/* Modal */}
                <Modal show={showModal} onHide={handleModalHide} data-bs-theme="petpal" centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="fs-4 text-primary-brown">About</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <label className="text-primary-brown fs-5 pt-0" htmlFor="personality">
                                Personality
                            </label>
                            <Form.Select className="form-select form-select-sm font-plain w-auto border fs-5"
                                aria-label="personality"
                                id="personality"
                                value={formData.personality}
                                onChange={(e) => setFormData({ ...formData, personality: e.target.value })} required>
                                <option value="" disabled>(required)</option>
                                <option value="very active">very active</option>
                                <option value="active">active</option>
                                <option value="laid-back">laid-back</option>
                                <option value="lap">lap-pet</option>
                            </Form.Select>

                            <label className="text-primary-brown fs-5" htmlFor="personality">
                                Sex
                            </label>
                            <Form.Select className="form-select form-select-sm font-plain w-auto border fs-5"
                                aria-label="sex"
                                id="sex"
                                value={formData.sex}
                                onChange={(e) => setFormData({ ...formData, sex: e.target.value })} required>
                                <option value="" disabled>(required)</option>
                                <option value="F">Female</option>
                                <option value="M">Male</option>
                            </Form.Select>

                            <label className="text-primary-brown fs-5" htmlFor="personality">
                                Age
                            </label>
                            <Form.Select className="form-select form-select-sm font-plain w-auto border fs-5"
                                aria-label="age"
                                id="age"
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })} required>
                                <option value="" disabled>(required)</option>
                                <option value="newborn">newborn</option>
                                <option value="young">young</option>
                                <option value="adult">adult</option>
                                <option value="senior">senior</option>
                            </Form.Select>

                            <label className="text-primary-brown fs-5" htmlFor="personality">
                                Size
                            </label>
                            <Form.Select className="form-select form-select-sm font-plain w-auto border fs-5"
                                aria-label="size"
                                id="size"
                                value={formData.size}
                                onChange={(e) => setFormData({ ...formData, size: e.target.value })} required>
                                <option value="" disabled>(required)</option>
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="large">large</option>
                                <option value="extra large">extra large</option>
                            </Form.Select>

                            <label className="text-primary-brown fs-5" htmlFor="personality">
                                Good In a Home With
                            </label>
                            <Form.Select className="form-select form-select-sm font-plain w-auto border fs-5"
                                aria-label="good_with"
                                id="good_with"
                                value={formData.good_with}
                                onChange={(e) => setFormData({ ...formData, good_with: e.target.value })} required>
                                <option value="" disabled>(required)</option>
                                <option value="none">no pet(s)</option>
                                <option value="cat">cat(s)</option>
                                <option value="dog">dog(s)</option>
                                <option value="both">dog(s) and cat(s)</option>
                                <option value="other">other pet(s)</option>
                            </Form.Select>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary-orange" onClick={(e) => { handleSubmit(e) }} >
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* Modal */}
            </div>
        </>
    );
}

export default DetailsDetails;