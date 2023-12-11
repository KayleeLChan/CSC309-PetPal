import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom/';
import StatusBoxComponent from '../../components/applications/viewupdate/application-status-box';
import ChatComponent from '../../components/applications/viewupdate/application-comments-box';
import ApplicationSheetComponent from '../../components/applications/viewupdate/application-details';
import PetDetailsComponent from '../../components/applications/viewupdate/application-pet-details';
import Error403Component from '../../components/403';

function ApplicationDetails() {
    const { id } = useParams();
    const [application, setApplication] = useState({});
    const [denied, setDenied] = useState(false);
    const [user, setUser] = useState({});
    const accessToken = localStorage.getItem('access_token');
    const FORBIDDEN_STATUS_CODE = 403;
    const navigate = useNavigate();

    const handleClick = (event) =>
        navigate(`/applications/${id}/chat`)

    // Fetch application data and user details based on the ID
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch application data
                const applicationResponse = await fetch(`http://localhost:8000/applications/details/${id}/`,
                    {
                        headers: { Authorization: `Bearer ${accessToken}`, }
                    });

                const applicationData = await applicationResponse.json();


                if (applicationResponse.status === FORBIDDEN_STATUS_CODE) {
                    setDenied(true);
                }

                setApplication(applicationData);

                // // Fetch user details if application data is available
                // if (applicationData.pet_seeker_user) {
                //     console.log("this is happening");
                //     const userId = applicationData.pet_seeker_user;

                //     // Fetch user details from Django backend
                //     const userResponse = await fetch(`http://localhost:8000/accounts/${userId}/profile/`,
                //     {
                //         headers: { Authorization: `Bearer ${accessToken}`, }
                //     });
                //     const userData = await userResponse.json();

                //     if (userResponse.status === FORBIDDEN_STATUS_CODE) {
                //         navigate("/unauthorized");
                //     }

                //     // Set user details
                //     setUserAccountType(userData.accounttype);
                //     setUserName(userData.first_name);
                //     setUser(userData);

                // }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    if (denied) {
        return (
            <div data-bs-theme="petpal">
                <Error403Component></Error403Component>
            </div>


        )
    }


    return (
        <div data-bs-theme="petpal">
            <div className="main d-flex flex-row">
                {/* CONTENT STARTS HERE */}

                {/* Left Column Start */}
                <div className="d-flex flex-column w-50 m-5 bg-cream flex-column align-items-center two-col-child">

                    <PetDetailsComponent application={application} />
                    <ApplicationSheetComponent application={application} />

                </div>
                {/* Left Column End */}


                {/* Right Column Start */}
                <div className="d-flex flex-column m-5 p-5 justify-content-start align-items-center w-40 text-primary-brown two-col-child">
                    <StatusBoxComponent application={application} />

                    {/* <ChatComponent user={user}/> */}
                    {/* All Comments inside the Chat Component go here */}
                    <button type="button" className="btn btn-lg text-dark-brown bg-primary-orange m-3 ms-0 shadow-sm" onClick={handleClick}>Your Application Chat!</button>

                </div>
                {/* Right Column End */}

            </div>
        </div>
    );
}

export default ApplicationDetails;