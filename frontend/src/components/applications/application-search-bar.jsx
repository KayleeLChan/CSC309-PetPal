import React from 'react';
import { Container, Form, Dropdown } from 'react-bootstrap';

const ApplicationSearch = ({ query, handleSearch, handleInputChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        // Trigger search function dynamically as the user types
        handleSearch(value);
    };

    return (
        <Container fluid className="bg-brown text-primary-cream p-4 mb-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex flex-column flex-md-row align-items-center">
            
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>

            <input
                type="text"
                className="form-control"
                placeholder="Search Application..."
                aria-label="Search Application..."
                aria-describedby="basic-addon1"
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
        </Container>
    );
};

export default ApplicationSearch;