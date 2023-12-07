import React from 'react';
import { Card } from 'react-bootstrap';

const ImgCard = (source) => {
  const link = source.source;
  return (
    <Card className="bg-primary-cream shadow m-3 mt-1 rounded card">
      <Card.Img src={link} className="card-img-top detail-img rounded-1 h-100" />
    </Card>
  );
};

export default ImgCard;
