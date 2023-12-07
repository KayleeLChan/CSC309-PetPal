import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
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
    // const [userImage, setUserImage] = useState({});

    // Fetch application data and user details based on the ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch application data
                const applicationResponse = await fetch(`http://localhost:8000/applications/details/${id}/`,
                {
                    headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMTMxNDA0LCJpYXQiOjE3MDE5MjE4MDQsImp0aSI6IjdmOTQ4YmZmODFiMjQzYmFiNjhiM2M4NGVmN2FlZThmIiwidXNlcl9pZCI6MX0.4eFhRDwAJWRC_uSC8gyYapbxx2s12-il08jacj7pBcI", }
                });
                const applicationData = await applicationResponse.json();
                console.log('data', applicationData);
                setApplication(applicationData);
    
                // Fetch user details if application data is available
                if (applicationData.pet_seeker_user) {
                    const userId = applicationData.pet_seeker_user;
    
                    // Fetch user details from Django backend
                    const userResponse = await fetch(`http://localhost:8000/accounts/${userId}/profile/`,
                    {
                        headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMTMxNDA0LCJpYXQiOjE3MDE5MjE4MDQsImp0aSI6IjdmOTQ4YmZmODFiMjQzYmFiNjhiM2M4NGVmN2FlZThmIiwidXNlcl9pZCI6MX0.4eFhRDwAJWRC_uSC8gyYapbxx2s12-il08jacj7pBcI", }
                    });
                    const userData = await userResponse.json();
    
                    // Set user details
                    setUserAccountType(userData.accounttype);
                    // console.log('user data', userData);
                    // console.log('account type', userData.accounttype);
    
                    setUserName(userData.first_name);
                    setUser(userData);
                    
                    // console.log('user', user);
                    // setUserImage(userData.profilepic);
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