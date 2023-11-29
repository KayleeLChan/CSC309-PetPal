import React from 'react';
import { Tabs, Tab, Button, FormControl } from 'react-bootstrap';

const NavbarToggleSearch = () => {
    return (
        <div className="w-100 pe-5 mb-3 show-md" id="basic-addon1-md">
          <Tabs defaultActiveKey="search-pets-md" id="search-tab-md" transition={false}>
            <Tab eventKey="search-pets-md" title="Pets" tabClassName="fs-6 search-tab-link p-1 px-3">
              <div className="d-flex flex-row w-100">
                <Button variant="primary-cream" className="rounded-end-0 rounded-top-0 search-btn">
                  <a href="search_results.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </a>
                </Button>
                <FormControl type="text" placeholder="Search Pets..." aria-label="Search Pets..." className="rounded-start-0"/>
              </div>
            </Tab>
            <Tab eventKey="search-shelters-md" title="Shelters" tabClassName="fs-6 search-tab-link p-1 px-3">
              <div className="d-flex flex-row w-100">
                <Button variant="primary-cream" className="rounded-end-0 search-btn">
                  <a href="search_results.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </a>
                </Button>
                <FormControl type="text" placeholder="Search Shelters..." aria-label="Search Shelters..." className="rounded-start-0"/>
              </div>
            </Tab>
          </Tabs>
        </div>
    );
}

export default NavbarToggleSearch;