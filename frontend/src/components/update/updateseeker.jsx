import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

function UpdateSeekerProfile(props) {
    console.log(props.data)
    console.log(props.data.id)
    const id = props.data.id
    console.log(id)
    const [error, setError] = useState("")
    const [sex, setSex] = useState('');
    const [personality, setPersonality] = useState('');
    const accessToken = localStorage.getItem('access_token');
    const [age, setAge] = useState('');
    const [size, setSize] = useState('');
    
    function handleSave(event){
        console.log("save")
        const formData = new FormData(event.target);
        formData.set('pref_sex', sex);
        formData.set('pref_size', size);
        formData.set('pref_personality', personality);
        formData.set('pref_age', age);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
        // formData.set("profilepic", photo)
    
        setTimeout(() => {
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
        }, 50000);
    }
    
    

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">
                    <div className="mh-100 d-flex flex-row mx-0 justify-content-center">
                    <div className="d-flex w-50 flex-column pt-5 align-items-center justify-center bg-primary-brown">
                        <form onSubmit={handleSave}>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="first_name">First Name</label>
                            <div className="col-sm-10">
                            <input type="text" name="first_name" className="form-control bg-primary-cream font-plain" id="first_name" placeholder="John"/>
                            </div>
                        </div> 
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="last_name">Last Name</label>
                            <div className="col-sm-10">
                            <input type="text" name="last_name" className="form-control bg-primary-cream font-plain" id="last_name" placeholder="Doe" />
                            </div>
                        </div> 
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
                        <h4 className="text-primary-cream pt-5 pb-0">Pet Preferences</h4>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="location">Preferred Location</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_location" className="form-control bg-primary-cream font-plain" id="location"/>
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="animal">Preferred Animal</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_animal" className="form-control bg-primary-cream font-plain" id="animal"  />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="breed">Preferred Breed</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_breed" className="form-control bg-primary-cream font-plain" id="breed" />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="colour">Preferred Colour</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_colour" className="form-control bg-primary-cream font-plain" id="colour"  />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="age">Preferred Age</label>
                            <Form.Select className="form-select form-select-sm font-plain w-auto border fs-5"
                                aria-label="age"
                                id="age"
                                onChange={(e) => setAge(e.target.value)} required>
                                <option value=""></option>
                                <option value="newborn">newborn</option>
                                <option value="young">young</option>
                                <option value="adult">adult</option>
                                <option value="senior">senior</option>
                            </Form.Select>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="size">Preferred Size</label>
                            <Form.Select className="form-select form-select-sm font-plain w-auto border fs-5"
                                aria-label="size"
                                id="size"
                                onChange={(e) => setSize(e.target.value)} required>
                                <option value=""></option>
                                <option value="S">small</option>
                                <option value="M">medium</option>
                                <option value="L">large</option>
                                <option value="XL">extra large</option>
                            </Form.Select>
                        </div>
                        <label className="row-form-label text-primary-cream h5" htmlFor="sex">Preferred Sex</label>
                        <Form.Select className="form-select form-select-sm font-plain w-auto border fs-5"
                                aria-label="sex"
                                id="sex"
                                onChange={(e) => setSex(e.target.value)} required>
                                <option value=""></option>
                                <option value="F">Female</option>
                                <option value="M">Male</option>
                            </Form.Select>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="personality">Preferred Personality</label>
                            <Form.Select className="form-select form-select-sm font-plain w-auto border fs-5"
                                aria-label="personality"
                                id="personality"
                                onChange={(e) => setPersonality(e.target.value)} required>
                                <option value=""></option>
                                <option value="very active">very active</option>
                                <option value="active">active</option>
                                <option value="laid-back">laid-back</option>
                                <option value="lap">lap-pet</option>
                            </Form.Select>
                        </div>
                        {/* <div className="col-sm-10">
                            <input
                                type="file"
                                className="form-control bg-primary-cream font-plain"
                                id="profilepic"
                                onChange={handlePhotoChange}
                            />
                        </div>                         */}
                        <p className="smallpar">{error}</p>
                        <button type="submit" className="btn btn-lg btn-primary-orange m-3 shadow-sm" required>Save</button>
                        <button className="btn-primary-orange" onClick={props.displayUpdate}>Cancel</button>
                        </form>
                    </div>
                </div>   
                </div>
            </div>
        </>
    );
}

export default UpdateSeekerProfile;

