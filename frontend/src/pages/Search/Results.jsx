import React, { useState, useEffect, useMemo } from 'react';
import NotificationItem from '../../components/notifications/notification-item';
import { useSearchParams } from "react-router-dom";
import { Button } from 'react-bootstrap';

const SearchResults = () => {
    // const [loading, setLoading] = useState(true);
    // const [notifications, setNotifications] = useState([]);
    // const [totalPages, setTotalPages] = useState(1);
    // const [searchParams, setSearchParams] = useSearchParams();
    // const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1);

    // // useMemo to store search parameters
    // const query = useMemo(
    //     () => ({
    //         page: parseInt(searchParams.get("page") ?? 1),
    //         filter : searchParams.get("filter") ?? "all",
    //     }),
    //     [searchParams]
    // );

    // useEffect(() => {
    //     // Fetch the list of notifications when the component mounts
    //     fetchNotifications();
    // }, [query]);

    // const fetchNotifications = async () => {
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
    //                 headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNzk0OTgxLCJpYXQiOjE3MDE1ODUzODEsImp0aSI6Ijg2NTgzN2I0NjNkMzQ5MWM5M2FmMTBlZmI2ODAzN2NjIiwidXNlcl9pZCI6MX0.PPHuhQqkpaGuF7wv2FEqbY9B8dVd5izi6n0KBfFs3wQ", }
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

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main h-100 d-flex p-5 justify-content-center align-items-center">
                    
                </div>
            </div>
        </>
    );
}

export default SearchResults;