import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import UserInfoComponent from '../../components/applications/application-user-info';
import CompatibilityQuizComponent from '../../components/applications/compatibility-quiz';

function CreateApplication() {
    const { userId, petId } = useParams();
    const [userInfo, setUserInfo] = useState({});
    const [petName, setPetName] = useState({});

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${userId}/profile/`);
                const data = await response.json();
                setUserInfo(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const fetchPetDetails = async () => {
            try {
                const response = await fetch(`/listings/${petId}`);
                const data = await response.json();
                setPetName(data.name); 
            } catch (error) {
                console.error('Error fetching pet details:', error);
            }
        };

        fetchUserData();
        fetchPetDetails();
    }, [userId, petId]);

    // Create instance of application model upon submit button click
    const handleSubmit = async () => {
        const applicationData = {
            // Include data for the application model as needed
            userId,
            petId,
            userInfo,
            petName,
            // Add more data as needed
        };
        try {
            const response = await fetch('/new/<int:pk>/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData),
            });
    
            if (response.ok) {
                // Extract the ID from the server's response
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
                            <h1 className="fs-0">Adopt {petName}</h1>
                            {/* Left Column */}
                            <UserInfoComponent user_id={userId} />
                            {/* Left Column */}

                            {/* Right Column */}
                            <CompatibilityQuizComponent user_id={userId} />
                            {/* Right Column */}

                            <button
                                className="btn btn-lg bg-primary-orange text-primary-cream m-3 shadow-sm show-lg"
                                type="button"
                                onClick={handleSubmit} // Add the onClick handler
                            >
                                Submit Application
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default CreateApplication;
