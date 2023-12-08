import React, { useState, useEffect } from 'react';
import ListingLeftCol from '../../components/listings/view/view-left-col/listing-left-col';
import ListingRightCol from '../../components/listings/view/view-right-col/listing-right-col';
import { useParams } from 'react-router-dom';

const Listing = () => {
    const accessToken = localStorage.getItem('access_token');
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [listing, setListing] = useState(null);

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
            {loading ? (<p className="text-center">Loading...</p>) : (
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