import React, { useState } from 'react';
import { Carousel, Button, CardGroup } from 'react-bootstrap';
import ImgCard from '../custom-cards/img-card';

const ImgCarouselSmall = ({images}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex(index - 1 < 0 ? images.length-1 : index - 1);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };


  return (
    <div className="container vw-50 show-md">
      <Carousel id="petSmallCarousel" activeIndex={index} onSelect={handleSelect} interval={null} keyboard={false} controls={false} indicators={false}>
        {images.map((image) => (
          <Carousel.Item>
            <CardGroup className="d-flex justify-content-evenly">
              <ImgCard source={image.image}></ImgCard>
            </CardGroup>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="d-flex flex-row h-100 w-100 justify-content-evenly align-items-end">
        <Button className="carousel-control-prev" variant="link" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </Button>
        <div className="carousel-indicators">
          {images.map((_, item) => (
            <button
              key={item}
              type="button"
              data-bs-target="#petSmallCarousel"
              onClick={() => handleSelect(item)}
              className={index === item ? 'active' : ''}
              aria-label={`Slide ${item + 1}`}
            ></button>
          ))}
        </div>
        <Button className="carousel-control-next" variant="link" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </Button>
      </div>
    </div>

  );
}

export default ImgCarouselSmall;
