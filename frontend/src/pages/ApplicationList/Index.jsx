import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import ApplicationFilterSidebar from '../../components/applications/list/application-filter-sidebar';
import ApplicationSortHeader from '../../components/applications/list/application-sort-header';
import ApplicationPetCard from '../../components/applications/list/application-pet-cards';
import PaginationButtons from '../../components/pagination-buttons';

const ListApplications = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
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

    // useMemo to store search parameters
    const query = useMemo(
        () => ({
            page: parseInt(searchParams.get("page") ?? 1),

            name: searchParams.get("name") ?? "",
            location: searchParams.get("location") ?? "",
            animal: searchParams.get("animal") ?? "",
            breed: searchParams.get("breed") ?? "",

            status: searchParams.get("status") ?? "available",
            sort_by: searchParams.get("sort_by") ?? "",
        }),
        [searchParams]
    );

    useEffect(() => {
        fetchApplications();
    }, [query]);

    const fetchApplications = async () => {
        try {
            setLoading(true);
            // Set queryParams to pass into request
            const queryParams = new URLSearchParams({
                page: query.page,

                name: query.name,
                location: query.location,
                animal: query.animal,
                breed: query.breed,

                status: query.status,
                sort_by: query.sort_by,
            });

            // Make request to backend
            console.log(`http://localhost:8000/applications/?${queryParams}`);
            const response = await fetch(`http://localhost:8000/applications/?${queryParams}`)
            const data = await response.json();
            setApplications(data.results);
            console.log(data.count)

            setTotalPages(
                Math.ceil(Number(data.count) / 15)
            );

            setLoading(false);

        } catch (error) {
            setLoading(false);
            console.error('Error fetching notifications:', error);
        }
    };

    return (
        <>
            <div data-bs-theme="petpal">

                <div className="main h-100">

                    <ApplicationSortHeader query={query} handleSort={handleSort} />

                    <div className="d-flex row-to-column w-100">

                        <ApplicationFilterSidebar query={query} handleInputChange={handleInputChange} handleFilterChange={handleFilterChange}></ApplicationFilterSidebar>
                        
                        <div className="d-flex flex-column w-100">
                            
                            <div className="listing-grid">

                                {applications.map((application) => (
                                    <>
                                        <ApplicationPetCard application={application}></ApplicationPetCard>
                                    </>
                                ))}
                            </div>


                            <div className="d-flex w-100 justify-content-center">
                                <PaginationButtons query={query} totalPages={totalPages} setSearchParams={setSearchParams} />
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListApplications;