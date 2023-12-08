import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom/';



function UpdatePhoto(props) {
    const [photoPath, setPhotoPath] = useState();
    const [photo, setPhoto] = useState();
    const id = props.data.id
    const accessToken = localStorage.getItem('access_token');
    const accounttype = localStorage.getItem('accounttype');
    const [isSeeker, setIsSeeker] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()




    useEffect(() => {
        console.log("data on call", props.data.profilepic);
        if (accounttype === 'petseeker') {
            setIsSeeker(true)
        }
        if (props.data.profilepic) {
            setPhotoPath(props.data.profilepic);
        }
        else if (isSeeker) {
            setPhotoPath('/imgs/pfp.jpg')
        }
        else {
            setPhotoPath('/imgs/shelterpfp.png')
        }
    }, [props.data.profilepic]);

    const handlePhotoChange = (event) => {
        if (event.target.files[0]) {
            setPhoto(event.target.files[0]);
        }
    };

    useEffect(() => {
        console.log(photo)

        putRequest();

    }, [photo])

    const putRequest = async () => {
        const formData = new FormData();
        formData.set("profilepic", photo)

        if (!accessToken) {
            navigate(`/accounts`);
            return;
        }

        fetch(`http://127.0.0.1:8000/accounts/${id}/profile/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body: formData
        })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    getRequest();
                }
                return response.json();
            })
            // add in proper error displays
            .catch(error => {
                console.error(error);
                setError(error.toString());
            });
    }

    const getRequest = async () => {
        try {
            const profile = await fetch(`http://127.0.0.1:8000/accounts/${id}/profile/`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            const data = await profile.json();
            setPhotoPath(data.profilepic);
        } catch (error) {
            console.error('Error fetching', error);
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mb-5">
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                <img src={photoPath} className="rounded-circle text-center" width="300px" height="300px" alt="Profile Picture" />
            </div>
            <form>
                <div className="text-primary-cream">
                    <label htmlFor="profilepic">Change Profile Photo</label>
                    <div>
                        <input type="file" className="form-control bg-primary-cream font-plain" id="profilepic" onChange={handlePhotoChange} />
                    </div>
                </div>
            </form>
        </div>
)};

export default UpdatePhoto;