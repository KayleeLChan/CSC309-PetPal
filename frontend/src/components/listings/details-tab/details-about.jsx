import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const DetailsAbout = ({listing, formData, setFormData}) => {
    const [showAboutModal, setShowModal] = useState(false);

    const handleModalShow = async () => {
        setShowModal(true);
    };

    const handleModalHide = () => {
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
                    {formData.description ? (<p>{formData.description}</p>) : <></>}
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
                        <Button variant="primary-orange" onClick={handleModalHide} >
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