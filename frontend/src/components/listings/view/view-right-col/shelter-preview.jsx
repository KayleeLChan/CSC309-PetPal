import React, { useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';

const ShelterPreview = ({ shelterID }) => {
    const accessToken = localStorage.getItem('access_token');
    const [loading, setLoading] = useState(true);
    const [shelter, setShelter] = useState(null);


    useEffect(() => {
        // Fetch the shelter when the component mounts
        fetchShelter();
    }, []);

    const fetchShelter = async () => {
        try {
            setLoading(true);

            // Make request to backend
            const response = await fetch(`http://localhost:8000/accounts/shelter/${shelterID}/details/`,
                {
                    headers: { Authorization: `Bearer ${accessToken}`, }
                });
            const data = await response.json();
            setShelter(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching listing:', error);
        }
    };

    return (
        <>
            {loading ? (<p className="text-center">Loading...</p>) : (
                <div className="d-flex flex-column pb-2 m-4 text-primary-cream bg-dark-brown rounded-5 position-relative">
                    <Image
                        src={shelter.profilepic}
                        className="position-absolute top-0 start-50 translate-middle rounded-circle"
                        width="30%"
                    />

                    <div className="p-1 pt-5 text-dark-brown bg-primary-orange rounded-top-5 text-center shadow">
                        <h3>{shelter.sheltername}</h3>
                        <h5>{shelter.companyaddress}, {shelter.city}</h5>
                    </div>

                    <div className="m-3">
                        <p>Email: {shelter.email}</p>
                        <p>
                            Phone Number: <br className="show-xxl" />{shelter.phonenumber}
                        </p>
                    </div>

                    <a className="align-self-center w-50 m-3 mt-0" href={`http://localhost:3000/accounts/shelter/${shelterID}/details`}>
                        <Button variant="cream" className="btn btn-lg w-100 shadow-lg" type="button">
                            Learn More
                        </Button>
                    </a>
                </div>
            )}
        </>
    );
};

export default ShelterPreview;
