import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import StatusFilter from '../../components/applications/list/application-status-filter';
import ApplicationSearch from '../../components/applications/list/application-search-bar';
import ApplicationSorter from '../../components/applications/list/application-sort';
import ApplicationPetCard from '../../components/applications/list/application-pet-cards';

const ListApplications = () => {
    const navigate = useNavigate();
    const [applications, setApplications] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [query, setQuery] = useSearchParams();

    const handleFilterChange = (e, status) => {
        // Update the query parameter
        setQuery({
            ...query,
            application_status: status
        });
    }

    const handleSort = (e) => {
        // Update the query parameter
        setQuery({
            ...query,
            ['sort_by']: e.target.id,
        });
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        // Update the query parameter
        setQuery({
            ...query,
            [id]: value,
        });
        handleSearch(value); // Trigger the search function with each keystroke
    };

    const handleSearch = async (searchTerm) => {
        try {
            // Make request to backend with the searchTerm
            const response = await fetch(`applications/?search=${searchTerm}`);
            const data = await response.json();

            setApplications(data.results);
            setTotalPages(Math.ceil(Number(data.count) / 15));

        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    const fetchApplications = async () => {
        try {
            // Make request to backend
            const response = await fetch(`applications/`);
            const data = await response.json();

            setApplications(data.results);
            setTotalPages(Math.ceil(Number(data.count) / 15));

        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    useEffect(() => {
        fetchApplications(); // Fetch the list of Applications when the component mounts
    }, [query]);

    return (
        <>
        {/* content container */}
        <main className="mh-100 d-flex flex-column align-items-center justify-content-center">
            <div className="responsive-col">
            
                {/* search and sort header */}
                <div className="d-flex flex-row align-self-start align-items-center mt-4 w-100 justify-content-between px-3 bg-cream rounded-2">
            
                    {/* search bar */}
                    <ApplicationSearch query={query} handleSearch={handleSearch} handleInputChange={handleInputChange}/>

                    {/* filter dropdown */}
                    <StatusFilter query={query} handleFilterChange={handleFilterChange} />

                    {/* sort dropdown */}
                    <ApplicationSorter query={query} handleSort={handleSort} />

                    {/* list application collection */}
                    <div className="d-flex flex-column m-3">
                        <div className="col-md-12">
                            <div className="row align-self-center">
                                {/* {applications.map(app => (
                                        <ApplicationPetCard key={app.id} application={app} />
                                ))} */}
                                <ApplicationPetCard></ApplicationPetCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
};

export default ListApplications;