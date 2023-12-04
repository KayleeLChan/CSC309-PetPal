import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import StatusBox from './StatusBox';


function Application() {
    // when doing get request to application, pass in name 
    const { id } = useParams();
    const [application, setApplication] = useState({});
    const [userAccountType, setUserAccountType] = useState('');  // Set the actual user account type

    useEffect(() => {
        // Fetch application data based on the ID
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
    const fetchUserAccountType = async () => {
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

    // Call both data-fetching functions
    fetchApplicationData();
    fetchUserAccountType();

    // Re-fetch data when the ID changes
    }, [id]); 

    return ( <>
        <div data-bs-theme="petpal">
            <div className="main">                 
            {/* CONTENT STARTS HERE */}

                {/* Left Column Start */}
                <div className="d-flex flex-column w-50 m-5 bg-cream flex-column align-items-center two-col-child">

                    <applicationSheet></applicationSheet>
                
                </div>
                {/* Left Column End */}


                {/* Right Column Start */}
                <div className="d-flex flex-column m-5 p-5 justify-content-start align-items-center w-40 text-primary-brown two-col-child">
                
                    <StatusBox>application={id} userAccountType={userAccountType}</StatusBox>
                    <MessageBox></MessageBox>
                
                </div>
                {/* RIght Column End */}



            </div>
        </div> 
    </> );
}

export default Application;