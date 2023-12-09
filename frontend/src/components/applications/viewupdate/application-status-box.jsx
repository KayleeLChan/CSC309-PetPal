import React, { useState, useEffect } from 'react';

const StatusBoxComponent = ({ application, userAccountType }) => {

    console.log('app.', application);
    console.log('account', userAccountType)
    const [status, setStatus] = useState(application.application_status);

    // Send a PUT request to backend to update the application status
    const updateStatus = async (newStatus) => {
    try {
        const response = await fetch(`http://localhost:8000/applications/editor/${application.id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMTMxNDA0LCJpYXQiOjE3MDE5MjE4MDQsImp0aSI6IjdmOTQ4YmZmODFiMjQzYmFiNjhiM2M4NGVmN2FlZThmIiwidXNlcl9pZCI6MX0.4eFhRDwAJWRC_uSC8gyYapbxx2s12-il08jacj7pBcI"
        },
            body: JSON.stringify({ application_status: newStatus }),
        });
        // If response successful, status state is changed
        if (response.ok) {
            setStatus(newStatus);
            console.log('Application status updated successfully.');
        } else {
            console.error('Error updating application status:', response.statusText);
        }
        } catch (error) {
            console.error('Error updating application status:', error);
        }
    };

    // Fetch initial application status from backend when the component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/applications/details/${application.id}/`,
                {
                    headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMTMxNDA0LCJpYXQiOjE3MDE5MjE4MDQsImp0aSI6IjdmOTQ4YmZmODFiMjQzYmFiNjhiM2M4NGVmN2FlZThmIiwidXNlcl9pZCI6MX0.4eFhRDwAJWRC_uSC8gyYapbxx2s12-il08jacj7pBcI", }
                });
                const data = await response.json();
                setStatus(data.application_status || 'PENDING');
            } catch (error) {
                console.error('Error fetching application data:', error);
                setStatus('ERROR');
            }
        };
        // Re-fetch data when application ID changes - if same ID between renders, effect won't run again.
        fetchData();
    }, [application.id]); 

    // Display certain buttons based on who the user is 
    return (
        <div className="d-flex flex-column w-75 mb-5 p-4 text-dark-brown bg-white align-items-center rounded-5">

            <h2 className="text-center responsive_heading text-decoration-underline text-primary-orange mb-4">Application Status</h2>

            {userAccountType === 'petshelter' && status === 'pending' && ( 
            <>
            <button 
                type="button"
                className="text-center btn btn-primary btn-success btn-lg mb-3"
                onClick={() => updateStatus('accepted')}>
                Accept
            </button>

            <button
                type="button"
                className="text-center btn btn-primary btn-danger btn-lg"
                onClick={() => updateStatus('denied')}>
                Reject
            </button>
            </> 
            )}

            {userAccountType === 'petseeker' && ['pending', 'accepted'].includes(status) && (
            <button
                type="button"
                className="text-center btn btn-secondary btn-danger btn-lg"
                onClick={() => updateStatus('withdrawn')}>
                Withdraw
            </button>
            )}

        {/* display status once updated */}
        <h2 className="mt-3">{status}</h2>
        </div>
    );
};

export default StatusBoxComponent;