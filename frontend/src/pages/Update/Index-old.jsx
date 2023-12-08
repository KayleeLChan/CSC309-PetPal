import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ViewSeekerProfile from '../../components/update/viewseekerprofile';
import UpdateSeekerProfile from '../../components/update/updateseeker';

function UpdateSeeker(){
    const { id } = useParams();
    const accessToken = localStorage.getItem('access_token');
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [isComponentVisible, setIsComponentVisible] = useState(true);
    

function handleDelete(){
      fetch(`http://localhost:8000/accounts/${id}/deletion/`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
      })
      .then((response) => {
      console.log(response);
      if (response.ok) {
      console.log('Item deleted successfully');
      navigate('/accounts')
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
          .then(response => response.json())
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
                    {isComponentVisible ? <ViewSeekerProfile data={data} displayUpdate={displayUpdate} handleDelete={handleDelete}/> : <UpdateSeekerProfile data={data} displayUpdate={displayUpdate}/>}
                </div>
                </div>
            </div>
        </>
    );
}

export default UpdateSeeker;
