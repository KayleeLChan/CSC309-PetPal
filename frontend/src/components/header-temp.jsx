import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-cream shadow">
            <div className="container-fluid px-3">
                <a className="navbar-brand h1 fs-1 btn-cream mb-1" href="./index.html">
                    <img src="./imgs/Logo.svg" alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-3" />
                    PetPal
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ps-5" id="navbarSupportedContent">

                    {/* Dropdown component */}
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown pe-5 d-flex flex-column">
                            <a class="nav-link dropdown-toggle h1 fs-4 btn-cream m-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Adopt
                            </a>
                            <ul class="dropdown-menu bg-primary-cream">
                                <li><a class="dropdown-item text-primary-brown" href="search.html">Adopt Now</a></li>
                                <li><a class="dropdown-item text-primary-brown" href="MrNewdles.html">Feeling Lucky?</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown pe-5 d-flex flex-column">
                            <a class="nav-link dropdown-toggle h1 fs-4 btn-cream m-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Shelter
                            </a>
                            <ul class="dropdown-menu bg-primary-cream">
                                <li><a class="dropdown-item text-primary-brown" href="search.html">Find Shelters</a></li>
                                <li><a class="dropdown-item text-primary-brown" href="shelterdetails.html">Feeling Lucky?</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* search components */}
                    <div class="w-25 pe-5 hide-lg" id="basic-addon1">
                        <ul class="nav nav-tabs" id="search-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active search-tab-link p-1 px-3" id="search-pets-tab" data-bs-toggle="pill" data-bs-target="#search-pets" type="button" role="tab" aria-controls="search-pets" aria-selected="true">Pets</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link search-tab-link p-1 px-3" id="search-shelters-tab" data-bs-toggle="pill" data-bs-target="#search-shelters" type="button" role="tab" aria-controls="search-shelters" aria-selected="false">Shelters</button>
                            </li>
                        </ul>
                        <div class="tab-content flex-fill" id="search-tabContent">
                            <div class="tab-pane input-group w-100 show active" id="search-pets" role="tabpanel" aria-labelledby="search-pets-tab" tabindex="0">
                                <div class="d-flex flex-row w-100">
                                    <div class="input-group-text p-0 rounded-end-0 rounded-top-0">
                                        <a href="search_results.html"><button type="button" class="btn btn-primary-cream">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-search" viewBox="0 0 16 16">
                                                <path
                                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                                </path>
                                            </svg>
                                        </button></a>

                                    </div>

                                    <input type="text" class="form-control rounded-start-0" placeholder="Search Pets..." aria-label="Search Pets..."
                                        aria-describedby="basic-addon1"></input>
                                </div>
                            </div>
                            <div class="tab-pane input-group w-100" id="search-shelters" role="tabpanel" aria-labelledby="search-shelters-tab" tabindex="0">
                                <div class="d-flex flex-row w-100">
                                    <div class="input-group-text p-0 rounded-end-0">
                                        <a href="search_results.html"><button type="button" class="btn btn-primary-cream">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-search" viewBox="0 0 16 16">
                                                <path
                                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                                </path>
                                            </svg>
                                        </button></a>
                                    </div>

                                    <input type="text" class="form-control rounded-start-0" placeholder="Search Shelters..." aria-label="Search Shelters..."
                                        aria-describedby="basic-addon1"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-100 pe-5 mb-3 show-md" id="basic-addon1">
                        <ul class="nav nav-tabs" id="search-tab-md" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active fs-6 p-1 px-3" id="search-pets-tab-md" data-bs-toggle="pill" data-bs-target="#search-pets-md" type="button" role="tab" aria-controls="search-pets-md" aria-selected="true">Pets</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link fs-6 p-1 px-3" id="search-shelters-tab-md" data-bs-toggle="pill" data-bs-target="#search-shelters-md" type="button" role="tab" aria-controls="search-shelters-md" aria-selected="false">Shelters</button>
                            </li>
                        </ul>
                        <div class="tab-content flex-fill" id="search-tabContent-md">
                            <div class="tab-pane input-group w-100 show active" id="search-pets-md" role="tabpanel" aria-labelledby="search-pets-tab-md" tabindex="0">
                                <div class="d-flex flex-row w-100">
                                    <div class="input-group-text p-0 rounded-end-0 rounded-top-0">
                                        <a href="search_results.html"><button type="button" class="btn btn-primary-cream">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-search" viewBox="0 0 16 16">
                                                <path
                                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                                </path>
                                            </svg>
                                        </button></a>
                                    </div>

                                    <input type="text" class="form-control rounded-start-0" placeholder="Search Pets..." aria-label="Search Pets..."
                                        aria-describedby="basic-addon1"></input>
                                </div>
                            </div>
                            <div class="tab-pane input-group w-100" id="search-shelters-md" role="tabpanel" aria-labelledby="search-shelters-tab-md" tabindex="0">
                                <div class="d-flex flex-row w-100">
                                    <div class="input-group-text p-0 rounded-end-0">
                                        <a href="search_results.html"><button type="button" class="btn btn-primary-cream">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-search" viewBox="0 0 16 16">
                                                <path
                                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                                </path>
                                            </svg>
                                        </button></a>
                                    </div>

                                    <input type="text" class="form-control rounded-start-0" placeholder="Search Shelters..." aria-label="Search Shelters..."
                                        aria-describedby="basic-addon1"></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* button components */}
                    <div class="text-primary-orange">
                        <a href="login.html"><button class="btn btn-primary-cream m-3 ms-0 shadow-sm" type="button">Log In</button></a>
                    </div>
                    <div class="text-primary-brown">
                        <a href="seekersignup.html"><button class="btn btn-primary-orange m-3 ms-0 shadow-sm" type="button">Sign Up</button></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;