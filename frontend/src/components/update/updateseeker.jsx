import React from 'react';
import { useState } from 'react';

function UpdateSeekerProfile(props) {
    console.log(props.data)
    console.log(props.data.id)
    const id = props.data.id
    console.log(id)
    const [pref_sex, setPrefSex] = useState(props.data.pref_sex);
    const [error, setError] = useState("")

    const handleRadio = (event) =>{
        setPrefSex(event.target.value);
    }
    
    // function handleSave(event){
    //     console.log("save")
    //     const formData = new FormData(event.target);
        
    //     fetch(`http://localhost:8000/accounts/${id}/profile/`, {
    //         method: 'PUT',
    //         body: formData
    //         })
    
    //     .then(response => {
    //         console.log(response);
    //         return response.json();
    //     })
    //     // add in proper error displays
    //     .catch(error => {
    //         console.error(error);
    //         setError(error.toString());
    //     });
    // }
    

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">
                <form onSubmit={props.handleSave}>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="first_name">First Name</label>
                            <div className="col-sm-10">
                            <input type="text" name="first_name" className="form-control bg-primary-cream font-plain" id="first_name" placeholder="John"/>
                            </div>
                        </div> 
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="last_name">Last Name</label>
                            <div className="col-sm-10">
                            <input type="text" name="last_name" className="form-control bg-primary-cream font-plain" id="last_name" placeholder="Doe"/>
                            </div>
                        </div> 
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="username">Username</label>
                            <div className="col-sm-10">
                            <input type="text" name="username" className="form-control bg-primary-cream font-plain" id="username" placeholder="username123"/>
                            </div>
                        </div> 
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="password">Password</label>
                            <div className="col-sm-10">
                            <input type="password" name="password" className="form-control bg-primary-cream font-plain" id="password"/>
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="verifypassword">Verify Password</label>
                            <div className="col-sm-10">
                            <input type="password" name="confirmpassword" className="form-control bg-primary-cream font-plain" id="verifypassword"/>
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="email">Email</label>
                            <div className="col-sm-10">
                            <input type="text" name="email" className="form-control bg-primary-cream font-plain" id="email"/>
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="phonenumber">Phone Number</label>
                            <div className="col-sm-10">
                            <input type="text" name="phonenumber" className="form-control bg-primary-cream font-plain" id="phonenumber"/>
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
                            <input type="text" name="pref_animal" className="form-control bg-primary-cream font-plain" id="animal"/>
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="breed">Preferred Breed</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_breed" className="form-control bg-primary-cream font-plain" id="breed"/>
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="age">Preferred Age</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_age" className="form-control bg-primary-cream font-plain" id="age"/>
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="size">Preferred Size</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_size" className="form-control bg-primary-cream font-plain" id="size"/>
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="colour">Preferred Colour</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_colour" className="form-control bg-primary-cream font-plain" id="colour"/>
                            </div>
                        </div>
                        <label className="row-form-label text-primary-cream h5" htmlFor="pref_sex">Preferred Sex</label>
                        <div className="form-check" id="pref_sex"> 
                            <input className="form-check-input bg-primary-orange" type="radio" name="radio2" id="M" value="M" checked={pref_sex === 'M'}onChange={handleRadio}/>
                            <label className="form-check-label text-primary-cream font-family-sans-serif" htmlFor="M">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input bg-primary-orange" type="radio" name="radio2" id="F" value="F" checked={pref_sex === 'F'} required onChange={handleRadio} />
                            <label className="form-check-label text-primary-cream font-family-sans-serif" htmlFor="F">Female</label>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="personality">Preferred Personality</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_personality"className="form-control bg-primary-cream font-plain" id="personality"/>
                        </div>
                        <p className="smallpar">{error}</p>
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary-orange m-3 shadow-sm" required>Save</button>
                        <button className="btn-primary-orange" onClick={props.displayUpdate}>Cancel</button>
                        </form>
                </div>
            </div>
        </>
    );
}

export default UpdateSeekerProfile;

