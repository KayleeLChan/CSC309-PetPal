import React, { useState } from 'react';
import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AdditionalFilters from '../../components/search/additional-filters';

const Search = () => {
    const navigate = useNavigate();
    const [additionalFiltersVisible, setAdditionalFiltersVisible] = useState(false);
    const [searchParams, setSearchParams] = useState({
        name: '',
        location: '',
        colour: '',
        breed: '',
        animal: '',
        status: '',
        age: '',
        size: '',
        sex: '',
        shelter: '',
    });

    const handleInputChange = (e) => {
        setSearchParams({
            ...searchParams,
            [e.target.id]: e.target.value,
        });
    };

    const handleFilterChange = (e, field) => {
        setSearchParams({
            ...searchParams,
            [field]: e,
        });
    }

    const handleToggleFilters = () => {
        setAdditionalFiltersVisible(!additionalFiltersVisible);
    };

    const searchListings = async () => {
        try {
            // Set queryParams to pass into request
            const queryString = Object.entries(searchParams)
                .filter(([key, value]) => value !== '')
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                .join('&');

            // Make request to backend
            navigate(`/listings/?${queryString}`)
        } catch (error) {
            console.error('Error searching listings:', error);
        }
    };

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main h-100 d-flex p-5 justify-content-center align-items-center">
                    <div className="d-flex flex-column search-col">

                        <div className="w-100 mb-3 p-4 d-flex flex-column bg-primary-orange text-white text-center justify-content-center align-items-center rounded">
                            <h2 className="responsive_header">Start Searching Right Meow!</h2>
                            Find a pal from our network of over 11,500 shelters and rescues
                        </div>

                        <Container>
                            <Row>
                                <Col md={6} className="justify-center">
                                    {/* Pet Search */}
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" id="animal" placeholder="Animal"
                                            className="pb-2 bg-white"
                                            onChange={handleInputChange}
                                        />
                                        <label className="text-primary-brown fs-5" htmlFor="animal">Animal</label>
                                    </Form.Floating>
                                </Col>

                                <Col md={6} className="justify-center">
                                    {/* Location Search */}
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" id="location" placeholder="Location"
                                            className="pb-2 bg-white"
                                            onChange={handleInputChange}
                                        />
                                        <label className="text-primary-brown fs-5" htmlFor="location">Location</label>
                                    </Form.Floating>
                                </Col>
                            </Row>
                        </Container>

                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <Button className="btn text-decoration-underline my-3" variant="cream" type="button" onClick={handleToggleFilters}>
                                ADDITIONAL FILTERS:
                            </Button>

                            {additionalFiltersVisible ? (
                                <AdditionalFilters searchParams={searchParams} handleInputChange={handleInputChange} handleFilterChange={handleFilterChange}></AdditionalFilters>
                            ) : (<></>)}

                            <div className="text-primary-brown">
                                    <Button className="btn m-3 mx-0 shadow-sm fs-4" type="button" variant="primary-orange" onClick={searchListings}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-search me-2 mb-1" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                        </svg>
                                        SEARCH
                                    </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;