import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom/';

function ShelterList() {

    const [data, setData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
      fetch('http://localhost:8000/accounts/shelter/all/')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    function handleClick(id){
        navigate(`/accounts/shelter/${id}/details`)
    }


    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex flex-column justify-content-center align-items-center justify-content-center bg-primary-orange">
                    <h1>Our Shelters</h1>
                    <img src="/imgs/shelter.svg" width="10%" height="10%" alt =""/>
                    {data.map(shelter =>(
                        <>
                        <div className="d-flex flex-row pt-3 ps-2">
                        <p className="pe-5 fs-2"key={shelter.id}>{shelter.sheltername}</p>
                        <p className="fs-2">id:{shelter.id}</p>
                        <button type="button" className="btn btn-primary-cream m-3 shadow-sm" onClick={() => handleClick(shelter.id)} required>See Details</button>
                        </div>

                        </>
                    ))}
                </div>
                </div>
        </>
    );
}

export default ShelterList;