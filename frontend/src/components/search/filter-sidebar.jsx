import React, { useState } from 'react';
import AdditionalFilters from './additional-filters';
import { Button } from 'react-bootstrap';


const FilterSidebar = ({ query, handleFilterChange, handleInputChange }) => {
  const [additionalFiltersVisible, setAdditionalFiltersVisible] = useState(false);



  const handleToggleFilters = () => {
    setAdditionalFiltersVisible(!additionalFiltersVisible);
  };
  return (
    <div className="d-flex flex-column filter-sidebar h-50 bg-cream p-5 rounded">
      <Button className="text-decoration-underline text-center align-items-center mb-3 fs-2" variant="cream" type="button" onClick={handleToggleFilters}>
        ADDITIONAL FILTERS:
      </Button>

      {additionalFiltersVisible ? (
        <AdditionalFilters searchParams={query} handleInputChange={handleInputChange} handleFilterChange={handleFilterChange}></AdditionalFilters>
      ) : (<></>)}
    </div>
  );
};

export default FilterSidebar;
