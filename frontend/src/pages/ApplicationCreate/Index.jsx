import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import UserInfoComponent from '../../components/applications/create/application-user-info';
import CompatibilityQuizComponent from '../../components/applications/create/application-compatibility-quiz';

function CreateApplication() {
    const { userId, petId } = useParams();
    const [userInfo, setUserInfo] = useState({});
    const [petName, setPetName] = useState({});
    const [petInfo, setPetInfo] = useState({});

    const [userInfoFormData, setUserInfoFormData] = useState({});
    const [compatibilityFormData, setCompatibilityFormData] = useState({});

    const handleUserInfoSubmit = (formData) => {
        setUserInfoFormData(formData);
    };

    const handleFormSubmit = (formData) => {
        setCompatibilityFormData(formData);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`accounts/${userId}/profile/`);
                const userData = await response.json();
                setUserInfo(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const fetchPetDetails = async () => {
            try {
                const response = await fetch(`/listings/${petId}`);
                const petData = await response.json();
                setPetInfo(petData);
                setPetName(petData.name); 
            } catch (error) {
                console.error('Error fetching pet details:', error);
            }
        };
        fetchUserData();
        fetchPetDetails();
    }, [userId, petId]);

    // Create instance of application model upon submit button click
    // Updated handleSubmit function
    const handleSubmit = async () => {

        // use the fields in the forms to create instance of application
        const applicationData = {
            application_status: "pending",
            pet_listing: petInfo.id,
            applicant_first_name: userInfoFormData.firstName,
            applicant_last_name: userInfoFormData.lastName,
            applicant_email: userInfoFormData.email,
            applicant_phone_number: userInfoFormData.phoneNumber,
            address: userInfoFormData.address,
            postal_code: userInfoFormData.postalCode,
            above_twentyone: userInfoFormData.aboveTwentyOne === 'Yes',
            adopting_for: compatibilityFormData.adoptingFor,
            children: compatibilityFormData.children,
            pet_owner_history: compatibilityFormData.petOwnerHistory,
            current_pets: compatibilityFormData.currentPets,
            ideal_pet_age: compatibilityFormData.preferredAge,
            ideal_pet_sex: compatibilityFormData.preferredSex,
            ideal_pet_size: compatibilityFormData.preferredSize,
            ideal_pet_behaviour: compatibilityFormData.preferredPersonality,
            currently_insured: userInfoFormData.currentlyInsured === 'Yes',
            insurance_name: userInfoFormData.insuranceName,
        };
        
        // POST request to create new application
        try {
            const response = await fetch('applications/new/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData),
            });
    
            if (response.ok) {
                const responseData = await response.json();
                const newApplicationId = responseData.id;
                // Application submitted successfully with ID
                console.log(`Application submitted successfully with ID: ${newApplicationId}`);
            } else {
                console.error('Failed to submit application');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">
                    {/* CONTENT STARTS HERE */}
                    <main className="d-flex two-col">
                        <div className="d-flex flex-column m-5 p-5 justify-content-start two-col-form two-col-child">
                            {/* Left Column */}
                                <h1 className="fs-0">Adopt {petName}</h1>
                                <UserInfoComponent user_id={userId} onSubmit={handleUserInfoSubmit} />
                            {/* Left Column */}

                            {/* Right Column */}
                            <div className="d-flex w-40 h-auto m-5 p-3 pb-5 px-5 bg-cream flex-column align-items-center rounded two-col-child">
                                <h1 className="fs-0">Compatability Quiz</h1>
                                <CompatibilityQuizComponent user_id={userId} onSubmit={handleFormSubmit} />
                            {/* Right Column */}

                            {/* Submit */}
                            <button
                                className="btn btn-lg bg-primary-orange text-primary-cream m-3 shadow-sm show-lg"
                                type="button"
                                onClick={handleSubmit} // Add the onClick handler
                            >Submit Application
                            </button>
                            {/* Submit */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default CreateApplication;
