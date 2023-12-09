import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UpdateShelterProfile from '../../components/update/updateshelter';
import ViewShelterProfile from '../../components/update/viewshelterprofile';

function UpdateShelter(){
    const { id } = useParams();
    const accessToken = localStorage.getItem('access_token');
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [isComponentVisible, setIsComponentVisible] = useState(true);
    
    function handleDelete(){
      fetch(`http://localhost:8000/accounts/${id}/deletion/`, {
      method: 'DELETE',
      })
      .then((response) => {
      console.log(response);
      if (response.ok) {
      console.log('Item deleted successfully');
      }
      })
      .catch((error) => {
      console.error(error);
      });
    };



    const displayUpdate = () => {
        setIsComponentVisible(!isComponentVisible);
    };
 
    useEffect(() => {
        console.log("useeffect")
        if (!accessToken) {
          navigate(`/accounts`);
          return;
        }
      
        fetch(`http://127.0.0.1:8000/accounts/${id}/profile/`, {
          method: 'GET',  
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })
          .then(response =>{
            if(response.status === 403){
              navigate('/unauthorized')
            }
            return response.json()
          })
          .then(data => {
            setData(data);
            console.log(data);
          })
          .catch(error => {
            console.error(error);
            setError(error);
          });
      }, [id, accessToken, isComponentVisible]);

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">
                <div>
                    {isComponentVisible ? <ViewShelterProfile data={data} displayUpdate={displayUpdate} handleDelete={handleDelete} /> : <UpdateShelterProfile data={data} displayUpdate={displayUpdate}/>}
                </div>
                </div>
            </div>
        </>
    );
}

export default UpdateShelter;
