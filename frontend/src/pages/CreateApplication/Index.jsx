import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function CreateApplication() {
    const { userId, petId } = useParams();
    const [userInfo, setUserInfo] = useState({});
    const [petDetails, setPetDetails] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
        try {
            const response = await fetch(`/profile/${userId}`);
            const data = await response.json();
            setUserInfo(data);
            } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const fetchPetDetails = async () => {
        try {
            const response = await fetch(`/petlistings/${petId}`);
            const data = await response.json();
            setPetDetails(data);
            } catch (error) {
            console.error('Error fetching pet details:', error);
        }
    };

    fetchUserData();
    fetchPetDetails();
  
    }, [userId, petId]);


    return ( <>
        <div data-bs-theme="petpal">
            <div className="main">                 
            {/* CONTENT STARTS HERE */}

            <main className="d-flex two-col">
            {/* Left Column */}
            <div className="d-flex flex-column m-5 p-5 justify-content-start two-col-form two-col-child">
            <h1 className="fs-0">Adopt Mr. Newdles</h1>
            <form className="ps-0 mt-3 w-100">
            <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
            First Name
            </label>
            <input
            type="text"
            className="form-control"
            id="firstName"
            required=""
            />
            </div>
            <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
            Last Name
            </label>
            <input type="text" className="form-control" id="lastName" required="" />
            </div>
            <div className="mb-3">
            <label htmlFor="address" className="form-label">
            Home Address
            </label>
            <input
            type="address"
            className="form-control"
            id="address"
            aria-describedby="addressHelp"
            required=""
            />
            <div id="addressHelp" className="form-text">
            We'll never share your address with anyone other than the shelter.
            </div>
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">
            Email Address
            </label>
            <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required=""
            />
            <div id="emailHelp" className="form-text">
            We'll never share your email with anyone other than the shelter.
            </div>
            </div>
            <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
            Phone Number
            </label>
            <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            aria-describedby="phoneNumberHelp"
            required=""
            />
            <div id="phoneNumberHelp" className="form-text">
            We'll never share your phone number with anyone other than the
            shelter.
            </div>
            </div>
            <div className="mb-3">
            <label htmlFor="postalCode" className="form-label">
            Postal Code
            </label>
            <input
            type="text"
            className="form-control"
            id="postalCode"
            aria-describedby="postalCodeHelp"
            required=""
            />
            <div id="postalCodeHelp" className="form-text">
            We'll never share your postal code with anyone other than the shelter.
            </div>
            </div>
            <div className="mb-3">
            <label htmlFor="age" className="form-label">
            Are you above 21 years of age?
            </label>
            <div className="form-check">
            <input
            className="form-check-input"
            type="radio"
            name="age"
            id="ageYes"
            />
            <label className="form-check-label" htmlFor="ageYes">
            Yes
            </label>
            </div>
            <div className="form-check">
            <input
            className="form-check-input"
            type="radio"
            name="age"
            id="ageNo"
            />
            <label className="form-check-label" htmlFor="ageNo">
            No
            </label>
            </div>
            </div>
            <div className="mb-3">
            <label htmlFor="insurance" className="form-label">
            Are you currently insured?
            </label>
            <div className="form-check">
            <input
            className="form-check-input"
            type="radio"
            name="insurance"
            id="insuranceYes"
            />
            <label className="form-check-label" htmlFor="insuranceYes">
            Yes
            </label>
            </div>
            <div className="form-check">
            <input
            className="form-check-input"
            type="radio"
            name="insurance"
            id="insuranceNo"
            />
            <label className="form-check-label" htmlFor="insuranceNo">
            No
            </label>
            </div>
            <label htmlFor="insuranceName" className="form-label">
            Name of Insurance
            </label>
            <input type="text" className="form-control mb-2" id="insuranceName" />
            <label htmlFor="payment" className="form-label">
            Method of Payment
            </label>
            <select
            className="form-select form-select-sm font-plain w-auto"
            aria-label="Default select example"
            id="payment"
            required=""
            >
            <option selected="">(required)</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="amex">American Express</option>
            <option value="interac">Interac E-transfer</option>
            <option value="paypal">Paypal</option>
            </select>
            </div>
            <a href="MrNewdles-ipr.html">
            <button
            className="btn btn-lg bg-primary-orange text-primary-cream m-3 ms-0 shadow-sm hide-xl"
            type="button"
            >
            Submit Application
            </button>
            </a>
            </form>
            </div>
            {/* Left Column */}
            {/* Right Column */}
            <div className="d-flex w-40 h-auto m-5 p-3 pb-5 px-5 bg-cream flex-column align-items-center rounded two-col-child">
            {/* Title */}
            <h1 className="fs-0">Compatability Quiz</h1>
            {/* Title */}
            {/* Questions */}
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">I am looking to adopt for</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(required)</option>
            <option value="myself">myself</option>
            <option value="my family">my family</option>
            </select>
            </div>
            </form>
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">I have</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(required)</option>
            <option value="kids">kids</option>
            <option value="no kids">no kids</option>
            </select>
            </div>
            <div className="col-12">
            <p className="mb-0">at home</p>
            </div>
            </form>
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">I am a</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(required)</option>
            <option value="previous">previous</option>
            <option value="first-time">first-time</option>
            </select>
            </div>
            <div className="col-12">
            <p className="mb-0">pet owner</p>
            </div>
            </form>
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">I currently have</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(required)</option>
            <option value="none">no pet(s)</option>
            <option value="cat">cat(s)</option>
            <option value="dog">dog(s)</option>
            <option value="both">dog(s) and cat(s)</option>
            <option value="other">other pet(s)</option>
            </select>
            </div>
            </form>
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">My ideal pet is a(n)</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(no age preference)</option>
            <option value="newborn">newborn</option>
            <option value="young">young</option>
            <option value="adult">adult</option>
            <option value="senior">senior</option>
            </select>
            </div>
            </form>
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">I would like to adopt a</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(no gender preference)</option>
            <option value="female">female</option>
            <option value="male">male</option>
            </select>
            </div>
            </form>
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">I prefer a pet that is</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(no size preference)</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="extra large">extra large</option>
            </select>
            </div>
            </form>
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">My pet's behaviour should be</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(no behaviour preference)</option>
            <option value="very active">very active</option>
            <option value="active">active</option>
            <option value="laid-back">laid-back</option>
            <option value="lap-pet">lap-pet</option>
            </select>
            </div>
            </form>
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">I am</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(required)</option>
            <option value="open">open</option>
            <option value="not open">not open</option>
            </select>
            </div>
            <div className="col-12">
            <p className="mb-0">to adopting a pet with special needs</p>
            </div>
            </form>
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">I live in a(n)</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(required)</option>
            <option value="house">house</option>
            <option value="condominium">condominium</option>
            <option value="apartment">apartment</option>
            <option value="townhouse">townhouse</option>
            <option value="other">other</option>
            </select>
            </div>
            <div className="col-12">
            <p className="mb-0">that is</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(required)</option>
            <option value="own">own</option>
            <option value="rent">rent</option>
            </select>
            </div>
            </form>
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">The pet will be kept</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(required)</option>
            <option value="indoors">indoors</option>
            <option value="outdoors">outdoors</option>
            </select>
            </div>
            </form>
            <form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
            <div className="col-12">
            <p className="mb-0">I have</p>
            </div>
            <div className="col-12">
            <select
            className="form-select form-select-sm font-plain w-auto border border-0"
            aria-label="Default select example"
            >
            <option selected="">(required)</option>
            <option value="none">no</option>
            <option value="fenced">a fenced</option>
            <option value="un-fenced">an un-fenced</option>
            </select>
            </div>
            <div className="col-12">
            <p className="mb-0">yard</p>
            </div>
            </form>
            {/* Questions */}
            <div className="m-5 mb-0 form-floating w-100 h-100">
            <textarea
            className="form-control border border-0 h-100"
            placeholder="Leave additional inquiries here"
            id="additionalInquiries"
            defaultValue={""}
            />
            <label htmlFor="additionalInquiries">Additional Inquiries</label>
            </div>
            </div>
            {/* Right Column */}
            <button
            className="btn btn-lg bg-primary-orange text-primary-cream m-3 shadow-sm show-lg"
            type="button"
            >
            Submit Application
            </button>
            </main>











            </div>
        </div> 
    </> );
}

export default CreateApplication;