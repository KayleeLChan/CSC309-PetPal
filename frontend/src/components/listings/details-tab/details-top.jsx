import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const DetailsTop = ({ listing, formData, setFormData, setImages }) => {
    const accessToken = localStorage.getItem('access_token');
    const [showModal, setShowModal] = useState(false);
    const [allImages, setAllImages] = useState([]);
    const hasNoImages = !listing || !listing.images;

    const handleModalShow = async () => {
        setShowModal(true);
    };

    const handleModalHide = () => {
        setShowModal(false);
    };

    const handlePhotoChange = (event) => {
        const imgs = event.target.files;
        if (imgs) {
            setImages(imgs);
        }
    };

    useEffect(() => {
        if (!hasNoImages) {
            setAllImages(listing.images);
        }
    }, [listing]);

    const handleDelete = async (e) => {
        const imgID = e.imageID;
        try {
            const response = await fetch(`http://localhost:8000/listings/image/${imgID}/`,
                {
                    method: 'DELETE',
                    headers: { Authorization: `Bearer ${accessToken}`, }
                });

            if (response.ok) {
                // If the deletion is successful, call the onDelete callback
                setAllImages((prevImages) =>
                    prevImages.filter((image) => image.id !== imgID)
                );
            } else {
                console.error('Error deleting image:', response.status);
            }
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    return (
        <>
            <div className="d-flex w-90 py-3 justify-content-between align-items-end small-title-input">
                <input className="form-control form-control-lg border border-0 title-separate"
                    type="text"
                    placeholder="Pet Name"
                    aria-label="Pet Name Input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input className="form-control form-control-lg border border-0 text-end title-separate"
                    type="text"
                    placeholder="Location"
                    aria-label="Location Input"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
            </div>

            <div className="d-flex flex-column w-60 justify-content-center align-items-center bg-primary-cream rounded p-3">
                {!hasNoImages ? (
                    allImages.map((image, index) => {
                        const relativeImageUrl = image.image.replace('http://localhost:8000/media/listing_images/', '');
                        const imageID = image.id
                        // TODO: MAKE SURE IF IMAGE IS DELETED AND THERE ARE NO IMAGES LEFT, FILL IN WITH DEFAULT IMAGE!!!
                        return (
                            <div className="d-flex w-100 flex-row justify-content-evenly my-1">
                                <a href={image.image} target="_blank" rel="noopener noreferrer" aria-label={`${relativeImageUrl} opens in new tab`} className="w-75">
                                    <Button
                                        variant="cream"
                                        className="btn-lg text-dark-brown border-0 w-90 mx-3 text-start"
                                    >
                                        <div className="d-flex flex-row align-items-center w-100">
                                            <p className="font-plain fs-5 m-0 ps-3 pt-2 text-truncate notif-msg d-flex w-100">
                                                {relativeImageUrl}
                                            </p>
                                        </div>
                                    </Button>
                                </a>
                                <Button variant="primary-orange" onClick={(e) => handleDelete({ imageID })} id={imageID}>
                                    <svg aria-hidden="true" width="18" height="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                                    </svg>
                                </Button>
                            </div>
                        )
                    })
                ) : (<></>)}
                <img src="/imgs/gallery.svg" width="70%" alt="Gallery" />
                <Form className="d-flex flex-column justify-content-center align-items-center" encType="multipart/form-data">
                    <Form.Label htmlFor="formFile" className="form-label">Upload images</Form.Label>
                    <input
                        type="file"
                        className="form-control bg-primary-cream font-plain"
                        id="profilepic"
                        onChange={handlePhotoChange}
                        multiple
                    />
                </Form>
            </div>

            <div className="w-100 d-flex flex-row align-items-center justify-content-evenly m-3 mb-5 p-1 bg-brown text-primary-cream rounded-2 position-relative">
                <div className="w-100 d-flex flex-row align-items-center justify-content-evenly m-0 bg-brown text-primary-cream rounded-2 show-md">
                    <h1 className="fs-0">Summary</h1>
                </div>
                <div className="w-100 d-flex flex-row align-items-center justify-content-evenly m-0 bg-brown text-primary-cream rounded-2 hide-lg">
                    {formData.animal ? (<p className="summary-text mb-0">{formData.animal}</p>) : (<p className="summary-text mb-0">Animal</p>)}
                    <p className="summary-text mb-0">|</p>
                    {formData.breed ? (
                        <p className="summary-text mb-0"> {formData.breed}</p>) : (<p className="summary-text mb-0"> Breed</p>)}
                    <p className="summary-text mb-0">|</p>
                    {formData.colour ? (
                        <p className="summary-text mb-0"> {formData.colour}</p>) : (<p className="summary-text mb-0"> Colour</p>)}
                </div>
                <a type="button"
                    className="btn btn-sm border border-0 position-absolute top-0 start-100 bg-none"
                    onClick={handleModalShow}>
                    <img src="/imgs/edit.png" height="20" width="20" alt="Edit Summary" />
                </a>
                <Modal data-bs-theme="petpal" show={showModal} onHide={handleModalHide} centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="fs-4 text-primary-brown">Summary</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                className="pb-2"
                                type="text"
                                id="animal"
                                placeholder="Animal"
                                value={formData.animal}
                                onChange={(e) => setFormData({ ...formData, animal: e.target.value })} />
                            <label className="text-primary-brown fs-5" htmlFor="animal">Animal</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" id="breed" placeholder="Breed"
                                className="pb-2"
                                value={formData.breed}
                                onChange={(e) => setFormData({ ...formData, breed: e.target.value })} />
                            <label className="text-primary-brown fs-5" htmlFor="breed">Breed</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control type="text" id="breed" placeholder="Colour"
                                className="pb-2"
                                value={formData.colour}
                                onChange={(e) => setFormData({ ...formData, colour: e.target.value })} />
                            <label className="text-primary-brown fs-5" htmlFor="colour">Colour</label>
                        </Form.Floating>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary-orange" onClick={handleModalHide} >
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default DetailsTop;