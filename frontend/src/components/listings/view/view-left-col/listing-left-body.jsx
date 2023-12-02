import React from 'react';

const ListingLeftBody = ({listing}) => {
  return (
    <div className="w-90 text-start">
        <p className="m-0 fs-5">Published: {listing.created_at}, Last Edited: {listing.last_updated_at}</p>
        <h1 className="fs-0 mt-3">About</h1>
        <p className="fs-3 mb-0">Personality</p>
        <p className="fs-5">{listing.personality}</p>
        <p className="fs-3 mb-0">Size</p>
        <p className="fs-5">{listing.size} cm</p>
        <p className="fs-3 mb-0">Training</p>
        <p className="fs-5">{listing.training}</p>
        <p className="fs-3 mb-0">Health</p>
        <p className="fs-5">{listing.health}</p>
        <p className="fs-3 mb-0">Good In a Home With</p>
        <p className="fs-5">{listing.good_with}</p>
        <p className="fs-3 mb-0">Prefers a Home Without</p>
        <p className="fs-5">{listing.good_without}</p>

        <h1 className="fs-0 mt-5">Meet Mr. Newdles</h1>
        <p className="mb-1 fs-5">{listing.description}</p>
      </div>
  );
};

export default ListingLeftBody;
