import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const NotificationItem = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => {
      setShowModal(true);
    };
  
    const handleModalHide = () => {
      setShowModal(false);
    };

  return (
    <div className="d-flex pt-2 w-100 justify-content-center">
      <Button
        variant="primary-cream"
        className="btn-lg text-dark-brown bg-none border-0 w-90 mx-3 text-start"
        onClick={handleModalShow}
      >
        <div className="d-flex flex-row align-items-center">
          <h3 className="m-0 notif-title">Barack Obama:</h3>
          <p className="font-plain fs-6 m-0 ps-3 pt-2 text-truncate notif-msg">
            Hi! I was looking at Ssssnelter and wanted to adopt your lovely snake Mr. Newdles! I sent in my application for you to review at your convenience. I sincerely hope that we'll be able to adopt Mr. Newdles and gain a great new addition to our family, since she's so obviously loving. I look forward to hearing you respond soon!
          </p>
        </div>
      </Button>
      <Button variant="primary-orange">
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
          <Modal.Title className="fs-2 text-primary-brown">Barack Obama</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Hi! I was looking at Ssssnelter and wanted to adopt your lovely snake Mr. Newdles! I sent in my application for you to review at your convenience. I sincerely hope that we'll be able to adopt Mr. Newdles and gain a great new addition to our family, since she's so obviously loving. I look forward to hearing you respond soon!
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NotificationItem;
