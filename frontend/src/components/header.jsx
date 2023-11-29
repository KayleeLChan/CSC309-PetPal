import React from 'react';
import { Navbar, Nav, NavDropdown, Button, InputGroup, FormControl, Tab, Tabs } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" bg="cream" className="shadow">
      <Navbar.Brand href="./index.html" className="h1 fs-1 btn-cream mb-1">
        <img
          src="../public/imgs/Logo.svg"
          alt="Logo"
          width="50"
          height="50"
          className="d-inline-block align-text-top me-3"
        />
        PetPal
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent" className="ps-5">
        <Nav className="me-auto mb-2 mb-lg-0">
          <NavDropdown title="Adopt" id="adopt-dropdown" className="h1 fs-4 btn-cream m-0">
            <NavDropdown.Item href="search.html">Adopt Now</NavDropdown.Item>
            <NavDropdown.Item href="MrNewdles.html">Feeling Lucky?</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Shelter" id="shelter-dropdown" className="h1 fs-4 btn-cream m-0">
            <NavDropdown.Item href="search.html">Find Shelters</NavDropdown.Item>
            <NavDropdown.Item href="shelterdetails.html">Feeling Lucky?</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="w-25 pe-5 hide-lg" id="basic-addon1">
          <Tabs defaultActiveKey="search-pets" id="search-tab">
            <Tab eventKey="search-pets" title="Pets">
              <div className="d-flex flex-row w-100">
                <Button variant="primary-cream">
                  <a href="search_results.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </a>
                </Button>
                <FormControl type="text" placeholder="Search Pets..." aria-label="Search Pets..." />
              </div>
            </Tab>
            <Tab eventKey="search-shelters" title="Shelters">
              <div className="d-flex flex-row w-100">
                <Button variant="primary-cream">
                  <a href="search_results.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </a>
                </Button>
                <FormControl type="text" placeholder="Search Shelters..." aria-label="Search Shelters..." />
              </div>
            </Tab>
          </Tabs>
        </div>


        <div className="w-100 pe-5 mb-3 show-md" id="basic-addon1-md">
          <Tabs defaultActiveKey="search-pets-md" id="search-tab-md">
            <Tab eventKey="search-pets-md" title="Pets">
              <div className="d-flex flex-row w-100">
                <Button variant="primary-cream">
                  <a href="search_results.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </a>
                </Button>
                <FormControl type="text" placeholder="Search Pets..." aria-label="Search Pets..." />
              </div>
            </Tab>
            <Tab eventKey="search-shelters-md" title="Shelters">
              <div className="d-flex flex-row w-100">
                <Button variant="primary-cream">
                  <a href="search_results.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </a>
                </Button>
                <FormControl type="text" placeholder="Search Shelters..." aria-label="Search Shelters..." />
              </div>
            </Tab>
          </Tabs>
        </div>
        {/* <div className="w-100 pe-5 mb-3 show-md">
      <Tab.Container id="search-tab-md" defaultActiveKey="search-pets-md">
        <Nav variant="tabs" className="nav-tabs" role="tablist">
          <Nav.Item>
            <Nav.Link eventKey="search-pets-md" className="fs-6 p-1 px-3" role="tab" aria-selected="true">
              Pets
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="search-shelters-md" className="fs-6 p-1 px-3" role="tab" aria-selected="false">
              Shelters
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="flex-fill" id="search-tabContent-md">
          <Tab.Pane eventKey="search-pets-md" className="input-group w-100 show active">
            <div className="d-flex flex-row w-100">
              <InputGroup.Text className="p-0 rounded-end-0 rounded-top-0">
                <a href="search_results.html">
                  <Button variant="primary-cream">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </Button>
                </a>
              </InputGroup.Text>
              <FormControl type="text" className="form-control rounded-start-0" placeholder="Search Pets..." aria-label="Search Pets..." />
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="search-shelters-md" className="input-group w-100">
            <div className="d-flex flex-row w-100">
              <InputGroup.Text className="p-0 rounded-end-0">
                <a href="search_results.html">
                  <Button variant="primary-cream">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </Button>
                </a>
              </InputGroup.Text>
              <FormControl type="text" className="form-control rounded-start-0" placeholder="Search Shelters..." aria-label="Search Shelters..." />
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div> */}

        <div className="text-primary-orange">
          <a href="login.html">
            <Button variant="primary-cream" className="m-3 ms-0 shadow-sm" type="button">
              Log In
            </Button>
          </a>
        </div>
        <div className="text-primary-brown">
          <a href="seekersignup.html">
            <Button variant="primary-orange" className="m-3 ms-0 shadow-sm" type="button">
              Sign Up
            </Button>
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
