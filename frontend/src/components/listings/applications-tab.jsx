import React, { useState, useEffect } from 'react';

const ApplicationsTab = ({ listing }) => {
    const accessToken = localStorage.getItem('access_token');
    const [loading, setLoading] = useState(true);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:8000/applications/?listing_id=${listing.id}`,
                {
                    headers: { Authorization: `Bearer ${accessToken}`, }
                });
                const data = await response.json();
                setApplications(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching applications:', error);
            }
        };

        fetchApplications();
    }, [listing]);

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column py-2 justify-content-center">
                {loading ? (<p className="text-center">Loading...</p>) : (
                    <>
                        {applications.length === 0 ? (<h2 className="m-0 notif-title text-center">No Applications Yet</h2>) : (
                            <>
                                {applications.map((application) => (
                                        <a href={`http://localhost:8000/applications/details/${application.id}`} class="text-center">
                                            <button type="button" class="btn btn-lg btn-primary-cream text-dark-brown bg-none border border-0 mx-3">
                                                <h3 class="m-0 notif-title">{application.pet_seeker_username}</h3>
                                            </button>
                                        </a>
                                    ))}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default ApplicationsTab;