import React, { useState } from 'react';

const CommentComponent = ({ title, message, timestamp }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="align-items-center mb-3 p-4">

      {/* Button to open the modal */}

      <button
        type="button"
        className="btn btn-lg btn-primary-orange text-dark-brown bg-none border border-0 w-90 mb-3 p-1 text-start"
        onClick={openModal}
      >
        <div className="d-flex flex-row align-items-center">
          <p className="fs-5">{title}</p>
          <p className="font-plain fs-6 m-0 ps-3 pt-2 text-truncate notif-msg">{message}</p>
        </div>
      </button>

      {/* Modal */}
      <div className={`modal fade ${isModalOpen ? 'show' : ''}`} id={`commentModal-${timestamp}`} tabIndex="-1" aria-labelledby={`commentModalLabel-${timestamp}`} aria-hidden={!isModalOpen}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <p className="fw-bolder">{timestamp}</p>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
