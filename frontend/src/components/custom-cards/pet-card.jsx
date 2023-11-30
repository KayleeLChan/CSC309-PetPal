import React from 'react';
import { Card } from 'react-bootstrap';

const PetCard = () => {
  return (
    <>
      <div class="hide-xxl m-3 shadow overflow-auto carousel-card rounded-1">
        <Card className="text-center rounded-1">
          <Card.Link href="./MrNewdles.html" className="pet-card">
            <Card.Title className="fs-4 px-4 pt-3">Zawg</Card.Title>
            <Card.Img variant="top" src="imgs/Zawg.png" className="py-0 rounded-1 card-img" alt="Zawg" />
            <Card.Body className="px-4 d-flex flex-column align-items-center text-center">
              <Card.Title className="fs-4">Breed</Card.Title>
              <Card.Text>Man Dog</Card.Text>
              <Card.Title className="fs-4">Personality</Card.Title>
              <Card.Text>Brampton</Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>
      </div>

      <div className="show-xl m-3 shadow overflow-auto carousel-card rounded-1">
        <Card className="text-center rounded-1">
          <Card.Link href="./MrNewdles.html">
            <Card.Title className="fs-6 px-4 pt-3">Zawg</Card.Title>
            <Card.Img variant="top" src="imgs/Zawg.png" className="py-0 rounded-1 card-img" alt="Zawg" />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="fs-6">Breed</Card.Title>
              <Card.Text className="fs-7">Man Dog</Card.Text>
              <Card.Title className="fs-6">Personality</Card.Title>
              <Card.Text className="fs-7">Brampton</Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>
      </div>
    </>
  );
}

export default PetCard;