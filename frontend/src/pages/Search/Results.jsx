import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PaginationButtons from '../../components/pagination-buttons';
import SearchHeader from '../../components/search/search-header';
import FilterSidebar from '../../components/search/filter-sidebar';
import PetCard from '../../components/custom-cards/pet-card.jsx';

const SearchResults = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [listings, setListings] = useState([]);
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

        fetchListings();
    };

    // // useMemo to store search parameters
    const query = useMemo(
        () => ({
            page: parseInt(searchParams.get("page") ?? 1),
            name: searchParams.get("name") ?? "",
            location: searchParams.get("location") ?? "",
            colour: searchParams.get("colour") ?? "",
            breed: searchParams.get("breed") ?? "",
            animal: searchParams.get("animal") ?? "",
            status: searchParams.get("status") ?? "available",
            age: searchParams.get("age") ?? "all",
            size: searchParams.get("size") ?? "all",
            sex: searchParams.get("sex") ?? "all",
            shelter: searchParams.get("shelter") ?? "",
            sort_by: searchParams.get("sort_by") ?? "",
        }),
        [searchParams]
    );

    useEffect(() => {
        // Fetch the list of notifications when the component mounts
        fetchListings();
    }, [query]);

    const fetchListings = async () => {
        try {
            setLoading(true);
            // Set queryParams to pass into request
            const queryParams = new URLSearchParams({
                page: query.page,
                name: query.name,
                location: query.location,
                colour: query.colour,
                breed: query.breed,
                animal: query.animal,
                status: query.status,
                age: query.age,
                size: query.size,
                sex: query.sex,
                shelter: query.shelter,
                sort_by: query.sort_by,
            });

            // Make request to backend
            const response = await fetch(`http://localhost:8000/listings/?${queryParams}`)
            const data = await response.json();
            setListings(data.results);
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
                    <SearchHeader query={query} handleSort={handleSort} />
                    <div className="d-flex row-to-column w-100">
                        <FilterSidebar query={query} handleInputChange={handleInputChange} handleFilterChange={handleFilterChange}></FilterSidebar>
                        <div className="d-flex flex-column w-100">
                            <div className="listing-grid">
                                {listings.map((listing) => (
                                    <>
                                        <PetCard listing={listing}></PetCard>
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

export default SearchResults;