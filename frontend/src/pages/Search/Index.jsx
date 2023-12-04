import React, { useState, useEffect, useMemo } from 'react';
import NotificationItem from '../../components/notifications/notification-item';
import { useSearchParams } from "react-router-dom";
import { Button, Row, Col, Dropdown, Container, InputGroup, Form } from 'react-bootstrap';

const Search = () => {
    // const [loading, setLoading] = useState(true);
    // const [notifications, setNotifications] = useState([]);
    // const [totalPages, setTotalPages] = useState(1);
    // const [searchParams, setSearchParams] = useSearchParams();
    // const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1);

    // // useMemo to store search parameters
    // const query = useMemo(
    //     () => ({
    //         page: parseInt(searchParams.get("page") ?? 1),
    //         filter : searchParams.get("filter") ?? "all",
    //     }),
    //     [searchParams]
    // );

    // useEffect(() => {
    //     // Fetch the list of notifications when the component mounts
    //     fetchNotifications();
    // }, [query]);

    // const fetchNotifications = async () => {
    //     try {
    //         setLoading(true);
    //         // Set queryParams to pass into request
    //         const queryParams = new URLSearchParams({
    //             page: query.page,
    //             filter: query.filter,
    //         });

    //         // Make request to backend
    //         const response = await fetch(`http://localhost:8000/notifications/?${queryParams}`,
    //             {
    //                 headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNzk0OTgxLCJpYXQiOjE3MDE1ODUzODEsImp0aSI6Ijg2NTgzN2I0NjNkMzQ5MWM5M2FmMTBlZmI2ODAzN2NjIiwidXNlcl9pZCI6MX0.PPHuhQqkpaGuF7wv2FEqbY9B8dVd5izi6n0KBfFs3wQ", }
    //             }); //TODO: Make authorization better later
    //         const data = await response.json();
    //         setNotifications(data.results); 
    //         setTotalPages(
    //             Math.ceil(Number(data.count) / 10)
    //         );
    //         setLoading(false);
    //     } catch (error) {
    //         setLoading(false);
    //         console.error('Error fetching notifications:', error);
    //     }
    // };

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
                                        // value={formData.breed}
                                        // onChange={(e) => setFormData({ ...formData, breed: e.target.value })} 
                                        />
                                        <label className="text-primary-brown fs-5" htmlFor="animal">Animal</label>
                                    </Form.Floating>
                                </Col>

                                <Col md={6} className="justify-center">
                                    {/* Location Search */}
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" id="location" placeholder="Location"
                                            className="pb-2 bg-white"
                                        // value={formData.breed}
                                        // onChange={(e) => setFormData({ ...formData, breed: e.target.value })} 
                                        />
                                        <label className="text-primary-brown fs-5" htmlFor="location">Location</label>
                                    </Form.Floating>
                                </Col>
                            </Row>
                        </Container>

                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <Button className="btn text-decoration-underline my-3" variant="brown" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                ADDITIONAL FILTERS:
                            </Button>
                            {/* Large Version */}
                            <div className="d-flex flex-column bg-cream rounded-1 p-3 hide-md">
                                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="age">Age:</label>
                                    <div className="px-3">
                                        <Form.Check type="checkbox" id="new" label="newborn" />
                                    </div>
                                    <div className="px-3">
                                        <Form.Check type="checkbox" id="young" label="young" />
                                    </div>
                                    <div className="px-3">
                                        <Form.Check type="checkbox" id="adult" label="adult" />
                                    </div>
                                    <div className="px-3">
                                        <Form.Check type="checkbox" id="senior" label="senior" />
                                    </div>
                                </div>

                                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="size">Size:</label>
                                    <div className="px-3">
                                        <Form.Check type="checkbox" id="S" label="small" />
                                    </div>
                                    <div className="px-3">
                                        <Form.Check type="checkbox" id="M" label="medium" />
                                    </div>
                                    <div className="px-3">
                                        <Form.Check type="checkbox" id="L" label="large" />
                                    </div>
                                    <div className="px-3">
                                        <Form.Check type="checkbox" id="XL" label="extra large" />
                                    </div>
                                </div>

                                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="sex">Sex:</label>
                                    <div className="px-3">
                                        <Form.Check type="checkbox" id="F" label="female" />
                                    </div>
                                    <div className="px-3">
                                        <Form.Check type="checkbox" id="M" label="male" />
                                    </div>
                                </div>

                                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="breed">Breed:</label>
                                    <Form.Control type="text" id="breed" />
                                </div>

                                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="colour">Colour:</label>
                                    <Form.Control type="text" id="colour" />
                                </div>           
                            </div>

                            {/* Small Version */}
                            <div className="d-flex flex-column bg-cream rounded-1 p-3 show-sm">
                                <div className="d-flex flex-row">
                                <div className="d-flex flex-column w-100 justify-content-evenly align-items-start my-3">
                                    <label className="text-primary-brown fs-5 me-3 pt-0 align-self-center" htmlFor="age">Age:</label>
                                    <div className="px-0">
                                        <Form.Check type="checkbox" id="new" label="newborn" />
                                    </div>
                                    <div className="px-0">
                                        <Form.Check type="checkbox" id="young" label="young" />
                                    </div>
                                    <div className="px-0">
                                        <Form.Check type="checkbox" id="adult" label="adult" />
                                    </div>
                                    <div className="px-0">
                                        <Form.Check type="checkbox" id="senior" label="senior" />
                                    </div>
                                </div>

                                <div className="d-flex flex-column w-100 justify-content-evenly align-items-start my-3 mx-3">
                                    <label className="text-primary-brown fs-5 me-3 pt-0 align-self-center" htmlFor="size">Size:</label>
                                    <div className="px-0">
                                        <Form.Check type="checkbox" id="S" label="small" />
                                    </div>
                                    <div className="px-0">
                                        <Form.Check type="checkbox" id="M" label="medium" />
                                    </div>
                                    <div className="px-0">
                                        <Form.Check type="checkbox" id="L" label="large" />
                                    </div>
                                    <div className="px-0">
                                        <Form.Check type="checkbox" id="XL" label="extra large" />
                                    </div>
                                </div>

                                <div className="d-flex flex-column w-100 justify-content-evenly align-items-start my-3">
                                    <label className="text-primary-brown fs-5 me-3 pt-0 align-self-center" htmlFor="sex">Sex:</label>
                                    <div className="px-0">
                                        <Form.Check type="checkbox" id="F" label="female" />
                                    </div>
                                    <div className="px-0">
                                        <Form.Check type="checkbox" id="M" label="male" />
                                    </div>
                                </div> 
                                </div>
                                  
                                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3 show-sm">
                                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="breed">Breed:</label>
                                    <Form.Control type="text" id="breed" />
                                </div>

                                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3 show-sm">
                                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="colour">Colour:</label>
                                    <Form.Control type="text" id="colour" />
                                </div>        
                            </div>

                            

                            <div className="text-primary-brown">
                                <a href="search_results.html">
                                    <Button className="btn m-3 ms-0 shadow-sm fs-4" type="button" variant="primary-orange">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-search me-2 mb-1" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                        </svg>
                                        SEARCH
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;