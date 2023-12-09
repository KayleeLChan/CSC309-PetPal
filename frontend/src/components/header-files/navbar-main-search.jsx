import React, { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavbarMainSearch = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState('');

  const handleInputChange = (event) => {
    setSearchParams(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/listings/?name=${searchParams}`)
  };

  return (
    <div className="w-25 pe-1 hide-lg" id="basic-addon1">
      <div className="d-flex flex-row w-100">
        <Button
          variant="primary-cream"
          className="rounded-end-0 search-btn"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            ></path>
          </svg>
        </Button>
        <FormControl
          type="text"
          placeholder="Search Pets..."
          aria-label="Search Pets..."
          className="rounded-start-0"
          value={searchParams}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default NavbarMainSearch;