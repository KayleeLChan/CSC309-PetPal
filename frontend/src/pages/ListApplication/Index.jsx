import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import React from 'react';

const ListApplications = ({}) => {






    return (

<>
  {/* content container */}
  <main className="mh-100 d-flex flex-column align-items-center justify-content-center">
    <div className="responsive-col">
      {/* shelter header */}
      <div className="d-flex flex-row align-self-start align-items-center mt-4 w-100 justify-content-between px-3 bg-cream rounded-2">
        {/* search bar */}
        <div className="input-group w-auto my-4" id="basic-addon1">
          <span className="input-group-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Shelter..."
            aria-label="Search Shelter..."
            aria-describedby="basic-addon1"
          />
        </div>
        {/* sort dropdown */}
        <div className="d-flex flex-row">
          <div className="d-flex align-items-center justify-content-center">
            <p className="text-primary-cream h3 mb-0">Sort by: </p>
          </div>
          <select
            className="form-select form-select-sm font-plain w-auto mx-2 border border-0"
            aria-label="Default select example"
          >
            <option selected="">(select category)</option>
            <option value="kids">Alphabetical</option>
            <option value="no kids">Nearest</option>
            <option value="no kids">Farthest</option>
            <option value="no kids">Youngest</option>
            <option value="no kids">Oldest</option>
          </select>
        </div>
      </div>
      {/* pet collection */}
      <div className="d-flex flex-column m-3">
        <div className="col-md-12">
          <div className="row align-self-center">
            <div className="col-lg-4 col-md-6 mb-5 search_card">
              <div className="card card-click shadow vh-50 m-3 rounded overflow-auto">
                <h2 className="px-4 pt-3 fs-4">Zawg</h2>
                <img
                  src="imgs/Zawg.png"
                  className="card-img-top h-100 py-0 rounded-1"
                  alt="Mr. Newdles"
                />
                <div className="card-body px-4 d-flex flex-column align-items-center text-center">
                  <h3 className="card-title fs-4">Breed</h3>
                  <p className="card-text">Man Dog</p>
                  <h3 className="card-title fs-4">Personality</h3>
                  <p className="card-text">Brampton</p>
                  <a href="./zawg.html" className="stretched-link" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 search_card">
              <div className="card card-click shadow vh-50 m-3 rounded overflow-auto">
                <h2 className="px-4 pt-3 fs-4">Gilbert</h2>
                <img
                  src="imgs/Gilbert.png"
                  className="card-img-top h-100 py-0 rounded-1"
                  alt="Mr. Newdles"
                />
                <div className="card-body px-4 d-flex flex-column align-items-center text-center">
                  <h3 className="card-title fs-4">Breed</h3>
                  <p className="card-text">Sheeb</p>
                  <h3 className="card-title fs-4">Personality</h3>
                  <p className="card-text">Goofy</p>
                  <a href="./zawg.html" className="stretched-link" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 search_card">
              <div className="card card-click shadow vh-50 m-3 rounded overflow-auto">
                <h2 className="px-4 pt-3 fs-4">Lulu</h2>
                <img
                  src="imgs/lulu.jpg"
                  className="card-img-top h-100 py-0 rounded-1"
                  alt="Mr. Newdles"
                />
                <div className="card-body px-4 d-flex flex-column align-items-center text-center">
                  <h3 className="card-title fs-4">Breed</h3>
                  <p className="card-text">Pig Toy</p>
                  <h3 className="card-title fs-4">Personality</h3>
                  <p className="card-text">Buddhist</p>
                  <a href="./zawg.html" className="stretched-link" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 search_card">
              <div className="card card-click shadow vh-50 m-3 rounded overflow-auto">
                <h2 className="px-4 pt-3 fs-4">Sawyer</h2>
                <img
                  src="imgs/sawyer.jpg"
                  className="card-img-top h-100 py-0 rounded-1"
                  alt="Mr. Newdles"
                />
                <div className="card-body px-4 d-flex flex-column align-items-center text-center">
                  <h3 className="card-title fs-4">Breed</h3>
                  <p className="card-text">Talented Cat</p>
                  <h3 className="card-title fs-4">Personality</h3>
                  <p className="card-text">Iconic</p>
                  <a href="./zawg.html" className="stretched-link" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 search_card">
              <div className="card card-click shadow vh-50 m-3 rounded overflow-auto">
                <h2 className="px-4 pt-3 fs-4">Store Owner</h2>
                <img
                  src="imgs/yogurtPan.jpg"
                  className="card-img-top h-100 py-0 rounded-1"
                  alt="Mr. Newdles"
                />
                <div className="card-body px-4 d-flex flex-column align-items-center text-center">
                  <h3 className="card-title fs-4">Breed</h3>
                  <p className="card-text">Sheeb</p>
                  <h3 className="card-title fs-4">Personality</h3>
                  <p className="card-text">Business-Savvy</p>
                  <a href="./zawg.html" className="stretched-link" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 search_card">
              <div className="card card-click shadow vh-50 m-3 rounded overflow-auto">
                <h2 className="px-4 pt-3 fs-4">Hunter</h2>
                <img
                  src="imgs/clubPenguin.jpg"
                  className="card-img-top h-100 py-0 rounded-1"
                  alt="Mr. Newdles"
                />
                <div className="card-body px-4 d-flex flex-column align-items-center text-center">
                  <h3 className="card-title fs-4">Breed</h3>
                  <p className="card-text">Digital Penguin</p>
                  <h3 className="card-title fs-4">Personality</h3>
                  <p className="card-text">Cool</p>
                  <a href="./zawg.html" className="stretched-link" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 search_card">
              <div className="card card-click shadow vh-50 m-3 rounded overflow-auto">
                <h2 className="px-4 pt-3 fs-4">Geasull</h2>
                <img
                  src="imgs/seagull.jpg"
                  className="card-img-top h-100 py-0 rounded-1"
                  alt="Mr. Newdles"
                />
                <div className="card-body px-4 d-flex flex-column align-items-center text-center">
                  <h3 className="card-title fs-4">Breed</h3>
                  <p className="card-text">Seagull</p>
                  <h3 className="card-title fs-4">Personality</h3>
                  <p className="card-text">Angry</p>
                  <a href="./zawg.html" className="stretched-link" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 search_card">
              <div className="card card-click shadow vh-50 m-3 rounded overflow-auto">
                <h2 className="px-4 pt-3 fs-4">Chiitan</h2>
                <img
                  src="imgs/chiitan.jpg"
                  className="card-img-top h-100 py-0 rounded-1"
                  alt="Mr. Newdles"
                />
                <div className="card-body px-4 d-flex flex-column align-items-center text-center">
                  <h3 className="card-title fs-4">Breed</h3>
                  <p className="card-text">Otter Mascot</p>
                  <h3 className="card-title fs-4">Personality</h3>
                  <p className="card-text">Unhinged</p>
                  <a href="./zawg.html" className="stretched-link" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5 search_card">
              <div className="card card-click shadow vh-50 m-3 rounded overflow-auto">
                <h2 className="px-4 pt-3 fs-4">Mr. Newdles</h2>
                <img
                  src="imgs/MrNewdles.png"
                  className="card-img-top h-100 py-0 rounded-1"
                  alt="Mr. Newdles"
                />
                <div className="card-body px-4 d-flex flex-column align-items-center text-center">
                  <h3 className="card-title fs-4">Breed</h3>
                  <p className="card-text">Hog Nose Snake</p>
                  <h3 className="card-title fs-4">Personality</h3>
                  <p className="card-text">Loving</p>
                  <a href="./zawg.html" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</>














    );






};





export default ListApplications;