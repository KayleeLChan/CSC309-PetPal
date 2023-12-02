import React, { useState, useEffect } from 'react';

const Listing = () => {
    const [loading, setLoading] = useState(true);
    // const [notifications, setNotifications] = useState([]);


    // useEffect(() => {
    //     // Fetch the list of notifications when the component mounts
    //     fetchListing();
    // }, []);

    // const fetchListing = async () => {
    //     try {
    //         setLoading(true);
    //         // Set queryParams to pass into request
    //         const queryParams = new URLSearchParams({
    //             page: query.page,
    //             filter: query.filter,
    //         });

    //         // Make request to backend
    //         const response = await fetch(`http://localhost:8000/notifications/?${queryParams}`,
    //             {
    //                 headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNjc2NTAzLCJpYXQiOjE3MDE0NjY5MDMsImp0aSI6ImEyMDA4OWY2NzY3ZTRjYmNiYjdhYzRhNTU1NWViMzdiIiwidXNlcl9pZCI6MX0.Em63InqkhayO9AFzGVAy1Y7B-FvPysNxG7--1yWFPJ4", }
    //             }); //TODO: Make authorization better later
    //         const data = await response.json();
    //         setNotifications(data.results); 
    //         setTotalPages(
    //             Math.ceil(Number(data.count) / 10)
    //         );
    //         setLoading(false);
    //     } catch (error) {
    //         setLoading(false);
    //         console.error('Error fetching notifications:', error);
    //     }
    // };

    // const handleDeleteNotification = (deletedNotificationId) => {
    //     // Remove the deleted notification from the list
    //     setNotifications((prevNotifications) =>
    //         prevNotifications.filter((notification) => notification.id !== deletedNotificationId)
    //     );
    // };

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex justify-content-center">
                
                </div>
            </div>
        </>
    );
}

export default Listing;