import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsTop from '../../components/shelterdetails/shelterTop';

function ShelterDetails() {
    const [shelterData, setData] = useState([]);
    const { id } = useParams();
    const accessToken = localStorage.getItem('access_token');
  
    useEffect(() => {
      fetch(`http://localhost:8000/accounts/shelter/${id}/details/`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(response => response.json())
        .then(data => setData(data));
    }, [id, accessToken]);

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