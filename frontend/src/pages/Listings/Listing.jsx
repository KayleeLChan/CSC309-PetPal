import React, { useState, useEffect } from 'react';
import ListingLeftCol from '../../components/listings/view/view-left-col/listing-left-col';
import ListingRightCol from '../../components/listings/view/view-right-col/listing-right-col';
import { useParams, useNavigate } from 'react-router-dom';
import Error403Component from '../../components/403';

const Listing = () => {
    const accessToken = localStorage.getItem('access_token');
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [listing, setListing] = useState(null);
    const [denied, setDenied] = useState(false);

    useEffect(() => {
        // Fetch the listing when the component mounts
        fetchListing();
    }, [id]);

    const fetchListing = async () => {
        try {
            setLoading(true);
            // Make request to backend
            const response = await fetch(`http://localhost:8000/listings/${id}/`,
                {
                    headers: { Authorization: `Bearer ${accessToken}`, }
                });

            if (!response.ok) {
                setDenied(true);
            }
            const data = await response.json();
            setListing(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching listing:', error);
        }
    };

    return (
        <div>
            {denied ? <Error403Component></Error403Component> : loading ? (<p className="text-center">Loading...</p>) : (
                <div data-bs-theme="petpal">
                    <div className="main d-flex two-col mt-5">
                        <ListingLeftCol listing={listing}></ListingLeftCol>
                        <ListingRightCol listing={listing}></ListingRightCol>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Listing;