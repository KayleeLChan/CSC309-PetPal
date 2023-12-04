import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/';
import DetailsTop from '../../components/shelterdetails/shelterTop';
import Mission from '../../components/shelterdetails/missionPolicy';

function ShelterDetails() {
  const [shelterData, setData] = useState([]);
  const { id } = useParams();
  const accessToken = localStorage.getItem('access_token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate(`/accounts`);
      return;
    }

    fetch(`http://localhost:8000/accounts/shelter/${id}/details/`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => setData(data));
  }, [id, accessToken, navigate]);

  return (
    <>
      <div data-bs-theme="petpal">
        <div className="main">
          <DetailsTop shelterData={shelterData} />
          <Mission shelterData={shelterData} />
        </div>
      </div>
    </>
  );
}


export default ShelterDetails;