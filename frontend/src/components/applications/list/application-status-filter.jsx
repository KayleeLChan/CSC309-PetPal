import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const StatusFilter = ({ query, handleFilterChange}) => {
    const selectedStatus = query.get('application_status'); 

    return ( 
        <Dropdown className="d-flex flex-row">

        <div className="d-flex align-items-center justify-content-center">
            <p className="text-primary-cream h3 mb-0">Filter by Status:</p>
        </div>

        <Dropdown.Toggle variant="primary-cream" id="dropdown-basic" className="form-select form-select-sm font-plain w-auto mx-2 border border-0">
            {selectedStatus || 'Select Status'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilterChange('Accepted')} className="text-primary-brown">Accepted</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange('Denied')} className="text-primary-brown">Denied</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange('Pending')} className="text-primary-brown">Pending</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange('Withdrawn')} className="text-primary-brown">Withdrawn</Dropdown.Item>
        </Dropdown.Menu>

        </Dropdown>
    );
};

export default StatusFilter;