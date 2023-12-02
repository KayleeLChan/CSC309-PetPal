import React from 'react';
import { Card, Image } from 'react-bootstrap';

const ImgCard = () => {
  return (
    <Card className="bg-primary-cream shadow m-3 mt-1 rounded card">
      <Card.Img src="../imgs/Zawg.png" className="card-img-top detail-img rounded-1 h-100" alt="Mr. Newdles Bashful" />
    </Card>
  );
};

export default ImgCard;
