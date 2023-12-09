import React from 'react';
import { Card } from 'react-bootstrap';

const ApplicationPetCard = ({ application }) => {
  return (
    <>
      <div class="hide-xxl m-3 shadow overflow-auto carousel-card rounded-1">

        <Card className="text-center rounded-1 w-100 h-100">
          {/* <Card.Link href={`https://twizzy-petpal.vercel.app/applications/details/${application.id}`} className="w-100 h-100 carousel-card-content"> */}
          <Card.Link href={`/applications/details/${application.id}`} className="w-100 h-100 carousel-card-content">

            <Card.Title className="fs-1 px-4 pt-3">{application.pet_listing_name}</Card.Title>
            <div className="img-bg p-0">
            {/* <Card.Img variant="top" src={listing.images[0].image} className="rounded-1 card-img p-0 px-5" /> */}
            </div>
            
            <Card.Body className="px-4 d-flex flex-column align-items-center text-center">
              <Card.Title className="fs-4">Status</Card.Title>
              <Card.Text>{application.application_status}</Card.Text>
              <Card.Title className="fs-4">Applicant</Card.Title>
              <Card.Text>{application.applicant_first_name}</Card.Text>
            </Card.Body>

          </Card.Link>
        </Card>
      </div>

      <div className="show-xl m-3 shadow overflow-auto carousel-card rounded-1">
      <Card className="text-center rounded-1 w-100 h-100">
          <Card.Link href={`https://twizzy-petpal.vercel.app/applications/details/${application.id}`} className="w-100 h-100 carousel-card-content">

            <Card.Title className="fs-1 px-4 pt-3">{application.pet_listing_name}</Card.Title>
            
            <div className="img-bg p-0">
            {/* <Card.Img variant="top" src={listing.images[0].image} className="rounded-1 card-img p-0 px-5" /> */}
            </div>
            
            <Card.Body className="px-4 d-flex flex-column align-items-center text-center">
              <Card.Title className="fs-4">Status</Card.Title>
              <Card.Text>{application.application_status}</Card.Text>
              <Card.Title className="fs-4">Applicant</Card.Title>
              <Card.Text>{application.applicant_first_name}</Card.Text>
            </Card.Body>

          </Card.Link>
        </Card>
      </div>
    </>
  );
}

export default ApplicationPetCard;



