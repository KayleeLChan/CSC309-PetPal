import React, { useState } from 'react';
import { Container, Carousel, Button, CardGroup } from 'react-bootstrap';
import PetCard from '../custom-cards/pet-card';

const PetCarousel = () => {
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
    <Container className="main-carousel vw-50 hide-lg">
      <Carousel id="petCarousel" className="d-flex flex-column" activeIndex={index} onSelect={handleSelect} interval={null} keyboard={false} controls={false}>
        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
            <PetCard></PetCard>
            <PetCard></PetCard>
            <PetCard></PetCard>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
            <PetCard></PetCard>
            <PetCard></PetCard>
            <PetCard></PetCard>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
            <PetCard></PetCard>
            <PetCard></PetCard>
            <PetCard></PetCard>
          </CardGroup>
        </Carousel.Item>
      </Carousel>

      <div className="d-flex flex-row h-100 w-100 justify-content-between align-items-end">
        <Button className="carousel-control-prev" variant="link" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </Button>
        <Button className="carousel-control-next" variant="link" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </Button>
      </div>
    </Container>
  );
}

export default PetCarousel;
