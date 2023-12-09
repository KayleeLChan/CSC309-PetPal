import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ShelterPreview from './shelter-preview';
import AdoptionStatus from './adoption-status';
import { useNavigate } from 'react-router-dom';

const ListingRightCol = ({ listing }) => {
  const navigate = useNavigate();
  const userID = localStorage.getItem('user_id');
  const accountType = localStorage.getItem('accounttype');
  const accessToken = localStorage.getItem('access_token');
  const [application, setApplication] = useState({});

  function navigateApplication() {
    navigate(`/applications/new/${listing.id}`);
  }

  useEffect(() => {
    // Fetch the listing when the component mounts
    fetchApplication();
  }, [listing]);

  const fetchApplication = async () => {
    try {
      // Make request to backend
      const response = await fetch(`http://localhost:8000/applications/?pet_listing_name=${listing.name}`,
        {
          headers: { Authorization: `Bearer ${accessToken}`, }
        });
      const data = await response.json();
      setApplication(data.results);
    } catch (error) {
      console.error('Error fetching listing:', error);
    }
  };

  function navigateViewApplication() {
    navigate(`/applications/details/${application[0].id}`);
  };
  
  //TODO: MAKE IT SO THAT BUTTON IS DISABLED FOR SEEKERS WHO HAVE AN APPLICATION, AND INSTEAD PUT IN A VIEW APPLICATION BUTTON

  return (
    <div className="d-flex flex-column m-5 p-5 justify-content-start align-items-center w-40 text-primary-brown two-col-child">

      {(accountType == "petshelter") || (listing.status != "available") || (application.length > 0) ? <Button className="btn btn-xl cta-btn-xl btn-cream bg-primary-orange m-3 mb-5 shadow-sm" type="button" onClick={navigateApplication} disabled>
        Become My Pal!
      </Button> : <Button className="btn btn-xl cta-btn-xl btn-cream bg-primary-orange m-3 mb-5 shadow-sm" type="button" onClick={navigateApplication}>
        Become My Pal!
      </Button>}

      {application.length > 0 ? (<Button className="btn btn-lg cta-btn-xl m-3 mb-5 shadow-sm" type="button" variant="primary-orange" onClick={navigateViewApplication}>
          View Application
        </Button>) : (<></>)}

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
