import React from 'react';
import { Card } from 'react-bootstrap';

const PetCardSmall = ({ listing }) => {
  return (
    <div className="m-3 shadow overflow-auto carousel-card rounded-1 w-100">
        <Card.Link href={`https://twizzy-petpal.vercel.app/listings/view/${listing.id}`}>
            <Card className="text-center rounded-1">
                <Card.Title className="fs-4 px-4 pt-3">{listing.name}</Card.Title>
                <Card.Img variant="top" src={listing.images[0].image} className="py-0 rounded-1 h-100 card-img" />
                <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="fs-4">Breed</Card.Title>
                <Card.Text className="">{listing.breed}</Card.Text>
                <Card.Title className="fs-4">Personality</Card.Title>
                <Card.Text className="">{listing.personality}</Card.Text>
                </Card.Body>
            </Card>
        </Card.Link>
      </div>
  );
}

export default PetCardSmall;