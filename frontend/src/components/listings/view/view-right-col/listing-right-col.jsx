import React from 'react';
import { Button } from 'react-bootstrap';
import ShelterPreview from './shelter-preview';
import AdoptionStatus from './adoption-status';

const ListingRightCol = ({ listing }) => {
  return (
    <div className="d-flex flex-column m-5 p-5 justify-content-start align-items-center w-40 text-primary-brown two-col-child">
      <a href="adoption.html">
        <Button className="btn btn-xl cta-btn-xl btn-cream bg-primary-orange m-3 mb-5 shadow-sm" type="button">
          Become My Pal!
        </Button>
      </a>

      <AdoptionStatus listing={listing}></AdoptionStatus>

      <ShelterPreview shelterID={listing.shelter}></ShelterPreview>
    </div>
  );
};

export default ListingRightCol;
