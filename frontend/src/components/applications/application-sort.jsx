import React from 'react';
import { Dropdown } from 'react-bootstrap';

const ApplicationSorter = ({ query, handleSort }) => {
    let sort = "";
    switch(query.sort_by) {
        case "name":
          sort = "A-Z";
          break;
        case "-name":
            sort = "Z-A";
          break;
        case "-created_at":
            sort = "Newest-Oldest";
          break;
          case "created_at":
            sort = "Oldest-Newest";
          break;
        default:
          sort = "";
      };

    return (
        <Dropdown className="d-flex flex-row">
            <div className="d-flex align-items-center justify-content-center">
            <p className="text-primary-cream h3 mb-0">Sort by:</p>
        </div>

        <Dropdown.Toggle variant="primary-cream" id="dropdown-basic" className="form-select form-select-sm font-plain w-auto mx-2 border border-0">
            (select category)
            <br className="show-md" />
            <span className="ms-2 text-decoration-underline">{sort}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={handleSort} className="text-primary-brown" id="name">A-Z</Dropdown.Item>
            <Dropdown.Item onClick={handleSort} className="text-primary-brown" id="-name">Z-A</Dropdown.Item>
            <Dropdown.Item onClick={handleSort} className="text-primary-brown" id="-created_at">Newest-Oldest</Dropdown.Item>
            <Dropdown.Item onClick={handleSort} className="text-primary-brown" id="created_at">Oldest-Newest</Dropdown.Item>
        </Dropdown.Menu>

        </Dropdown>
    );
};

export default ApplicationSorter;