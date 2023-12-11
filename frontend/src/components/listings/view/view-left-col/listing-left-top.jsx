import React from 'react';
import ImgCarouselSmall from '../../../carousels/img-carousel-small';
import ImgCarousel from '../../../carousels/img-carousel';

const ListingLeftTop = ({ listing }) => {
  const ageOptions = [["all", "Filter By Age"], ["new", "Newborn"], ["young", "Young"], ["adult", "Adult"], ["senior", "Senior"]];
  const sexOptions = [["all", "Filter By Sex"], ["F", "Female"], ["M", "Male"]];

  const selectedAgeLabel = ageOptions.find(([option]) => option === listing.age)?.[1];
  const selectedSexLabel = sexOptions.find(([option]) => option === listing.sex)?.[1];

  return (
    <>
      {/* Title */}
      <div className="d-flex w-90 justify-content-between align-items-end small-title">
        <h2>{listing.name}</h2>
        <h3>{listing.location}</h3>
      </div>
      {/* Title */}
      <ImgCarouselSmall images={listing.images}></ImgCarouselSmall>
      <ImgCarousel images={listing.images}></ImgCarousel>

      {/* Summary */}
      <div className="w-100 d-flex flex-row align-items-center justify-content-evenly m-3 py-2 px-3 bg-brown text-primary-cream rounded-2 hide-md">
        <p className="summary-text mb-0">{listing.animal}</p>
        <p className="summary-text mb-0">|</p>
        <p className="summary-text mb-0"> {selectedAgeLabel}</p>
        <p className="summary-text mb-0">|</p>
        <p className="summary-text mb-0"> {selectedSexLabel}</p>
        <p className="summary-text mb-0">|</p>
        <p className="summary-text mb-0"> {listing.breed}</p>
      </div>
      {/* Summary */}
    </>
  );
};

export default ListingLeftTop;
