import React from 'react';
import { Form, Dropdown } from 'react-bootstrap';

const ApplicationAdditionalFilters = ({ searchParams, handleFilterChange, handleInputChange }) => {
    
    const statusOptions = [["all", "Filter By Status"], ["available", "Available"], ["adopted", "Adopted"], ["pending", "Pending"], ["withdrawn", "Withdrawn"]];
    const selectedStatusLabel = statusOptions.find(([option]) => option === searchParams.application_status)?.[1];

    return (
        <>
            <div className="d-flex flex-column bg-cream rounded-1 p-3">
                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <div className="d-flex align-items-center">

                        <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="application_status">Status:</label>
                        {/* FILTER: by status */}
                        <Dropdown onSelect={(eventKey) => handleFilterChange(eventKey, "application_status")}>

                            <Dropdown.Toggle variant="brown" id="statusDropdown">
                                {searchParams.application_status ? selectedStatusLabel  : "Filter By Status"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {statusOptions.map(([option, label]) => (
                                    <Dropdown.Item key={option} eventKey={option} active={searchParams.application_status === option}>
                                        {label}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>

                        </Dropdown>
                    </div>
                </div>
                
                {/* SEARCH PARAMETERS: name, location, animal, breed */}
                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="pet_listing_name">Name:</label>
                    <Form.Control type="text" id="pet_listing_name" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="pet_listing_location">Location:</label>
                    <Form.Control type="text" id="pet_listing_location" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="pet_listing_animal">Animal:</label>
                    <Form.Control type="text" id="pet_listing_animal" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="pet_listing_breed">Breed:</label>
                    <Form.Control type="text" id="pet_listing_breed" onChange={handleInputChange} />
                </div>
            </div>
        </>
    )
};

export default ApplicationAdditionalFilters;