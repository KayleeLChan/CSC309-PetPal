import React, { useState } from 'react';
import ApplicationAdditionalFilters from './application-additional-filters';
import { Button } from 'react-bootstrap';

// Displays FILTERS (by status) and SEARCH PARAMS (name, location, animal, breed)
const ApplicationFilterSidebar = ({ query, handleFilterChange, handleInputChange }) => {
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
        <ApplicationAdditionalFilters searchParams={query} handleInputChange={handleInputChange} handleFilterChange={handleFilterChange}></ApplicationAdditionalFilters>
      ) : (<></>)}

    </div>
  );
};

export default ApplicationFilterSidebar;
