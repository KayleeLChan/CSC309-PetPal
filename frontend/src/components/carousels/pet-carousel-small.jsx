import React, { useState } from 'react';
import { Carousel, Button, CardGroup } from 'react-bootstrap';
import PetCardSmall from '../custom-cards/pet-card-small';

const PetCarouselSmall = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const handlePrev = () => {
      setIndex(index - 1 < 0 ? 2 : index - 1);
    };
  
    const handleNext = () => {
      setIndex((index + 1) % 3);
    };

  return (
    <div className="container vw-50 show-md">
      <Carousel id="petSmallCarousel" activeIndex={index} onSelect={handleSelect} ride={false} interval={null} keyboard={false} controls={false} indicators={false}>
        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
            <PetCardSmall></PetCardSmall>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
          <PetCardSmall></PetCardSmall>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
          <PetCardSmall></PetCardSmall>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
          <PetCardSmall></PetCardSmall>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
          <PetCardSmall></PetCardSmall>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
          <PetCardSmall></PetCardSmall>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
          <PetCardSmall></PetCardSmall>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
          <PetCardSmall></PetCardSmall>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
          <PetCardSmall></PetCardSmall>
          </CardGroup>
        </Carousel.Item>
      </Carousel>

      <div className="d-flex flex-row h-100 w-100 justify-content-evenly align-items-end">
        <Button className="carousel-control-prev" variant="link" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </Button>
        <div className="carousel-indicators">
          {[...Array(9).keys()].map((item) => (
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

export default PetCarouselSmall;
