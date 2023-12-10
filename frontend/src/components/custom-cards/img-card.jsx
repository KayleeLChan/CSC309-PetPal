import React from 'react';
import { Card } from 'react-bootstrap';

const ImgCard = (source) => {
  const link = source.source;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label='pet image, opens in new tab'>
      <Card className="bg-primary-cream shadow m-3 mt-1 rounded card detail-img">
        <Card.Img src={link} className="card-img-top detail-img rounded-1 h-100" />
      </Card>
    </a>
  );
};

export default ImgCard;
