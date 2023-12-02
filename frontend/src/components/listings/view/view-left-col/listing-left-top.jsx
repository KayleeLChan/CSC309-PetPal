import React from 'react';
import ImgCarouselSmall from '../../../carousels/img-carousel-small';
import ImgCarousel from '../../../carousels/img-carousel';

const ListingLeftTop = ({ listing }) => {
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
        <p className="summary-text mb-0"> {listing.age}</p>
        <p className="summary-text mb-0">|</p>
        <p className="summary-text mb-0"> {listing.sex}</p>
        <p className="summary-text mb-0">|</p>
        <p className="summary-text mb-0"> {listing.size}</p>
        <p className="summary-text mb-0">|</p>
        <p className="summary-text mb-0"> {listing.breed}</p>
      </div>
      {/* Summary */}
    </>
  );
};

export default ListingLeftTop;
