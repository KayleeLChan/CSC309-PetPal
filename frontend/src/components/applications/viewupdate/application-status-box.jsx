import React, { useState, useEffect } from 'react';

const StatusBoxComponent = ({ application, userAccountType }) => {

    const [status, setStatus] = useState(application.application_status);
    const accessToken = localStorage.getItem('access_token');

    // Fetch initial application status from backend when the component mount
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:8000/applications/details/${application.id}/`,
    //             {
    //                 headers: { 
    //                     Authorization: `Bearer ${accessToken}`
    //                 } 
    //             });
    //             const data = await response.json();
    //             setStatus(data.application_status || 'PENDING');
    //         } catch (error) {
    //             console.error('Error fetching application data:', error);
    //             setStatus('ERROR');
    //         }
    //     };
    //     // Re-fetch data when application ID changes - if same ID between renders, effect won't run again.
    //     fetchData();
    // }, [application.id]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Ensure application.id is defined before making the request
                if (!application.id) {
                    return;
                }
    
                const response = await fetch(`http://localhost:8000/applications/details/${application.id}/`, {
                    headers: { Authorization: `Bearer ${accessToken}` }
                });
                const data = await response.json();
    
                setStatus(data.application_status || 'PENDING');
            } catch (error) {
                console.error('Error fetching application data:', error);
                setStatus('ERROR');
            }
        };
    
        // Fetch data only if application.id is available
        if (application.id) {
            fetchData();
        }
    }, [application.id, accessToken]);

    // Send a PUT request to backend to update the application status
    const updateStatus = async (newStatus) => {
    try {
        const response = await fetch(`http://localhost:8000/applications/editor/${application.id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}`},
            body: JSON.stringify({ application_status: newStatus }),
        });
        // If response successful, status state is changed
        if (response.ok) {
            setStatus(newStatus);
        } else {
            console.error('Error updating application status:', response.statusText);
        }
        } catch (error) {
            console.error('Error updating application status:', error);
        }
    };

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