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

    const displayUpdate = () => {
        setIsComponentVisible(!isComponentVisible);
    };
 
    useEffect(() => {
        console.log("useeffect")
        if (!accessToken) {
          navigate(`/accounts`);
          return;
        }
      
        fetch(`http://localhost:8000/accounts/${id}/profile/`, {
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


      function handleSave(event){
        console.log("save")
        const formData = new FormData(event.target);
        
        fetch(`http://localhost:8000/accounts/${id}/profile/`, {
            method: 'PUT',
            body: formData
            })
    
        .then(response => {
            console.log(response);
            return response.json();
        })
        // add in proper error displays
        .catch(error => {
            console.error(error);
            setError(error.toString());
        });
    }
      
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">
                <div>
                    {isComponentVisible ? <ViewSeekerProfile data={data} displayUpdate={displayUpdate} /> : <UpdateSeekerProfile data={data} displayUpdate={displayUpdate} handleSave={handleSave}/>}
                </div>
                </div>
            </div>
        </>
    );
}

export default UpdateSeeker;
