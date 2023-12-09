import React from 'react';

const ListingLeftBody = ({listing}) => {
  const creationDate = new Date(listing.created_at);
  const updatedDate = new Date(listing.last_updated_at);
  const formattedCreation = creationDate.toLocaleString();
  const formattedUpdate = updatedDate.toLocaleString();

  return (
    <div className="w-90 text-start">
        <p className="m-0 fs-5">Published: {formattedCreation}</p>
        <p className="m-0 fs-5">Last Edited: {formattedUpdate}</p>
        <h1 className="fs-0 mt-3">About</h1>
        <p className="fs-3 mb-0">Personality</p>
        <p className="fs-5">{listing.personality}</p>
        <p className="fs-3 mb-0">Size</p>
        <p className="fs-5">{listing.size}</p>
        <p className="fs-3 mb-0">Good In a Home With</p>
        <p className="fs-5">{listing.good_with}</p>

        <h1 className="fs-0 mt-5">Meet {listing.name}</h1>
        <p className="mb-1 fs-5">{listing.description}</p>
      </div>
  );
};

export default ListingLeftBody;
