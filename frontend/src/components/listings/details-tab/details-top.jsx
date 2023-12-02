import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const DetailsTop = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:8000/notifications/${notification.id}/`,
    //     {
    //         headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNjc2NTAzLCJpYXQiOjE3MDE0NjY5MDMsImp0aSI6ImEyMDA4OWY2NzY3ZTRjYmNiYjdhYzRhNTU1NWViMzdiIiwidXNlcl9pZCI6MX0.Em63InqkhayO9AFzGVAy1Y7B-FvPysNxG7--1yWFPJ4",}
    //     });  //TODO: Make authorization better later
    //   } catch (error) {
    //     console.error('Error fetching detailed notification:', error);
    //   }
      setShowModal(true);
    };
  
    const handleModalHide = () => {
      setShowModal(false);
    };

    return (
        <>
            <div className="d-flex w-90 py-3 justify-content-between align-items-end small-title-input">
                <input className="form-control form-control-lg border border-0 title-separate" type="text" placeholder="Pet Name" aria-label="Pet Name Input" />
                <input className="form-control form-control-lg border border-0 text-end title-separate" type="text" placeholder="Location" aria-label="Location Input" />
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center bg-primary-cream rounded p-3">
                <img src="./imgs/gallery.svg" width="70%" alt="Gallery" />
                <Form className="d-flex flex-column justify-content-center align-items-center" encType="multipart/form-data">
                    <Form.Label htmlFor="formFile" className="form-label">Upload images</Form.Label>
                    <Form.Control type="file" id="formFile" multiple />
                </Form>
            </div>

            <div className="w-100 d-flex flex-row align-items-center justify-content-evenly m-3 mb-5 p-1 bg-brown text-primary-cream rounded-2 position-relative">
                <div className="w-100 d-flex flex-row align-items-center justify-content-evenly m-0 bg-brown text-primary-cream rounded-2 show-md">
                    <h1 className="fs-0">Summary</h1>
                </div>
                <div className="w-100 d-flex flex-row align-items-center justify-content-evenly m-0 bg-brown text-primary-cream rounded-2 hide-lg">
                    <p className="fs-6 mb-0">Summary</p>
                </div>
                <a type="button"
                className="btn btn-sm border border-0 position-absolute top-0 start-100 bg-none"
                onClick={handleModalShow}>
                    <img src="imgs/edit.png" height="20" width="20" alt="Edit Summary" />
                </a>
                <Modal data-bs-theme="petpal" show={showModal} onHide={handleModalHide} centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="fs-4 text-primary-brown">Summary</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" id="breed" placeholder="Breed" />
                            <label className="text-primary-brown fs-5" htmlFor="breed">Breed</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" id="age" placeholder="Age" />
                            <label className="text-primary-brown fs-5" htmlFor="age">Age</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" id="gender" placeholder="Gender" />
                            <label className="text-primary-brown fs-5" htmlFor="gender">Gender</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" id="size" placeholder="Size" />
                            <label className="text-primary-brown fs-5" htmlFor="size">Size</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" id="traits" placeholder="Traits" />
                            <label className="text-primary-brown fs-5" htmlFor="traits">Traits</label>
                        </Form.Floating>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary-orange" onClick={handleModalHide}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default DetailsTop;