import React from 'react';
import ListingLeftTop from './listing-left-top';
import ListingLeftBody from './listing-left-body';

const ListingLeftCol = () => {
  return (
    <div className="d-flex w-50 m-5 p-3 px-5 bg-cream flex-column align-items-center rounded two-col-child">
        <ListingLeftTop></ListingLeftTop>
        <ListingLeftBody></ListingLeftBody>
    </div>
  );
};

export default ListingLeftCol;
