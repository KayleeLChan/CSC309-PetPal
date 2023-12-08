import React from 'react';
import ListingLeftTop from './listing-left-top';
import ListingLeftBody from './listing-left-body';

const ListingLeftCol = ({ listing }) => {

  return (
    <div className="d-flex w-50 m-5 p-3 px-5 bg-cream flex-column align-items-center rounded two-col-child">
        <ListingLeftTop listing={listing}></ListingLeftTop>
        <ListingLeftBody listing={listing}></ListingLeftBody>
    </div>
  );
};

export default ListingLeftCol;
