import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsTop from '../../components/shelterdetails/shelterTop';

const [shelterData, setData] = useState([]);
const { id } = useParams();

useEffect(() => {
    fetch(`http://localhost:8000/accounts/shelter/${id}/details/`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [id]);

function ShelterDetails() {
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">
                    <DetailsTop shelterData={shelterData}/>
                </div>
            </div>
        </>
    );
}

export default ShelterDetails;