import React from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';

const AdditionalFilters = ({ searchParams, handleFilterChange, handleInputChange }) => {
    const ageOptions = [["all", "Filter By Age"], ["new", "Newborn"], ["young", "Young"], ["adult", "Adult"], ["senior", "Senior"]];
    const sizeOptions = [["all", "Filter By Size"], ["S", "Small"], ["M", "Medium"], ["L", "Large"], ["XL", "Extra Large"]];
    const statusOptions = [["all", "Filter By Status"], ["available", "Available"], ["adopted", "Adopted"], ["pending", "Pending"], ["withdrawn", "Withdrawn"]];
    const sexOptions = [["all", "Filter By Sex"], ["F", "Female"], ["M", "male"]];

    const selectedAgeLabel = ageOptions.find(([option]) => option === searchParams.age)?.[1];
    const selectedSizeLabel = sizeOptions.find(([option]) => option === searchParams.size)?.[1];
    const selectedStatusLabel = statusOptions.find(([option]) => option === searchParams.status)?.[1];
    const selectedSexLabel = sexOptions.find(([option]) => option === searchParams.sex)?.[1];

    return (
        <>
            <div className="d-flex flex-column bg-cream rounded-1 p-3">
                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <div className="d-flex align-items-center">
                        <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="age">Age:</label>
                        <Dropdown onSelect={(eventKey) => handleFilterChange(eventKey, "age")}>
                            <Dropdown.Toggle variant="brown" id="ageDropdown">
                                {searchParams.age ? selectedAgeLabel  : "Filter By Age"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {ageOptions.map(([option, label]) => (
                                    <Dropdown.Item key={option} eventKey={option} active={searchParams.age === option}>
                                        {label}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <div className="d-flex align-items-center">
                        <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="size">Size:</label>
                        <Dropdown onSelect={(eventKey) => handleFilterChange(eventKey, "size")}>
                            <Dropdown.Toggle variant="brown" id="sizeDropdown">
                                {searchParams.size ? selectedSizeLabel : "Select Size"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            {sizeOptions.map(([option, label]) => (
                                    <Dropdown.Item key={option} eventKey={option} active={searchParams.size === option}>
                                        {label}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <div className="d-flex align-items-center">
                        <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="status">Status:</label>
                        <Dropdown onSelect={(eventKey) => handleFilterChange(eventKey, "status")}>
                            <Dropdown.Toggle variant="brown" id="statusDropdown">
                                {searchParams.status ? selectedStatusLabel : "Select Status"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            {statusOptions.map(([option, label]) => (
                                    <Dropdown.Item key={option} eventKey={option} active={searchParams.status === option}>
                                        {label}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <div className="d-flex align-items-center">
                        <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="sex">Sex:</label>
                        <Dropdown onSelect={(eventKey) => handleFilterChange(eventKey, "sex")}>
                            <Dropdown.Toggle variant="brown" id="sexDropdown">
                                {searchParams.sex ? selectedSexLabel : "Select Sex"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            {sexOptions.map(([option, label]) => (
                                    <Dropdown.Item key={option} eventKey={option} active={searchParams.sex === option}>
                                        {label}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="breed">Breed:</label>
                    <Form.Control type="text" id="breed" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="colour">Colour:</label>
                    <Form.Control type="text" id="colour" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="shelter">Shelter:</label>
                    <Form.Control type="text" id="shelter" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-center align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="name">Name:</label>
                    <Form.Control type="text" id="name" onChange={handleInputChange} />
                </div>
            </div>
        </>
    )
};

export default AdditionalFilters;