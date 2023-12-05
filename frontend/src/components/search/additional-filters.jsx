import React from 'react';
import { Form } from 'react-bootstrap';

const AdditionalFilters = ({searchParams, handleRadioChange, handleInputChange}) => {

    return (
        <>
            {/* Large Version */}
            <div className="d-flex flex-column bg-cream rounded-1 p-3 hide-md">
                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="age">Age:</label>
                    <div className="px-3">
                        <Form.Check type="radio" id="new" label="newborn"
                            checked={searchParams.age === "new"}
                            onChange={(e) => handleRadioChange(e, "age")} />
                    </div>
                    <div className="px-3">
                        <Form.Check type="radio" id="young" label="young"
                            checked={searchParams.age === "young"}
                            onChange={(e) => handleRadioChange(e, "age")} />
                    </div>
                    <div className="px-3">
                        <Form.Check type="radio" id="adult" label="adult"
                            checked={searchParams.age === "adult"}
                            onChange={(e) => handleRadioChange(e, "age")} />
                    </div>
                    <div className="px-3">
                        <Form.Check type="radio" id="senior" label="senior"
                            checked={searchParams.age === "senior"}
                            onChange={(e) => handleRadioChange(e, "age")} />
                    </div>
                </div>

                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="size">Size:</label>
                    <div className="px-3">
                        <Form.Check type="radio" id="S" label="small"
                            checked={searchParams.size === "S"}
                            onChange={(e) => handleRadioChange(e, "size")} />
                    </div>
                    <div className="px-3">
                        <Form.Check type="radio" id="M" label="medium"
                            checked={searchParams.size === "M"}
                            onChange={(e) => handleRadioChange(e, "size")} />
                    </div>
                    <div className="px-3">
                        <Form.Check type="radio" id="L" label="large"
                            checked={searchParams.size === "L"}
                            onChange={(e) => handleRadioChange(e, "size")} />
                    </div>
                    <div className="px-3">
                        <Form.Check type="radio" id="XL" label="extra large"
                            checked={searchParams.size === "XL"}
                            onChange={(e) => handleRadioChange(e, "size")} />
                    </div>
                </div>

                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="status">Status:</label>
                    <div className="px-3">
                        <Form.Check type="radio" id="available" label="available"
                            checked={searchParams.status === "available"}
                            onChange={(e) => handleRadioChange(e, "status")} />
                    </div>
                    <div className="px-3">
                        <Form.Check type="radio" id="adopted" label="adopted"
                            checked={searchParams.status === "adopted"}
                            onChange={(e) => handleRadioChange(e, "status")} />
                    </div>
                    <div className="px-3">
                        <Form.Check type="radio" id="pending" label="pending"
                            checked={searchParams.status === "pending"}
                            onChange={(e) => handleRadioChange(e, "status")} />
                    </div>
                    <div className="px-3">
                        <Form.Check type="radio" id="withdrawn" label="withdrawn"
                            checked={searchParams.status === "withdrawn"}
                            onChange={(e) => handleRadioChange(e, "status")} />
                    </div>
                </div>

                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="sex">Sex:</label>
                    <div className="px-3">
                        <Form.Check type="radio" id="F" label="female"
                            checked={searchParams.sex.includes("F")}
                            onChange={(e) => handleRadioChange(e, "sex")} />
                    </div>
                    <div className="px-3">
                        <Form.Check type="radio" id="M" label="male"
                            checked={searchParams.sex === "M"}
                            onChange={(e) => handleRadioChange(e, "sex")} />
                    </div>
                </div>

                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="breed">Breed:</label>
                    <Form.Control type="text" id="breed" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="colour">Colour:</label>
                    <Form.Control type="text" id="colour" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="shelter">Shelter:</label>
                    <Form.Control type="text" id="shelter" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="name">Name:</label>
                    <Form.Control type="text" id="name" onChange={handleInputChange} />
                </div>
            </div>

            {/* Small Version */}
            <div className="d-flex flex-column bg-cream rounded-1 p-3 show-sm">
                <div className="d-flex flex-column w-100 justify-content-evenly">
                    <div className="d-flex flex-row w-100 justify-content-evenly">
                        <div className="d-flex flex-column w-100 justify-content-evenly align-items-start m-3">
                            <label className="text-primary-brown fs-5 me-3 pt-0 align-self-center" htmlFor="age">Age:</label>
                            <div className="px-0">
                                <Form.Check type="radio" id="new" label="newborn"
                                    checked={searchParams.age === "new"}
                                    onChange={(e) => handleRadioChange(e, "age")} />
                            </div>
                            <div className="px-0">
                                <Form.Check type="radio" id="young" label="young"
                                    checked={searchParams.age === "young"}
                                    onChange={(e) => handleRadioChange(e, "age")} />
                            </div>
                            <div className="px-0">
                                <Form.Check type="radio" id="adult" label="adult"
                                    checked={searchParams.age === "adult"}
                                    onChange={(e) => handleRadioChange(e, "age")} />
                            </div>
                            <div className="px-0">
                                <Form.Check type="radio" id="senior" label="senior"
                                    checked={searchParams.age === "senior"}
                                    onChange={(e) => handleRadioChange(e, "age")} />
                            </div>
                        </div>
                        <div className="d-flex flex-column w-100 justify-content-evenly align-items-start m-3">
                            <label className="text-primary-brown fs-5 me-3 pt-0 align-self-center" htmlFor="size">Size:</label>
                            <div className="px-0">
                                <Form.Check type="radio" id="S" label="small"
                                    checked={searchParams.size === "S"}
                                    onChange={(e) => handleRadioChange(e, "size")} />
                            </div>
                            <div className="px-0">
                                <Form.Check type="radio" id="M" label="medium"
                                    checked={searchParams.size === "M"}
                                    onChange={(e) => handleRadioChange(e, "size")} />
                            </div>
                            <div className="px-0">
                                <Form.Check type="radio" id="L" label="large"
                                    checked={searchParams.size === "L"}
                                    onChange={(e) => handleRadioChange(e, "size")} />
                            </div>
                            <div className="px-0">
                                <Form.Check type="radio" id="XL" label="extra large"
                                    checked={searchParams.size === "XL"}
                                    onChange={(e) => handleRadioChange(e, "size")} />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row w-100 justify-content-evenly">


                        <div className="d-flex flex-column w-100 justify-content-evenly align-items-start m-3">
                            <label className="text-primary-brown fs-5 me-3 pt-0 align-self-center" htmlFor="status">Status:</label>
                            <div className="px-0">
                                <Form.Check type="radio" id="available" label="available"
                                    checked={searchParams.status === "available"}
                                    onChange={(e) => handleRadioChange(e, "status")} />
                            </div>
                            <div className="px-0">
                                <Form.Check type="radio" id="adopted" label="adopted"
                                    checked={searchParams.status === "adopted"}
                                    onChange={(e) => handleRadioChange(e, "status")} />
                            </div>
                            <div className="px-0">
                                <Form.Check type="radio" id="pending" label="pending"
                                    checked={searchParams.status === "pending"}
                                    onChange={(e) => handleRadioChange(e, "status")} />
                            </div>
                            <div className="px-0">
                                <Form.Check type="radio" id="withdrawn" label="withdrawn"
                                    checked={searchParams.status === "withdrawn"}
                                    onChange={(e) => handleRadioChange(e, "status")} />
                            </div>
                        </div>

                        <div className="d-flex flex-column w-100 justify-content-evenly align-items-start m-3">
                            <label className="text-primary-brown fs-5 me-3 pt-0 align-self-center" htmlFor="sex">Sex:</label>
                            <div className="px-0">
                                <Form.Check type="radio" id="F" label="female"
                                    checked={searchParams.sex === "F"}
                                    onChange={(e) => handleRadioChange(e, "sex")} />
                            </div>
                            <div className="px-0">
                                <Form.Check type="radio" id="M" label="male"
                                    checked={searchParams.sex === "M"}
                                    onChange={(e) => handleRadioChange(e, "sex")} />
                            </div>
                        </div>
                    </div>



                </div>

                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3 show-sm">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="breed">Breed:</label>
                    <Form.Control type="text" id="breed" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3 show-sm">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="colour">Colour:</label>
                    <Form.Control type="text" id="colour" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="shelter">Shelter:</label>
                    <Form.Control type="text" id="shelter" onChange={handleInputChange} />
                </div>

                <div className="d-flex flex-row w-100 justify-content-evenly align-items-center my-3">
                    <label className="text-primary-brown fs-5 me-3 pt-0" htmlFor="name">Name:</label>
                    <Form.Control type="text" id="name" onChange={handleInputChange} />
                </div>
            </div>
        </>
    )
};

export default AdditionalFilters;