import React, { useState, useEffect, props } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const DetailsDetails = ({ listing }) => {
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
        e.preventDefault();

        // Here you can submit the form data to your Django backend
        if (props.onSubmit) {
            props.onSubmit(formData);
        }
        setShowModal(false);
    };

    return (
        <>
            <div className="w-100 text-start">
                <div className="d-flex flex-row align-items-center modal-div">
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
                                <option value="lap-pet">lap-pet</option>
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

                            {/* <Form.Floating className="mb-3">
                                <Form.Control type="text" id="floatingInput" placeholder="Health"
                                    value={formData.health}
                                    onChange={(e) => setFormData({ ...formData, health: e.target.value })} />
                                <label className="text-primary-brown fs-5" htmlFor="floatingInput">
                                    Health
                                </label>
                            </Form.Floating>
                            <Form.Floating className="mb-3">
                                <Form.Control type="text" id="floatingInput" placeholder="Good In a Home With"
                                    value={formData.good_with}
                                    onChange={(e) => setFormData({ ...formData, good_with: e.target.value })} />
                                <label className="text-primary-brown fs-5" htmlFor="floatingInput">
                                    Good In a Home With
                                </label>
                            </Form.Floating> */}
                            {/* <Form.Floating className="mb-3">
                                <Form.Control type="text" id="floatingInput" placeholder="Prefers a Home Without"
                                    value={formData.good_without}
                                    onChange={(e) => setFormData({ ...formData, good_without: e.target.value })} />
                                <label className="text-primary-brown fs-5" htmlFor="floatingInput">
                                    Prefers a Home Without
                                </label>
                            </Form.Floating> */}

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