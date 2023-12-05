import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import StatusBoxComponent from '../../components/applications/application-status-box';
import ChatComponent from '../../components/applications/application-comments-box';
import ApplicationSheetComponent from '../../components/applications/application-details';
import PetDetailsComponent from '../../components/applications/application-pet-details';

function ApplicationDetails() {
    const { id } = useParams();
    const [application, setApplication] = useState({});
    const [userAccountType, setUserAccountType] = useState({});
    const [userName, setUserName] = useState({});
    const [userImage, setUserImage] = useState({});
    console.log({id})

    // Fetch application data and user details based on the ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch application data
                const applicationResponse = await fetch(`applications/details/${id}/`);
                const applicationData = await applicationResponse.json();
                console.log(applicationData)
                setApplication(applicationData);

                // Fetch user details if application data is available
                if (applicationData.pet_seeker_user) {
                    const userId = applicationData.pet_seeker_user;

                    // Fetch user details from Django backend
                    const userResponse = await fetch(`accounts/${userId}/profile/`);
                    const userData = await userResponse.json();

                    // Set user details
                    setUserAccountType(userData.accounttype);
                    setUserName(userData.first_name);
                    setUserImage(userData.profilepic);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);


    return ( <>
        <div data-bs-theme="petpal">
            <div className="main">                 
            {/* CONTENT STARTS HERE */}

                {/* Left Column Start */}
                <div className="d-flex flex-column w-50 m-5 bg-cream flex-column align-items-center two-col-child">

                    <PetDetailsComponent>application={application}</PetDetailsComponent>
                    <ApplicationSheetComponent>application={application} </ApplicationSheetComponent>
                
                </div>
                {/* Left Column End */}


                {/* Right Column Start */}
                <div className="d-flex flex-column m-5 p-5 justify-content-start align-items-center w-40 text-primary-brown two-col-child">
                
                    <StatusBoxComponent>application={application} userAccountType={userAccountType}</StatusBoxComponent>
                    <ChatComponent>userName={userName} userImage={userImage} </ChatComponent>

                    {/* All Comments inside the Chat Component go here */}
                
                </div>
                {/* Right Column End */}

            </div>
        </div> 
    </> );
}

export default ApplicationDetails;