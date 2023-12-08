import React from 'react';

function Mission(props) {
  return (
    <>
      <div data-bs-theme="petpal">
        <div className="d-flex align-self-start mt-4 w-100 justify-content-left">
          <div className="d-flex two-col-child w-90 m-4 px-5 py-5 bg-cream flex-column rounded">
            <h1 className="text-primary-cream text-decoration-underline mb-1">Our Mission</h1>
            <p className="text-primary-brown mb-1">
              {props.shelterData.mission}
            </p>
            <h1 className="text-primary-cream text-decoration-underline mb-1 mt-5">Adoption Policy</h1>
            <p className="text-primary-brown mb-1">
              {props.shelterData.policy}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;