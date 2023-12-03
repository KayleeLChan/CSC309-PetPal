import React, { useState, useEffect} from 'react';
import { Form, Col, Container } from 'react-bootstrap';

const CompatibilityTab = ({ listing }) => {
    const [formData, setFormData] = useState({
        breed: '',
        age: '',
        gender: '',
        size: '',
        traits: '',
    });

    useEffect(() => {
        // Check if modelInstance prop is provided
        if (listing) {
            // If yes, update the formData state with the values from the modelInstance
            setFormData({
                personality: listing.personality,
                size: listing.size,
                training: listing.training,
                health: listing.health,
                good_with: listing.good_with,
                good_without: listing.good_without,
            });
        }
    }, [listing]);
    return (
        <Container fluid>
            <div className="d-flex flex-column w-100">
                {/* <Form className="row row-cols-xs-auto gx-3 gy-1 pt-4 align-items-center">
                    <Col xs={12}>
                        <p className="mb-0 fs-4">My pet prefers</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select className="form-select form-select-sm font-plain w-auto border border-0 fs-5" aria-label="Default select example">
                            <option selected>(required)</option>
                            <option value="single">single</option>
                            <option value="family">family</option>
                        </Form.Select>
                    </Col>
                </Form>

                <Form className="row row-cols-xs-auto gx-3 gy-1 pt-4 align-items-center">
                    <Col xs={12}>
                        <p className="mb-0 fs-4">My pet likes</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select className="form-select form-select-sm font-plain w-auto border border-0 fs-5" aria-label="Default select example">
                            <option selected>(required)</option>
                            <option value="kids">kids</option>
                            <option value="no kids">no kids</option>
                        </Form.Select>
                    </Col>
                    <Col xs={12}>
                        <p className="mb-0 fs-4">at home</p>
                    </Col>
                </Form>

                <Form className="row row-cols-xs-auto gx-3 gy-1 pt-4 align-items-center">
                    <Col xs={12}>
                        <p className="mb-0 fs-4">My pet should be with a</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select className="form-select form-select-sm font-plain w-auto border border-0 fs-5" aria-label="Default select example">
                            <option selected>(required)</option>
                            <option value="previous">previous</option>
                            <option value="first-time">first-time</option>
                        </Form.Select>
                    </Col>
                    <Col xs={12}>
                        <p className="mb-0 fs-4">pet owner</p>
                    </Col>
                </Form> */}

                <Form className="row row-cols-xs-auto gx-3 gy-1 pt-4 align-items-center">
                    <Col xs={12}>
                        <p className="mb-0 fs-4">My pet is comfortable with</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select className="form-select form-select-sm font-plain w-auto border border-0 fs-5" aria-label="Default select example">
                            <option selected>(required)</option>
                            <option value="none">no pet(s)</option>
                            <option value="cat">cat(s)</option>
                            <option value="dog">dog(s)</option>
                            <option value="both">dog(s) and cat(s)</option>
                            <option value="other">other pet(s)</option>
                        </Form.Select>
                    </Col>
                </Form>

                <Form className="row row-cols-xs-auto gx-3 gy-1 pt-4 align-items-center">
                    <Col xs={12}>
                        <p className="mb-0 fs-4">My pet is a(n)</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select className="form-select form-select-sm font-plain w-auto border border-0 fs-5" aria-label="Default select example">
                            <option selected>(required)</option>
                            <option value="newborn">newborn</option>
                            <option value="young">young</option>
                            <option value="adult">adult</option>
                            <option value="senior">senior</option>
                        </Form.Select>
                    </Col>
                </Form>

                <Form className="row row-cols-xs-auto gx-3 gy-1 pt-4 align-items-center">
                    <Col xs={12}>
                        <p className="mb-0 fs-4">My pet's gender is</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select className="form-select form-select-sm font-plain w-auto border border-0 fs-5" aria-label="Default select example">
                            <option selected>(required)</option>
                            <option value="female">female</option>
                            <option value="male">male</option>
                        </Form.Select>
                    </Col>
                </Form>

                <Form className="row row-cols-xs-auto gx-3 gy-1 pt-4 align-items-center">
                    <Col xs={12}>
                        <p className="mb-0 fs-4">My pet's size is</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select className="form-select form-select-sm font-plain w-auto border border-0 fs-5" aria-label="Default select example">
                            <option selected>(required)</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                            <option value="extra large">extra large</option>
                        </Form.Select>
                    </Col>
                </Form>

                <Form className="row row-cols-xs-auto gx-3 gy-1 pt-4 align-items-center">
                    <Col xs={12}>
                        <p className="mb-0 fs-4">My pet's behaviour is</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select className="form-select form-select-sm font-plain w-auto border border-0 fs-5" aria-label="Default select example">
                            <option selected>(required)</option>
                            <option value="very active">very active</option>
                            <option value="active">active</option>
                            <option value="laid-back">laid-back</option>
                            <option value="lap-pet">lap-pet</option>
                        </Form.Select>
                    </Col>
                </Form>

                {/* <Form className="row row-cols-xs-auto gx-3 gy-1 pt-4 align-items-center">
                    <Form.Label htmlFor="age" className="form-label mb-0 fs-4 p-0">
                        My pet has special needs
                    </Form.Label>
                    <div className="form-check ms-2 mb-0 fs-5">
                        <Form.Check
                            type="radio"
                            name="needs"
                            id="needsYes"
                            label="Yes"
                        />
                    </div>
                    <div className="form-check ms-2 mb-0 fs-5">
                        <Form.Check
                            type="radio"
                            name="needs"
                            id="needsNo"
                            label="No"
                        />
                    </div>
                </Form> */}

                {/* <Form className="row row-cols-xs-auto gx-3 gy-1 pt-4 align-items-center">
                    <Col xs={12}>
                        <p className="mb-0 fs-4">My pet prefers living in a(n)</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select
                            className="form-select form-select-sm font-plain w-auto border border-0 fs-5"
                            aria-label="Default select example"
                        >
                            <option selected>(required)</option>
                            <option value="house">house</option>
                            <option value="condominium">condominium</option>
                            <option value="apartment">apartment</option>
                            <option value="townhouse">townhouse</option>
                            <option value="other">other</option>
                        </Form.Select>
                    </Col>
                    <Col xs={12}>
                        <p className="mb-0 fs-4">that is</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select
                            className="form-select form-select-sm font-plain w-auto border border-0 fs-5"
                            aria-label="Default select example"
                        >
                            <option selected>(required)</option>
                            <option value="own">owned</option>
                            <option value="rent">rented</option>
                        </Form.Select>
                    </Col>
                </Form>

                <Form className="row row-cols-xs-auto gx-3 gy-1 pt-4 align-items-center">
                    <Col xs={12}>
                        <p className="mb-0 fs-4">My pet should be kept</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select
                            className="form-select form-select-sm font-plain w-auto border border-0 fs-5"
                            aria-label="Default select example"
                        >
                            <option selected>(required)</option>
                            <option value="indoors">indoors</option>
                            <option value="outdoors">outdoors</option>
                        </Form.Select>
                    </Col>
                </Form>

                <Form className="row row-cols-xs-auto gx-3 gy-1 py-4 align-items-center">
                    <Col xs={12}>
                        <p className="mb-0 fs-4">My pet prefers</p>
                    </Col>
                    <Col xs={12}>
                        <Form.Select className="form-select form-select-sm font-plain w-auto border border-0 fs-5" aria-label="Default select example">
                            <option selected>(required)</option>
                            <option value="none">no</option>
                            <option value="fenced">a fenced</option>
                            <option value="un-fenced">an un-fenced</option>
                        </Form.Select>
                    </Col>
                    <Col xs={12}>
                        <p className="mb-0 fs-4">yard</p>
                    </Col>
                </Form> */}
            </div>
        </Container>
    );
};

export default CompatibilityTab;