import React, { useState, useEffect } from 'react';
import ListingLeftCol from '../../components/listings/view/view-left-col/listing-left-col';
import ListingRightCol from '../../components/listings/view/view-right-col/listing-right-col';
import { useParams } from 'react-router-dom';

const Listing = () => {
    const { listingID } = useParams();
    const [loading, setLoading] = useState(true);
    const [listing, setListing] = useState(null);


    useEffect(() => {
        // Fetch the listing when the component mounts
        fetchListing();
    }, []);

    const fetchListing = async () => {
        try {
            setLoading(true);

            // Make request to backend
            const response = await fetch(`http://localhost:8000/listings/${listingID}`,
                {
                    headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNjc2NTAzLCJpYXQiOjE3MDE0NjY5MDMsImp0aSI6ImEyMDA4OWY2NzY3ZTRjYmNiYjdhYzRhNTU1NWViMzdiIiwidXNlcl9pZCI6MX0.Em63InqkhayO9AFzGVAy1Y7B-FvPysNxG7--1yWFPJ4", }
                }); //TODO: Make authorization better later
            const data = await response.json();
            setListing(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching listing:', error);
        }
    };

    // const handleDeleteNotification = (deletedNotificationId) => {
    //     // Remove the deleted notification from the list
    //     setNotifications((prevNotifications) =>
    //         prevNotifications.filter((notification) => notification.id !== deletedNotificationId)
    //     );
    // };

    return (
        <>
            {loading ? (<p className="text-center">Loading...</p>) : (
                <div data-bs-theme="petpal">
                    <div className="main d-flex two-col mt-5">
                        <ListingLeftCol listing={listing}></ListingLeftCol>
                        <ListingRightCol listing={listing}></ListingRightCol>
                    </div>
                </div>
            )}
        </>
    );
}

export default Listing;