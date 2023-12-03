import React, { useState, useEffect } from 'react';

const ApplicationsTab = ({ listing }) => {
    const [loading, setLoading] = useState(true);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:8000/applications/?listing_id=${listing.id}`,
                {
                    headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNzk0OTgxLCJpYXQiOjE3MDE1ODUzODEsImp0aSI6Ijg2NTgzN2I0NjNkMzQ5MWM5M2FmMTBlZmI2ODAzN2NjIiwidXNlcl9pZCI6MX0.PPHuhQqkpaGuF7wv2FEqbY9B8dVd5izi6n0KBfFs3wQ", }
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