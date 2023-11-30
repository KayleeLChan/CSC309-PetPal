import React from 'react';
import { Card } from 'react-bootstrap';

const PetCardSmall = () => {
  return (
    <div className="m-3 shadow overflow-auto carousel-card rounded-1 w-100">
        <Card.Link href="./MrNewdles.html">
            <Card className="text-center rounded-1">
                <Card.Title className="fs-4 px-4 pt-3">Zawg</Card.Title>
                <Card.Img variant="top" src="imgs/Zawg.png" className="py-0 rounded-1 h-100 card-img" alt="Zawg" />
                <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="fs-4">Breed</Card.Title>
                <Card.Text className="">Man Dog</Card.Text>
                <Card.Title className="fs-4">Personality</Card.Title>
                <Card.Text className="">Brampton</Card.Text>
                </Card.Body>
            </Card>
        </Card.Link>
      </div>
  );
}

export default PetCardSmall;