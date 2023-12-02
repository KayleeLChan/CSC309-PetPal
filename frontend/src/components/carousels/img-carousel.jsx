import React, { useState } from 'react';
import { Container, Carousel, Button, CardGroup } from 'react-bootstrap';
import ImgCard from '../custom-cards/img-card';

const ImgCarousel = () => {
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
    <Container className="container detail-carousel hide-xl">
      <Carousel id="petCarousel" className="d-flex flex-column" activeIndex={index} onSelect={handleSelect} interval={null} keyboard={false} controls={false} indicators={false}>
        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
            <ImgCard></ImgCard>
            <ImgCard></ImgCard>
            <ImgCard></ImgCard>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
            <ImgCard></ImgCard>
            <ImgCard></ImgCard>
            <ImgCard></ImgCard>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup className="d-flex justify-content-evenly">
            <ImgCard></ImgCard>
            <ImgCard></ImgCard>
            <ImgCard></ImgCard>
          </CardGroup>
        </Carousel.Item>
      </Carousel>

      <div className="d-flex flex-row w-100 justify-content-between align-items-center">
        <Button className="carousel-control-prev" variant="link" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </Button>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#petCarousel" aria-label="Slide 1"
            onClick={() => handleSelect(0)}
            className={index === 0 ? 'active' : ''}
          ></button>
          <button type="button" data-bs-target="#petCarousel" aria-label="Slide 2"
            onClick={() => handleSelect(1)}
            className={index === 1 ? 'active' : ''}
          ></button>
          <button type="button" data-bs-target="#petCarousel" aria-label="Slide 3"
            onClick={() => handleSelect(2)}
            className={index === 2 ? 'active' : ''}
          ></button>
        </div>
        <Button className="carousel-control-next" variant="link" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </Button>
      </div>
    </Container>
  );
}

export default ImgCarousel;