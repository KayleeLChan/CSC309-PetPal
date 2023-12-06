import React, { useState, useEffect, useMemo } from 'react';
import NotificationItem from '../../components/notifications/notification-item';
import { useSearchParams } from "react-router-dom";
import PaginationButtons from '../../components/pagination-buttons';
import { Dropdown } from 'react-bootstrap';

const Notification = () => {
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    // useMemo to store search parameters
    const query = useMemo(
        () => ({
            page: parseInt(searchParams.get("page") ?? 1),
            filter : searchParams.get("filter") ?? "all",
            //TODO: Make filter button
            //TODO: Make errors on Put and Create
        }),
        [searchParams]
    );

    useEffect(() => {
        // Fetch the list of notifications when the component mounts
        fetchNotifications();
    }, [query]);

    const handleFilter = (e) => {query.filter = e.target.id}

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
                    headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNzk0OTgxLCJpYXQiOjE3MDE1ODUzODEsImp0aSI6Ijg2NTgzN2I0NjNkMzQ5MWM5M2FmMTBlZmI2ODAzN2NjIiwidXNlcl9pZCI6MX0.PPHuhQqkpaGuF7wv2FEqbY9B8dVd5izi6n0KBfFs3wQ", }
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
                        <Dropdown className="mt-3 mt-md-0">
                        <Dropdown.Toggle variant="primary-cream" id="dropdown-basic">
                            FILTER NOTIFICATIONS BY
                            <br className="show-md" />
                            <span className="ms-2 text-decoration-underline">{query.filter}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={(e) => handleFilter(e)} className="text-primary-brown" id="all">All</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => handleFilter(e)} className="text-primary-brown" id="read">Read</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => handleFilter(e)} className="text-primary-brown" id="unread">Unread</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

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

                        <PaginationButtons query={query} setSearchParams={setSearchParams} totalPages={totalPages} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;