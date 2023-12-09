import React from 'react';
import { Container, Form, Dropdown } from 'react-bootstrap';

// This is a SORTING header
const ApplicationSortHeader = ({ query, handleSort }) => {
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
      }

    return (
        <Container fluid className="bg-primary-orange text-primary-cream p-4 mb-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
            
            <div className="d-flex flex-column flex-md-row align-items-center">
                <h2>MY APPLICATIONS</h2>
            </div>

            <Dropdown className="mt-3 mt-md-0">

                <Dropdown.Toggle variant="primary-cream" id="dropdown-basic">
                    SORT RESULTS BY
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
            
        </Container>
    );
};

export default ApplicationSortHeader;