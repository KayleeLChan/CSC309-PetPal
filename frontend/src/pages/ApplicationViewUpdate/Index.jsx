import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom/';
import StatusBoxComponent from '../../components/applications/viewupdate/application-status-box';
import ChatComponent from '../../components/applications/viewupdate/application-comments-box';
import ApplicationSheetComponent from '../../components/applications/viewupdate/application-details';
import PetDetailsComponent from '../../components/applications/viewupdate/application-pet-details';

function ApplicationDetails() {
    const { id } = useParams();
    const [application, setApplication] = useState({});
    const [userAccountType, setUserAccountType] = useState({});
    const [userName, setUserName] = useState({});
    const [user, setUser] = useState({});
    const accessToken = localStorage.getItem('access_token');
    const FORBIDDEN_STATUS_CODE = 403;
    const navigate = useNavigate();

    // Fetch application data and user details based on the ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch application data
                console.log(id)
                const applicationResponse = await fetch(`http://localhost:8000/applications/details/${id}/`,
                {
                    headers: { Authorization: `Bearer ${accessToken}`, }
                });

                const applicationData = await applicationResponse.json();

                if (applicationResponse.status === FORBIDDEN_STATUS_CODE) {
                    navigate("/unauthorized");
                }

                console.log('data', applicationData);
                setApplication(applicationData);
    
                // Fetch user details if application data is available
                if (applicationData.pet_seeker_user) {
                    const userId = applicationData.pet_seeker_user;
    
                    // Fetch user details from Django backend
                    const userResponse = await fetch(`http://localhost:8000/accounts/${userId}/profile/`,
                    {
                        headers: { Authorization: `Bearer ${accessToken}`, }
                    });
                    const userData = await userResponse.json();

                    if (userResponse.status === FORBIDDEN_STATUS_CODE) {
                        navigate("/unauthorized");
                    }
    
                    // Set user details
                    setUserAccountType(userData.accounttype);
                    setUserName(userData.first_name);
                    setUser(userData);
                    
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);



    return ( 
        <div data-bs-theme="petpal">
            <div className="main d-flex flex-row">                 
            {/* CONTENT STARTS HERE */}

                {/* Left Column Start */}
                <div className="d-flex flex-column w-50 m-5 bg-cream flex-column align-items-center two-col-child">

                    <PetDetailsComponent application={application}/>
                    <ApplicationSheetComponent application={application}/>
                
                </div>
                {/* Left Column End */}


                {/* Right Column Start */}
                <div className="d-flex flex-column m-5 p-5 justify-content-start align-items-center w-40 text-primary-brown two-col-child">
                    <StatusBoxComponent application={application} userAccountType={userAccountType}/>
                    <ChatComponent user={user}/>
                    {/* All Comments inside the Chat Component go here */}
                
                </div>
                {/* Right Column End */}

            </div>
        </div> 
    );
}

export default ApplicationDetails;