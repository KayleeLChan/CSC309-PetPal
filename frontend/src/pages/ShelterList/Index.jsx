import React from 'react';
import { useState, useEffect } from 'react';

function ShelterList() {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8000/accounts/shelter/all/')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);


    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex flex-column justify-content-center align-items-center justify-content-center bg-primary-orange">
                    <h1>Our Shelters</h1>
                    <img src="/imgs/shelter.svg" width="10%" height="10%" alt =""/>
                    {data.map(shelter =>(
                        <>
                        <div className="d-flex flex-row pt-5 pb-5">
                        <p className="pe-5 fs-2">{shelter.sheltername}</p>
                        <p className="fs-2">id:{shelter.id}</p>
                        </div>

                        </>
                    ))}
                </div>
                </div>
        </>
    );
}

export default ShelterList;