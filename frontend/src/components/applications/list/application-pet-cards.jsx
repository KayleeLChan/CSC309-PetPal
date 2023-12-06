import React from 'react';
import { Card } from 'react-bootstrap';

const ApplicationPetCard = ({ application }) => {
  return (
    <div className="card card-click shadow vh-50 m-3 rounded overflow-auto">
    <Card.Link href="./MrNewdles.html">
        <Card className="text-center rounded-1">
       
        <Card.Title className="fs-4 px-4 pt-3">Zawg</Card.Title>
        <Card.Img variant="top" src="imgs/Zawg.png" className="py-0 rounded-1 h-100 card-img" alt="Zawg" />
        
        <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title className="fs-4">Status</Card.Title>
            <Card.Text className="">Pending</Card.Text>
        </Card.Body>

        </Card>
    </Card.Link>
    </div>
  );
}

export default ApplicationPetCard;