import React from 'react';
import { Container, Form, Dropdown } from 'react-bootstrap';

const SearchHeader = ({ query, handleSort }) => {
    let sort = "";
    switch(query.sort_by) {
        case "name":
          sort = "A-Z";
          break;
        case "-name":
            sort = "Z-A";
          break;
        case "created_at":
            sort = "Newest-Oldest";
          break;
          case "-created_at":
            sort = "Oldest-Newest";
          break;
        default:
          sort = "";
      }

    return (
        <Container fluid className="bg-dark-brown text-primary-cream p-4 mb-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="d-flex flex-column flex-md-row align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search me-3" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
                <h2 className="mb-0">Finding ANY PET Near TORONTO...</h2>
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
                    <Dropdown.Item onClick={handleSort} className="text-primary-brown" id="created_at">Newest-Oldest</Dropdown.Item>
                    <Dropdown.Item onClick={handleSort} className="text-primary-brown" id="-created_at">Oldest-Newest</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    );
};

export default SearchHeader;