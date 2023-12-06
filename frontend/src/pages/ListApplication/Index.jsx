import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
    const navigate = useNavigate();
    const [applications, setApplications] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleInputChange = (e) => {
        setSearchParams({
            ...query,
            [e.target.id]: e.target.value,
        });
    };

    const handleFilterChange = (e, field) => {
        setSearchParams({
            ...query,
            [field]: e,
        });
    }

    const handleSort = (e) => {
        setSearchParams({
            ...query,
            ['sort_by']: e.target.id,
        });
    fetchApplications();
    };

    // Filter applications based on the terms that are serached
    const updateApplications = (searchTerm) => {
        const filteredApplications = filterFunction(applications, searchTerm);
        setApplications(filteredApplications);
    };

    // Filter applications if they include the term that is searched
    const filterFunction = (applications, term) => {
        return apps.filter(applications => applications.pet_listing_name.toLowerCase().includes(term.toLowerCase()));
    };
    
    // Fetch the list of Applications when the component mounts
    useEffect(() => {
        fetchApplications();
    }, [query]);

    const fetchApplications = async () => {
        try {
            // Make request to backend
            console.log(`applications/`);
            const response = await fetch(`applications/`)
            const data = await response.json();
            
            setApplications(data.results);
            console.log(data.count)

            setTotalPages(
                Math.ceil(Number(data.count) / 15)
            );

        } catch (error) {
            setLoading(false);
            console.error('Error fetching applications:', error);
        }
    };


    return (
        <>
        {/* content container */}
        <main className="mh-100 d-flex flex-column align-items-center justify-content-center">
            <div className="responsive-col">
            
                {/* search and sort header */}
                <div className="d-flex flex-row align-self-start align-items-center mt-4 w-100 justify-content-between px-3 bg-cream rounded-2">
            
                    {/* search bar */}
                    <ApplicationSearch> query handleSort </ApplicationSearch>

                    {/* sort dropdown */}
                    <ApplicationSorter>query handleSort</ApplicationSorter>

                    {/* application collection */}
                    <div className="d-flex flex-column m-3">
                        <div className="col-md-12">
                            <div className="row align-self-center">
                                <ApplicationPetCard> </ApplicationPetCard>
                                <ApplicationPetCard> </ApplicationPetCard>
                                <ApplicationPetCard> </ApplicationPetCard>
                                <ApplicationPetCard> </ApplicationPetCard>
                                <ApplicationPetCard> </ApplicationPetCard>
                                <ApplicationPetCard> </ApplicationPetCard>
                                <ApplicationPetCard> </ApplicationPetCard>
                                <ApplicationPetCard> </ApplicationPetCard>
                                <ApplicationPetCard> </ApplicationPetCard>
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