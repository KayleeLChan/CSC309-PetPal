import React from 'react';

const PetDetailsComponent = ({ application }) => {

    const imageSrc = application.pet_listing.images.length > 0
    ? application.pet_listing.images[0].image
    : 'Zawg.jpg';  // Replace with default image path

    return (
        <div className="d-flex flex-column w-50 m-5 bg-cream flex-column align-items-center two-col-child">
        
            {/* Title & About */}
            <div className="w-100 d-flex flex-row align-items-center justify-content-evenly m-3 mb-3 py-2 px-3 bg-brown text-primary-cream">
                <h2 className="responsive_heading">Application For: {application.pet_listing.name}</h2>
            </div>

            {/* Need to get image */}
            <img
                src={imageSrc}
                className="rounded-circle mb-3"
                alt={`${application.pet_listing} Bashful`}
                width="150"
                height="150"
            />

            {/* Summary */}
            <div className="w-100 d-flex flex-row align-items-center justify-content-evenly m-3 mb-4 py-2 px-3 bg-brown text-primary-cream">
                <p className="summary-text mb-0">{application.pet_listing.animal}</p>
                <p className="summary-text mb-0">|</p>
                <p className="summary-text mb-0"> {application.pet_listing.age}</p>
                <p className="summary-text mb-0">|</p>
                <p className="summary-text mb-0"> {application.pet_listing.sex}</p>
                <p className="summary-text mb-0">|</p>
                <p className="summary-text mb-0"> {application.pet_listing.size}</p>
                <p className="summary-text mb-0">|</p>
                <p className="summary-text mb-0"> {application.pet_listing.breed}</p>
            </div>
        </div>
    );
};

export default PetDetailsComponent;
