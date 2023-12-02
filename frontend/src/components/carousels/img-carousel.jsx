import React, { useState } from 'react';
import { Container, Carousel, Button, CardGroup } from 'react-bootstrap';
import ImgCard from '../custom-cards/img-card';

const ImgCarousel = (images) => {
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

  const groupedImages = [];
  const groupSize = 3;

  // Group images into sets of three
  for (let i = 0; i < images.length; i += groupSize) {
    const group = images.slice(i, i + groupSize);
    groupedImages.push(group);
  }

  // Check if the last group has less than three images
  const lastGroup = groupedImages[groupedImages.length - 1];
  const remainingImages = lastGroup.length % groupSize;

  // If not evenly divisible by three, create additional groups of four
  if (remainingImages > 0) {
    const remainingGroup = images.slice(
      groupedImages.length * groupSize,
      groupedImages.length * groupSize + remainingImages
    );
    groupedImages.push(remainingGroup);
  }

  return (
    <Container className="container detail-carousel hide-xl">
      <Carousel id="petCarousel" className="d-flex flex-column" activeIndex={index} onSelect={handleSelect} interval={null} keyboard={false} controls={false} indicators={false}>
        {groupedImages.map((group) => (
          <Carousel.Item>
            <CardGroup className="d-flex justify-content-evenly">
              {group.map((image) => (
                <ImgCard image={image}></ImgCard>
              ))}
            </CardGroup>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="d-flex flex-row w-100 justify-content-between align-items-center">
        <Button className="carousel-control-prev" variant="link" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </Button>
        <div className="carousel-indicators">
          {images.map((_, item) => (
            <button
              key={item}
              type="button"
              data-bs-target="#petCarousel"
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
    </Container>
  );
}

export default ImgCarousel;