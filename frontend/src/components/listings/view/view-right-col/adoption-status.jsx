import React from 'react';

const AdoptionStatus = ({ listing }) => {
    const capitalizedStatus = listing.status.toUpperCase();
    const deadlineDate = new Date(listing.deadline);
    const formattedDeadline = deadlineDate.toLocaleString();

    return (
        <div className="d-flex flex-column w-40 mb-5 text-dark-brown bg-white rounded-5 text-center">
            <div className="p-1 pt-3 text-primary-cream bg-primary-orange rounded-top-5 shadow">
                <h2 className="responsive-heading">Adoption Status</h2>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center m-3">
                <h3 className="mb-0 responsive-heading">{capitalizedStatus}</h3>
                <p className="m-0 fs-7 pt-2">Deadline for applications is {formattedDeadline}</p>
            </div>
            {/* TODO: Put edit listing button for shelter type */}
        </div>
    );
};

export default AdoptionStatus;
