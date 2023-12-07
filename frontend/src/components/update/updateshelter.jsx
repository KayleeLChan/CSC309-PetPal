import React from 'react';
import { useState } from 'react';


function UpdateShelterProfile(props) {
    console.log(props.data)
    console.log(props.data.id)
    const id = props.data.id
    console.log(id)
    const [error, setError] = useState("")
    const accessToken = localStorage.getItem('access_token');

    
    function handleSave(event){
        event.preventDefault();
        console.log("save")
        const formData = new FormData(event.target);
        for (const [key, value] of formData.entries()) {
            if (!value) {
              formData.delete(key);
            }
        }
        console.log(`http://127.0.0.1:8000/accounts/${id}/profile/`)
    
    
        fetch(`http://127.0.0.1:8000/accounts/${id}/profile/`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${accessToken}`},
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
                    <div className="mh-100 d-flex flex-row mx-0 justify-content-center">
                    <div className="d-flex w-75 flex-column pt-5 align-items-center justify-center bg-primary-brown">
                        <form onSubmit={handleSave}>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="username">Username</label>
                            <div className="col-sm-10">
                            <input type="text" name="username" className="form-control bg-primary-cream font-plain" id="username" placeholder="username123" />
                            </div>
                        </div> 
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="password">Password</label>
                            <div className="col-sm-10">
                            <input type="password" name="password" className="form-control bg-primary-cream font-plain" id="password" />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="verifypassword">Verify Password</label>
                            <div className="col-sm-10">
                            <input type="password" name="confirmpassword" className="form-control bg-primary-cream font-plain" id="verifypassword" />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="email">Email</label>
                            <div className="col-sm-10">
                            <input type="email" name="email" className="form-control bg-primary-cream font-plain" id="email" />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="phonenumber">Phone Number</label>
                            <div className="col-sm-10">
                            <input type="text" name="phonenumber" className="form-control bg-primary-cream font-plain" id="phonenumber" />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="animal">Shelter Name</label>
                            <div className="col-sm-10">
                            <input type="text" name="sheltername" className="form-control bg-primary-cream font-plain" id="animal"/>
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="location">Shelter Address</label>
                            <div className="col-sm-10">
                            <input type="text" name="companyaddress" className="form-control bg-primary-cream font-plain" id="location" />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="city">City</label>
                            <div className="col-sm-10">
                            <input type="text" name="city" className="form-control bg-primary-cream font-plain" id="city" />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="postal">Postal Code</label>
                            <div className="col-sm-10">
                            <input type="text" name="postal" className="form-control bg-primary-cream font-plain" id="postal" />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="website">Website</label>
                            <div className="col-sm-10">
                            <input type="url" name="website" className="form-control bg-primary-cream font-plain" id="website" />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="mission">Mission</label>
                            <div className="col-sm-10">
                            <input type="text" name="mission" className="form-control bg-primary-cream font-plain" id="mission" />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="policy">Policy</label>
                            <div className="col-sm-10">
                            <input type="text" name="policy" className="form-control bg-primary-cream font-plain" id="policy" />
                            </div>
                        </div>
 
                        <p className="smallpar">{error}</p>
                        <button type="submit" className="btn btn-lg btn-primary-orange m-3 shadow-sm" required>Save</button>
                        <button className="btn btn-lg btn-primary-cream m-3 shadow-sm" onClick={props.displayUpdate}>Back</button>
                        </form>
                    </div>
                </div>   
                </div>
            </div>
        </>
    );
}

export default UpdateShelterProfile;