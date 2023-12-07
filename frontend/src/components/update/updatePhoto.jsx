import React from 'react';
import { useState, useEffect } from 'react';



function UpdatePhoto(props) {
    const [photoPath, setPhotoPath] = useState();
    const [photo, setPhoto] = useState();
    const id = props.data.id
    const accessToken = localStorage.getItem('access_token');
    const [error, setError] = useState("")

    useEffect(() => {
        console.log("data on call", props.data.profilepic);
        if (props.data) {
            setPhotoPath(props.data.profilepic);
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
            }});
            const data = await profile.json();
            setPhotoPath(data.profilepic);
        } catch (error) {
            console.error('Error fetching', error);
        }
    }

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">

                    <div className="paddingify">
                        <div className="w-100 h-100">
                            <img src={photoPath} className="rounded-circle" width="300px" height="300px" alt="Profile Picture" />
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
                </div>
            </div>
        </>
    );
}

export default UpdatePhoto;