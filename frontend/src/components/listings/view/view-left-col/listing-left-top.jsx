import React from 'react';
import ImgCarouselSmall from '../../../carousels/img-carousel-small';
import ImgCarousel from '../../../carousels/img-carousel';

const ListingLeftTop = () => {
  return (
    <>
      {/* Title */}
      <div className="d-flex w-90 justify-content-between align-items-end small-title">
        <h2>Mr. Newdles</h2>
        <h3>Toronto, ON</h3>
      </div>
      {/* Title */}
      <ImgCarouselSmall></ImgCarouselSmall>
      <ImgCarousel></ImgCarousel>

      {/* Summary */}
      <div className="w-100 d-flex flex-row align-items-center justify-content-evenly m-3 py-2 px-3 bg-brown text-primary-cream rounded-2 hide-md">
        <p className="summary-text mb-0">Hog Nose Snake</p>
        <p className="summary-text mb-0">|</p>
        <p className="summary-text mb-0"> Adult</p>
        <p className="summary-text mb-0">|</p>
        <p className="summary-text mb-0"> Female</p>
        <p className="summary-text mb-0">|</p>
        <p className="summary-text mb-0"> Small</p>
        <p className="summary-text mb-0">|</p>
        <p className="summary-text mb-0"> Snow Western Morph</p>
      </div>
      {/* Summary */}
    </>
  );
};

export default ListingLeftTop;
