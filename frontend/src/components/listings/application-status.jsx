import React, { useEffect, useState, props } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';

const ApplicationStatus = ({listing, formData, setFormData}) => {
    const [showModal, setShowModal] = React.useState(false);

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    return (
        <Container className="w-50 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column mb-5 text-dark-brown bg-white rounded-5 text-center">
                <div className="p-3 pt-3 text-primary-cream bg-primary-orange rounded-5 shadow position-relative">
                    <h2 className="responsive-heading m-0">Application Status</h2>
                    <a
                        type="button"
                        className="btn border border-0 h-25 position-absolute top-0 start-100"
                        onClick={handleModalShow}
                    >
                        <img src="imgs/edit.png" height="20" width="20" alt="Edit Status"></img>
                    </a>
                </div>

                <Modal show={showModal} onHide={handleModalClose} data-bs-theme="petpal" centered scrollable>
                    <Modal.Header closeButton>
                        <Modal.Title className="fs-4 text-primary-brown">Status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column justify-content-start align-items-start fs-5">
                        <Form.Group controlId="status">
                            <Form.Label>Application Status</Form.Label>
                            <Form.Select aria-label="Default select example"
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                                <option value="" disabled>(required)</option>
                                <option value="available">Available</option>
                                <option value="adopted">Adopted</option>
                                <option value="withdrawn">Withdrawn</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mt-3">
                            <Form.Label className="text-primary-brown">Application Deadline</Form.Label>
                            <Form.Control type="date" placeholder="Application Deadline"
                            value={formData.deadline}
                            onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}/>
                            <p className="fs-7 text-start mb-0 mt-2">Application Status will automatically change to Pending once the application deadline passes.</p>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" className="bg-primary-orange" onClick={handleModalClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Container>
    );
};

export default ApplicationStatus;