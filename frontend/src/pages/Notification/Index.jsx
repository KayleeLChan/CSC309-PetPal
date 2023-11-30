import React from 'react';
import NotificationItem from '../../components/notifications/notification-item';

function Notification() {
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex justify-content-center">
                    <div class="d-flex p-3 px-5 bg-cream flex-column rounded shadow notif-col">
                        <h1 class="fs-0 w-75 pb-2 align-self-center border-bottom border-3 text-center hide-md">Notifications</h1>
                        <h1 class="fs-0 w-100 pb-2 align-self-center border-bottom border-3 text-center show-sm">Notifications</h1>
                        <NotificationItem></NotificationItem>
                        <NotificationItem></NotificationItem>
                        <NotificationItem></NotificationItem>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;