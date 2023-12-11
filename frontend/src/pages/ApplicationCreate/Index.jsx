import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom/';
import Error403Component from '../../components/403';

// import UserInfoComponent from '../../components/applications/create/application-user-info';
// import CompatibilityQuizComponent from '../../components/applications/create/application-compatibility-quiz';

function CreateApplication() {
    const { petId } = useParams();
    const [userInfo, setUserInfo] = useState('');
    const [petName, setPetName] = useState('');
    const [petInfo, setPetInfo] = useState('');
    const accessToken = localStorage.getItem('access_token');
    const userId = localStorage.getItem('user_id');
    const accountType = localStorage.getItem('accounttype');
    const [denied, setDenied] = useState(false);

    const FORBIDDEN_STATUS_CODE = 403;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        postalCode: '',
        address: '',
        aboveTwentyOne: '',
        adoptingFor: '',
        children: '',
        pet_owner_history: '',
        currentPets: '',
        idealPetAge: '',
        idealPetSex: '',
        idealPetSize: '',
        preferredPersonality: '',
        currentlyInsured: '',
        insuranceName: '',
    });


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/accounts/${userId}/profile/`,
                    {
                        headers: { Authorization: `Bearer ${accessToken}`, }
                    });
                const userData = await response.json();

                if (response.status === FORBIDDEN_STATUS_CODE) {
                    setDenied(true);
                }

                setUserInfo(userData);


                setFormData({
                    firstName: userData.first_name || '',
                    lastName: userData.last_name || '',
                    email: userData.email || '',
                    phoneNumber: userData.phonenumber || '',
                    // ideal_pet_age: userData.pref_age || '',
                    // ideal_pet_sex: userData.pref_sex || '',
                    // ideal_pet_size: userData.pref_size || '',
                    // ideal_pet_behaviour: userData.pref_personality || ''
                });

            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const fetchPetDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/listings/${petId}`,
                    {
                        headers: { Authorization: `Bearer ${accessToken}`, }
                    });

                if (response.status === FORBIDDEN_STATUS_CODE) {
                    setDenied(true);
                }

                const petData = await response.json();
                setPetInfo(petData);
                setPetName(petData.name);

            } catch (error) {
                console.error('Error fetching pet details:', error);
            }
        };
        fetchUserData();
        fetchPetDetails();
    }, [petId, petName]);


    // Create instance of application model upon submit button click
    const handleSubmit = async () => {


        const applicationData = {
            application_status: "pending",
            pet_listing: petId,
            applicant_first_name: formData.firstName,
            applicant_last_name: formData.lastName,
            applicant_email: formData.email,
            applicant_phone_number: formData.phoneNumber,
            address: formData.address,
            postal_code: formData.postalCode,
            above_twentyone: formData.aboveTwentyOne,
            adopting_for: formData.adoptingFor,
            children: formData.children,
            pet_owner_history: formData.petOwnerHistory,
            current_pets: formData.currentPets,
            ideal_pet_age: formData.preferredAge,
            ideal_pet_sex: formData.preferredSex,
            ideal_pet_size: formData.preferredSize,
            ideal_pet_behaviour: formData.preferredPersonality,
            currently_insured: formData.currentlyInsured,
            insurance_name: formData.insuranceName,
        };

        try {
            const response = await fetch(`http://localhost:8000/applications/new/${petId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(applicationData),
            });
            if (response.ok) {
                const responseData = await response.json();
                const newApplicationId = responseData.id;
                navigate("/applications");
            } else {
                const responseData = await response.json();
                console.error('Failed to submit application:', responseData);
                navigate("/applications");
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    const handleAgeChange = (e) => {
        setFormData((prevData) => ({ ...prevData, aboveTwentyOne: e.target.value }));
    };

    const handleInsuranceChange = (e) => {
        setFormData((prevData) => ({ ...prevData, currentlyInsured: e.target.value }));
    };

    if (denied) {
        return (
            <div data-bs-theme="petpal">
                <Error403Component></Error403Component>
            </div>
        )
    }

    return (
        <div data-bs-theme="petpal">
            <div className="main">
                {/* CONTENT STARTS HERE */}
                <div className="d-flex two-col">
                    <div className="d-flex flex-column m-5 p-5 justify-content-start two-col-form two-col-child">
                        {/* Left Column */}
                        <h1 className="fs-0">Adopt {petName}</h1>

                        <Form className="ps-0 mt-3 w-100">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label"> First Name </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required
                                />
                            </div>


                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label"> Last Name </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="form-label"> Home Address </label>
                                <input
                                    type="address"
                                    className="form-control"
                                    id="address"
                                    aria-describedby="addressHelp"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })} required
                                />
                                <div id="addressHelp" className="form-text"> We'll never share your address with anyone other than the shelter. </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="postalCode" className="form-label"> Postal Code </label>
                                <input
                                    type="address"
                                    className="form-control"
                                    id="postalCode"
                                    aria-describedby="postalCodeHelp"
                                    value={formData.postalCode}
                                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })} required
                                />
                                <div id="postalCodeHelp" className="form-text"> We'll never share your postal code with anyone other than the shelter. </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label"> Email Address </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} required
                                />
                                <div id="emailHelp" className="form-text"> We'll never share your email with anyone other than the shelter. </div>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label"> Phone Number </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phoneNumber"
                                    aria-describedby="phoneNumberHelp"
                                    value={formData.phoneNumber}
                                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} required
                                />
                                <div id="phoneNumberHelp" className="form-text"> We'll never share your phone number with anyone other than the shelter.</div>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="age" className="form-label"> Are you above 21 years of age? </label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="age"
                                        id="ageYes"
                                        value='true'
                                        checked={formData.aboveTwentyOne === 'true'}
                                        onChange={(e) => handleAgeChange(e, 'aboveTwentyOne')}
                                    />
                                    <label className="form-check-label" htmlFor="ageYes"> Yes </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="age"
                                        id="ageNo"
                                        value='false'
                                        checked={formData.aboveTwentyOne === 'false'}
                                        onChange={(e) => handleAgeChange(e, 'aboveTwentyOne')}
                                    />
                                    <label className="form-check-label" htmlFor="ageNo"> No </label>
                                </div>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="insurance" className="form-label">Are you currently insured?</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="insurance"
                                        id="insuranceYes"
                                        value='true'
                                        checked={formData.currentlyInsured === 'true'}
                                        onChange={(e) => handleInsuranceChange(e, 'currentlyInsured')}
                                    />
                                    <label className="form-check-label" htmlFor="insuranceYes">Yes</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="insurance"
                                        id="insuranceNo"
                                        value='false'
                                        checked={formData.currentlyInsured === 'false'}
                                        onChange={(e) => handleInsuranceChange(e, 'currentlyInsured')}
                                    />
                                    <label className="form-check-label" htmlFor="insuranceNo">No</label>
                                </div>


                                <label htmlFor="insuranceName" className="form-label">Name of Insurance</label>
                                <select
                                    className="form-select form-select-sm font-plain w-auto"
                                    aria-label="Default select example"
                                    id="payment"
                                    value={formData.insuranceName}
                                    onChange={(e) => setFormData({ ...formData, insuranceName: e.target.value })} required
                                >
                                    <option value="">(required)</option>
                                    <option value="visa">Visa</option>
                                    <option value="master">Mastercard</option>
                                    <option value="amex">American Express</option>
                                    <option value="interac">Interac E-transfer</option>
                                    <option value="paypal">Paypal</option>
                                </select>
                            </div>
                        </Form>

                        {/* Submit */}
                        <Button
                            className="btn btn-lg m-3 shadow-sm"
                            variant="primary-orange"
                            onClick={handleSubmit}
                        >Submit Application
                        </Button>
                        {/* Submit */}

                    </div>
                    {/* Left Column */}


                    {/* Right Column */}
                    <div className="d-flex w-40 h-auto m-5 p-3 pb-5 px-5 bg-cream flex-column align-items-center rounded two-col-child">
                        <h1 className="fs-0">Compatibility Quiz</h1>

                        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
                            <div className="col-12">
                                <p className="mb-0">I am looking to adopt for</p>
                            </div>
                            <div className="col-12">
                                <select
                                    className="form-select form-select-sm font-plain w-auto border border-0"
                                    aria-label="Default select example"
                                    value={formData.adoptingFor}
                                    onChange={(e) => setFormData({ ...formData, adoptingFor: e.target.value })} required
                                >
                                    <option value="">(required)</option>
                                    <option value="myself">myself</option>
                                    <option value="family">my family</option>
                                </select>
                            </div>
                        </Form>


                        {/* I have ___ at home */}
                        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
                            <div className="col-12">
                                <p className="mb-0">I have</p>
                            </div>
                            <div className="col-12">
                                <select
                                    className="form-select form-select-sm font-plain w-auto border border-0"
                                    aria-label="Default select example"
                                    value={formData.children}
                                    onChange={(e) => setFormData({ ...formData, children: e.target.value })} required
                                >
                                    <option value="">(required)</option>
                                    <option value="kids">kids</option>
                                    <option value="none">no kids</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <p className="mb-0">at home</p>
                            </div>
                        </Form>


                        {/* I am a ___ pet owner */}
                        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
                            <div className="col-12">
                                <p className="mb-0">I am a</p>
                            </div>
                            <div className="col-12">
                                <select
                                    className="form-select form-select-sm font-plain w-auto border border-0"
                                    aria-label="Default select example"
                                    value={formData.petOwnerHistory}
                                    onChange={(e) => setFormData({ ...formData, petOwnerHistory: e.target.value })} required
                                >
                                    <option value="">(required)</option>
                                    <option value="previous">previous</option>
                                    <option value="first">first-time</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <p className="mb-0">pet owner</p>
                            </div>
                        </Form>

                        {/* I currently have ___  */}
                        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
                            <div className="col-12">
                                <p className="mb-0">I currently have</p>
                            </div>
                            <div className="col-12">
                                <select
                                    className="form-select form-select-sm font-plain w-auto border border-0"
                                    aria-label="Default select example"
                                    value={formData.currentPets}
                                    onChange={(e) => setFormData({ ...formData, currentPets: e.target.value })} required
                                >
                                    <option value="">(required)</option>
                                    <option value="none">no pet(s)</option>
                                    <option value="cat">cat(s)</option>
                                    <option value="dog">dog(s)</option>
                                    <option value="both">dog(s) and cat(s)</option>
                                    <option value="other">other pet(s)</option>
                                </select>
                            </div>
                        </Form>


                        {/* My ideal pet is (Preferred Age) */}
                        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
                            <div className="col-12">
                                <p className="mb-0">My ideal pet is a(n)</p>
                            </div>
                            <div className="col-12">
                                <select
                                    className="form-select form-select-sm font-plain w-auto border border-0"
                                    aria-label="Default select example"
                                    value={formData.preferredAge}
                                    onChange={(e) => setFormData({ ...formData, preferredAge: e.target.value })} required
                                >
                                    <option value="">(required)</option>
                                    <option value="new">newborn</option>
                                    <option value="young">young</option>
                                    <option value="adult">adult</option>
                                    <option value="senior">senior</option>
                                </select>
                            </div>
                        </Form>

                        {/* I would like to adopt a (Preferred Animal)
                            <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
                            <div className="col-12">
                                <p className="mb-0">I would like to adopt a</p>
                            </div>
                            <div className="col-12">
                                <select
                                    className="form-select form-select-sm font-plain w-auto border border-0"
                                    aria-label="Default select example"
                                    value={formData.preferedAnimal}
                                    onChange={(e) => setFormData({ ...formData, preferedAnimal: e.target.value })} required
                                    >
                                    <option value="">(no gender preference)</option>
                                    <option value="F">female</option>
                                    <option value="M">male</option>
                                </select>
                            </div>
                            </Form> */}

                        {/* I prefer a pet that is (Preferred Size) */}
                        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
                            <div className="col-12">
                                <p className="mb-0">I prefer a pet that is</p>
                            </div>
                            <div className="col-12">
                                <select
                                    className="form-select form-select-sm font-plain w-auto border border-0"
                                    aria-label="Default select example"
                                    value={formData.preferredSize}
                                    onChange={(e) => setFormData({ ...formData, preferredSize: e.target.value })} required
                                >
                                    <option value="">(no size preference)</option>
                                    <option value="S">small</option>
                                    <option value="M">medium</option>
                                    <option value="L">large</option>
                                    <option value="XL">extra large</option>
                                </select>
                            </div>
                        </Form>


                        {/* I prefer a pet that is (Preferred Personality) */}
                        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
                            <div className="col-12">
                                <p className="mb-0">My pet's behaviour should be</p>
                            </div>
                            <div className="col-12">
                                <select
                                    className="form-select form-select-sm font-plain w-auto border border-0"
                                    aria-label="Default select example"
                                    value={formData.preferredPersonality}
                                    onChange={(e) => setFormData({ ...formData, preferredPersonality: e.target.value })} required
                                >
                                    <option value="">(no behaviour preference)</option>
                                    <option value="very active">very active</option>
                                    <option value="active">active</option>
                                    <option value="laid-back">laid-back</option>
                                    <option value="lap">lap-pet</option>
                                </select>
                            </div>
                        </Form>

                        {/* I prefer my pet to be (Preferred Sex) */}
                        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
                            <div className="col-12">
                                <p className="mb-0">I prefer my pet to be </p>
                            </div>
                            <div className="col-12">
                                <select
                                    className="form-select form-select-sm font-plain w-auto border border-0"
                                    aria-label="Default select example"
                                    value={formData.preferredSex}
                                    onChange={(e) => setFormData({ ...formData, preferredSex: e.target.value })} required
                                >
                                    <option value="">(no behaviour preference)</option>
                                    <option value="M">male</option>
                                    <option value="F">female</option>
                                </select>
                            </div>
                        </Form>
                        {/* Right Column */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateApplication;