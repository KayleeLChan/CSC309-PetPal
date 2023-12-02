import React, { useState, useEffect, useMemo } from 'react';
import NotificationItem from '../../components/notifications/notification-item';
import { useSearchParams } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Notification = () => {
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1);

    // useMemo to store search parameters
    const query = useMemo(
        () => ({
            page: parseInt(searchParams.get("page") ?? 1),
            filter : searchParams.get("filter") ?? "all",
        }),
        [searchParams]
    );

    useEffect(() => {
        // Fetch the list of notifications when the component mounts
        fetchNotifications();
    }, [query]);

    const fetchNotifications = async () => {
        try {
            setLoading(true);
            // Set queryParams to pass into request
            const queryParams = new URLSearchParams({
                page: query.page,
                filter: query.filter,
            });

            // Make request to backend
            const response = await fetch(`http://localhost:8000/notifications/?${queryParams}`,
                {
                    headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNjc2NTAzLCJpYXQiOjE3MDE0NjY5MDMsImp0aSI6ImEyMDA4OWY2NzY3ZTRjYmNiYjdhYzRhNTU1NWViMzdiIiwidXNlcl9pZCI6MX0.Em63InqkhayO9AFzGVAy1Y7B-FvPysNxG7--1yWFPJ4", }
                }); //TODO: Make authorization better later
            const data = await response.json();
            setNotifications(data.results); 
            setTotalPages(
                Math.ceil(Number(data.count) / 10)
            );
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching notifications:', error);
        }
    };

    const handleDeleteNotification = (deletedNotificationId) => {
        // Remove the deleted notification from the list
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.id !== deletedNotificationId)
        );
    };

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex justify-content-center">
                    <div className="d-flex p-3 px-5 my-10 bg-cream flex-column rounded shadow notif-col">
                        <h1 className="fs-0 w-75 pb-2 align-self-center border-bottom border-3 text-center hide-md">Notifications</h1>
                        <h1 className="fs-0 w-100 pb-2 align-self-center border-bottom border-3 text-center show-sm">Notifications</h1>

                        {/* If fetching from database, show Loading..., otherwise, list notifications */}
                        {loading ? (<p className="text-center">Loading...</p>) : (
                            <>
                                {notifications.length === 0 ? (<p className="text-center">You have no notifications.</p>) : (
                                    <>
                                        {notifications.map((notification) => (
                                            <NotificationItem notification={notification} onDelete={handleDeleteNotification}></NotificationItem>
                                        ))}
                                    </>
                                )}
                            </>
                        )}

                        <div className="text-center h-100 d-flex justify-content-center">
                            <div className="d-flex flex-row justify-content-between align-self-end">
                                {query.page > 1 && query.page <= totalPages ? (
                                    <Button
                                        variant="primary-cream"
                                        onClick={() =>
                                            setSearchParams({ ...query, page: query.page - 1 })
                                        }
                                        className="mx-1"
                                    >
                                        &lt;
                                    </Button>
                                ) : (
                                    <Button
                                        variant="primary-cream"
                                        onClick={() =>
                                            setSearchParams({ ...query, page: query.page - 1 })
                                        }
                                        className="mx-1"
                                        disabled
                                    >
                                        &lt;
                                    </Button>
                                )}
                                
                                {pageButtons.map((pageNumber) => (
                                    <Button
                                        variant="primary-cream"
                                        onClick={() => setSearchParams({ ...query, page: pageNumber })}
                                        className="mx-1"
                                    >
                                        {pageNumber}
                                    </Button>
                                ))}

                                {query.page < totalPages ? (
                                    <Button
                                        variant="primary-cream"
                                        onClick={() =>
                                            setSearchParams({ ...query, page: query.page + 1 })
                                        }
                                        className="mx-1"
                                    >
                                        &gt;
                                    </Button>
                                ) : (
                                    <Button
                                        variant="primary-cream"
                                        onClick={() =>
                                            setSearchParams({ ...query, page: query.page + 1 })
                                        }
                                        className="mx-1"
                                        disabled
                                    >
                                        &gt;
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;