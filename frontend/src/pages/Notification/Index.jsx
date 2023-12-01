import React, { useState, useEffect, useMemo } from 'react';
import NotificationItem from '../../components/notifications/notification-item';
import { useNavigate, useSearchParams } from "react-router-dom";

const Notification = () => {
    const [loading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);
    const [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        // Fetch the list of notifications when the component mounts
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:8000/notifications/',
            {
                headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNjc2NTAzLCJpYXQiOjE3MDE0NjY5MDMsImp0aSI6ImEyMDA4OWY2NzY3ZTRjYmNiYjdhYzRhNTU1NWViMzdiIiwidXNlcl9pZCI6MX0.Em63InqkhayO9AFzGVAy1Y7B-FvPysNxG7--1yWFPJ4",}
            }); //TODO: Make authorization better later
            const data = await response.json();
            setNotifications(data.results);
            setNextPage(data.next);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching notifications:', error);
        }
    };

    const fetchNextPage = async () => {
        if (nextPage) {
          try {
            const response = await fetch(nextPage);
            const data = await response.json();
            setNotifications((prevNotifications) => [...prevNotifications, ...data.results]);
            setNextPage(data.next);
          } catch (error) {
            console.error('Error fetching next page of notifications:', error);
          }
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
                        <div className="d-flex p-3 px-5 bg-cream flex-column rounded shadow notif-col">
                            <h1 className="fs-0 w-75 pb-2 align-self-center border-bottom border-3 text-center hide-md">Notifications</h1>
                            <h1 className="fs-0 w-100 pb-2 align-self-center border-bottom border-3 text-center show-sm">Notifications</h1>

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

                            <div className="pagination">
                                {nextPage && (
                                    <button onClick={fetchNextPage} className="load-more-button">
                                    Load More
                                    </button>
                                )}
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Notification;