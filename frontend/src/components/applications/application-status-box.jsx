import React, { useState, useEffect } from 'react';

// Pass in user account type (?)
const StatusBox = ({ application, userAccountType }) => {
    // Keep track of application status
    const [status, setStatus] = useState(application.application_status);

    // Send a PATCH request to backend to update the application status
    const updateStatus = async (newStatus) => {
    try {
        const response = await fetch(`/applications/${application.id}/`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
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
    // Fetch the status from the Django backend
        const fetchData = async () => {
            try {
                const response = await fetch(`/applications/${application.id}/`);
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
                className="text-center btn btn-primary btn-danger btn-lg"
                onClick={() => updateStatus('withdrawn')}>
                Withdraw
            </button>
            )}

        </div>
    );
    
};

export default StatusBox;