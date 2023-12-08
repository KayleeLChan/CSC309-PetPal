import React from 'react';
import { Button } from 'react-bootstrap';
import ShelterPreview from './shelter-preview';
import AdoptionStatus from './adoption-status';
import { useNavigate } from 'react-router-dom';

const ListingRightCol = ({ listing }) => {
  const navigate = useNavigate();
  const userID = localStorage.getItem('user_id');
  const accountType = localStorage.getItem('accounttype');

  function navigateApplication() {
    {/* TODO: CONNECT WITH PAGE */}
    navigate('/');
  }

  return (
    <div className="d-flex flex-column m-5 p-5 justify-content-start align-items-center w-40 text-primary-brown two-col-child">

      {(accountType == "petshelter") || (listing.status != "available") ? <Button className="btn btn-xl cta-btn-xl btn-cream bg-primary-orange m-3 mb-5 shadow-sm" type="button" onClick={navigateApplication} disabled>
          Become My Pal!
        </Button> : <Button className="btn btn-xl cta-btn-xl btn-cream bg-primary-orange m-3 mb-5 shadow-sm" type="button" onClick={navigateApplication}>
          Become My Pal!
        </Button>}
        
      <AdoptionStatus listing={listing}></AdoptionStatus>

      <ShelterPreview shelterID={listing.shelter}></ShelterPreview>
      {userID == listing.shelter ? (<a href={`/listings/${listing.id}/update`}>
        <Button className="btn btn-lg cta-btn-xl m-3 mb-5 shadow-sm" type="button" variant="primary-orange">
          Edit Listing
        </Button>
      </a>) : (<></>)}
    </div>
  );
};

export default ListingRightCol;
