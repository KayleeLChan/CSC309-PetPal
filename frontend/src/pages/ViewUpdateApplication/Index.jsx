import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import StatusBox from '../../components/applications/application-status-box';
import ChatComponent from '../../components/applications/application-comments-box';
import ApplicationSheetComponent from '../../components/applications/application-details';
import PetDetailsComponent from '../../components/applications/application-pet-details';

function Application() {
    const { id } = useParams();
    const [application, setApplication] = useState({});
    const [userAccountType, setUserAccountType] = useState({});  // Set the actual user account type
    const [userName, setUserName] = useState({}); // Set the actual user information
    const [userImage, setUserImage] = useState({}); // Set the actual user image

    // Fetch application data based on the ID
    useEffect(() => {
        const fetchApplicationData = async () => {
        try {
            const response = await fetch(`/applications/${id}/`);
            const data = await response.json();
            setApplication(data);
        } catch (error) {
            console.error('Error fetching application data:', error);
        }
    };

    // Fetch user account type data based on the associated user in the Application model
    const fetchUserAccount = async () => {
        try {
            // Access the associated user from the Application model
            const userId = application.pet_seeker_user;
            if (userId) {
                // Fetch user details from Django backend
                const userResponse = await fetch(`/profile/`);
                const userData = await userResponse.json();
                setUserAccountType(userData.accounttype);
            }
        } catch (error) {
            console.error('Error fetching user account type:', error);
        }
    };

    // Retrieve User Name
    const fetchUserName = async () => {
        try {
            // Access the associated user from the Application model
            const userId = application.pet_seeker_user;
            if (userId) {
                // Fetch user details from Django backend
                const userResponse = await fetch(`/profile/`);
                const userData = await userResponse.json();
                setUserName(userData.first_name);
            }
        } catch (error) {
            console.error('Error fetching user name:', error);
        }
    };

    // Retrieve User Profile Picture
    const fetchUserImage = async () => {
        try {
            // Access the associated user from the Application model
            const userId = application.pet_seeker_user;
            if (userId) {
                // Fetch user details from Django backend
                const userResponse = await fetch(`/profile/`);
                const userData = await userResponse.json();
                setUserImage(userData.profilepic);
            }
        } catch (error) {
            console.error('Error fetching user profile picture:', error);
        }
    };

    // Call all data-fetching functions
    fetchApplicationData();
    fetchUserAccount();
    fetchUserName();
    fetchUserImage();
    }, [id, application, userAccountType, userName, userImage]);   // Re-fetch data when the ID changes

    return ( <>
        <div data-bs-theme="petpal">
            <div className="main">                 
            {/* CONTENT STARTS HERE */}

                {/* Left Column Start */}
                <div className="d-flex flex-column w-50 m-5 bg-cream flex-column align-items-center two-col-child">

                    <PetDetailsComponent>application={id}</PetDetailsComponent>
                    <ApplicationSheetComponent>application={id}</ApplicationSheetComponent>
                
                </div>
                {/* Left Column End */}


                {/* Right Column Start */}
                <div className="d-flex flex-column m-5 p-5 justify-content-start align-items-center w-40 text-primary-brown two-col-child">
                
                    <StatusBox>application={id} userAccountType={userAccountType}</StatusBox>
                    <ChatComponent>userName={userName} userImage={userImage} </ChatComponent>

                    {/* All Comments inside the Chat Component go here */}
                
                </div>
                {/* Right Column End */}

            </div>
        </div> 
    </> );
}

export default Application;