import React, { useState, useEffect } from 'react';
import { Container, Carousel, Button, CardGroup } from 'react-bootstrap';
import PetCard from '../custom-cards/pet-card';
import PetCardSmall from '../custom-cards/pet-card-small';

const PetCarousel = () => {
  const [index, setIndex] = useState(0);
  const [listings, setListings] = useState([]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex(index - 1 < 0 ? 2 : index - 1);
  };

  const handleNext = () => {
    setIndex((index + 1) % 3);
  };

  useEffect(() => {
    // Fetch the list of notifications when the component mounts
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      // Make request to backend
      const response = await fetch("http://localhost:8000/listings/?status=all");
      const data = await response.json();
      const firstNine = data.results.slice(0, 9);
      setListings(firstNine);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  // Create groups after listings have been fetched
  const group1 = listings.slice(0, 3);
  const group2 = listings.slice(3, 6);
  const group3 = listings.slice(6);

  return (
    <>
      {/* Regular */}
      <Container className="main-carousel vw-50 hide-lg">
        <Carousel id="petCarousel" className="d-flex flex-column" activeIndex={index} onSelect={handleSelect} interval={null} keyboard={false} controls={false} indicators={false}>
          <Carousel.Item>
            <CardGroup className="d-flex justify-content-evenly">
              {group1.map((listing) => (
                <PetCard listing={listing}></PetCard>
              ))}
            </CardGroup>
          </Carousel.Item>

          <Carousel.Item>
            <CardGroup className="d-flex justify-content-evenly">
              {group2.map((listing) => (
                <PetCard listing={listing}></PetCard>
              ))}
            </CardGroup>
          </Carousel.Item>

          <Carousel.Item>
            <CardGroup className="d-flex justify-content-evenly">
              {group3.map((listing) => (
                <PetCard listing={listing}></PetCard>
              ))}
            </CardGroup>
          </Carousel.Item>
        </Carousel>

        <div className="d-flex flex-row h-100 w-100 justify-content-between align-items-center">
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

      {/* Small */}
      <div className="container vw-50 show-md">
        <Carousel id="petSmallCarousel" activeIndex={index} onSelect={handleSelect} ride={false} interval={null} keyboard={false} controls={false} indicators={false}>
          {listings.map((listing) => (
            <Carousel.Item>
              <CardGroup className="d-flex justify-content-evenly">
                <PetCardSmall listing={listing}></PetCardSmall>
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
    </>
  );
}

export default PetCarousel;
