import React from 'react';

const PetDetailsComponent = ({ application }) => {

    // Check if application and pet_listing are defined
    if (!application || !application.pet_listing) {
        return null; // or display a loading message or handle it in another way
    }

    const ageOptions = [["new", "Newborn"], ["young", "Young"], ["adult", "Adult"], ["senior", "Senior"]];
    const sizeOptions = [["S", "Small"], ["M", "Medium"], ["L", "Large"], ["XL", "Extra Large"]];
    const sexOptions = [["F", "Female"], ["M", "Male"]];

    const selectedAgeLabel = ageOptions.find(([option]) => option === application.pet_listing_age)?.[1];
    const selectedSizeLabel = sizeOptions.find(([option]) => option === application.pet_listing_size)?.[1];
    const selectedSexLabel = sexOptions.find(([option]) => option === application.pet_listing_sex)?.[1];

    return (
        <div>
        
            {/* Title & About */}
            <div className="w-100 d-flex flex-row align-items-center justify-content-evenly rounded-1 m-3 mb-3 py-2 px-3 bg-brown text-primary-cream">
                <h2 className="responsive_heading">Application For: {application.pet_listing_name}</h2>
            </div>

            {/* Need to get image
            <img
                src={imageSrc}
                className="rounded-circle mb-3"
                alt={`${application.pet_listing} Bashful`}
                width="150"
                height="150"
            /> */}

            {/* Summary */}
            <div className="w-100 d-flex flex-row align-items-center rounded-1 justify-content-evenly m-3 mb-4 py-2 px-3 bg-brown text-primary-cream">
                <p className="summary-text mb-0">{application.pet_listing_animal}</p>
                <p className="summary-text mb-0">|</p>
                <p className="summary-text mb-0"> {selectedAgeLabel}</p>
                <p className="summary-text mb-0">|</p>
                <p className="summary-text mb-0"> {selectedSexLabel}</p>
                <p className="summary-text mb-0">|</p>
                <p className="summary-text mb-0"> {selectedSizeLabel}</p>
                <p className="summary-text mb-0">|</p>
                <p className="summary-text mb-0"> {application.pet_listing_breed}</p>
            </div>
        </div>
    );
};

export default PetDetailsComponent;