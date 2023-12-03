import React, { useState, useEffect, props } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const DetailsAbout = ({listing}) => {
    const [showAboutModal, setShowModal] = useState(false);
    const [description, setDescription] = useState();

    useEffect(() => {
        // Check if modelInstance prop is provided
        if (listing) {
            // If yes, update the formData state with the values from the modelInstance
            setDescription(listing.description);
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
        if (props.onSubmit) {
            props.onSubmit(description);
        }
        setShowModal(false);
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
                    {listing ? (<p>{listing.description}</p>) : <></>}
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
                            value={ description }
                            onChange={(e) => setDescription({ e })}/>
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