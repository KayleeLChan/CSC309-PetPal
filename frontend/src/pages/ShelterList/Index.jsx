import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom/';
import PaginationButtons from '../../components/pagination-buttons';

function ShelterList() {

    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const [totalPages, setTotalPages] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    // useMemo to store search parameters
    const query = useMemo(
        () => ({
            page: parseInt(searchParams.get("page") ?? 1)
        }),
        [searchParams]
    );

    useEffect(() => {
        const queryParams = new URLSearchParams({
            page: query.page,
        });
        
        fetch(`http://localhost:8000/accounts/shelter/?${queryParams}`)
            .then(response => response.json())
            .then(data => {setTotalPages(
                Math.ceil(Number(data.count) / 5)
            );
            setData(data.results)});
    }, [query]);

    function handleClick(id) {
        navigate(`/shelters/${id}`)
    }

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex flex-column justify-content-center align-items-center justify-content-center bg-brown">
                    <h1 className="text-primary-cream">Our Shelters</h1>
                    <div className="d-flex flex-row align-items-center justify-content-between my-3">
                        <img className="hide-xl" src="/imgs/Group_9.svg" height="10%" width="10%" alt="paws"></img>
                        <img className="hide-xl" src="/imgs/Group_9.svg" height="10%" width="10%" alt="paws"></img>
                        <img src="/imgs/shelter.svg" width="10%" height="10%" alt="" />
                        <img className="hide-xl" src="/imgs/Group_9.svg" height="10%" width="10%" alt="paws"></img>
                        <img className="hide-xl" src="/imgs/Group_9.svg" height="10%" width="10%" alt="paws"></img>
                    </div>
                    {data.map(shelter => (
                        <>
                            <div className="d-flex flex-row align-items-center justify-content-between pt-3 ps-2 bg-primary-cream shadow w-75 rounded">
                                <div>
                                    <img src={shelter.profilepic ? shelter.profilepic : '/imgs/shelterpfp.png'} className="rounded-circle text-center" width="100px" height="100px" alt="Profile Picture" />
                                    <p className="fs-3 fw-bold text-center text-primary-brown " key={shelter.id}>{shelter.sheltername}</p>
                                </div>
                                <button type="button" className="btn btn-primary-orange m-3 shadow-sm " onClick={() => handleClick(shelter.id)} required>
                                    See Details
                                </button>
                            </div>
                            <hr />
                        </>
                    ))}
                    <PaginationButtons query={query} totalPages={totalPages} setSearchParams={setSearchParams} />
                </div>
            </div>
        </>
    );
}

export default ShelterList;