import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const NotificationItem = ({ notification, onDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = async () => {
      try {
        const response = await fetch(`http://localhost:8000/notifications/${notification.id}/`,
        {
            headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNjc2NTAzLCJpYXQiOjE3MDE0NjY5MDMsImp0aSI6ImEyMDA4OWY2NzY3ZTRjYmNiYjdhYzRhNTU1NWViMzdiIiwidXNlcl9pZCI6MX0.Em63InqkhayO9AFzGVAy1Y7B-FvPysNxG7--1yWFPJ4",}
        });  //TODO: Make authorization better later
      } catch (error) {
        console.error('Error fetching detailed notification:', error);
      }
      setShowModal(true);
    };
  
    const handleModalHide = () => {
      setShowModal(false);
    };

    const handleDelete = async () => {
      try {
        const response = await fetch(`http://localhost:8000/notifications/${notification.id}/`,
        {
          method: 'DELETE',
          headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNjc2NTAzLCJpYXQiOjE3MDE0NjY5MDMsImp0aSI6ImEyMDA4OWY2NzY3ZTRjYmNiYjdhYzRhNTU1NWViMzdiIiwidXNlcl9pZCI6MX0.Em63InqkhayO9AFzGVAy1Y7B-FvPysNxG7--1yWFPJ4",}
        });  //TODO: Make authorization better later

        if (response.ok) {
          // If the deletion is successful, call the onDelete callback
          onDelete(notification.id);
        } else {
          console.error('Error deleting notification:', response.status);
        }
      } catch (error) {
        console.error('Error deleting notification:', error);
      }
    }

  return (
    <div className="d-flex pt-2 w-100 justify-content-center">
      <Button
        variant="primary-cream"
        className="btn-lg text-dark-brown bg-none border-0 w-75 mx-3 text-start"
        onClick={handleModalShow}
      >
        <div className="d-flex flex-row align-items-center">
          <h3 className="m-0 notif-title fs-1">{notification.notifier_username}</h3>
          <p className="font-plain fs-5 m-0 ps-3 pt-2 text-truncate notif-msg">
            {notification.content}
          </p>
        </div>
      </Button>
      <Button variant="primary-orange" onClick={handleDelete}>
        <svg aria-hidden="true" width="18" height="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
        </svg>
      </Button>

      <Modal
        show={showModal}
        onHide={handleModalHide}
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-2 text-primary-brown">{notification.notifier_username}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notification.content}
          <p className="pt-5">Follow notification to: <a href={notification.link} className="notification-link">{notification.link}</a></p>   
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NotificationItem;
