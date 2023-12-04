import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom/';


function RegisterSeeker(){
    const [pref_sex, setPrefSex] = useState('');
    const [account_type, setAccountType] = useState('')
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);

    const handleRadio = (event) =>{
        setPrefSex(event.target.value);
    }

    const handleAccountRadio = (event) =>{
        if(event.target.value === "petseeker"){
            setAccountType(event.target.value);
        }
        else{
            navigate('/accounts/registration/shelter')
        }
    }

    const handlePhotoChange = (event) => {
        setPhoto(event.target.files[0]);
      };

  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target)
      const userData = new FormData(event.target)
      console.log(userData)
      userData.set('pref_sex', pref_sex);
      userData.set('accounttype', account_type);
      userData.set("profilepic", photo)
  
      fetch('http://localhost:8000/accounts/registration/seeker/',{
        method: 'POST',
        body: userData

      })
      .then(response => {
        console.log(response);
        return response.json();
      })
    //   add in proper error displays
      .then(userData => console.log(userData)) 
      .catch(error => {
        console.error(error);
        setError(error.toString());
      });
    };


    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">
                    <div className="mh-100 d-flex flex-row mx-0 justify-content-center">
                    <div className="align-self-start justify-content-left w-25 hide-md">
                        <img src="/imgs/snek.png" width="75%" height="75%" alt =""/>
                    </div>
                    <div className="d-flex w-50 flex-column pt-5 align-items-center justify-center bg-primary-brown">
                        <h1 className="text-primary-cream">Welcome to PetPal!</h1>
                        <form onSubmit={handleSubmit}>
                        <label className="row-form-label text-primary-cream h5" htmlFor="account_type">Account Type</label>
                        <div className="form-check" id="account_type">
                            <input className="form-check-input bg-primary-orange" type="radio" name="radio" id="petseekerradio" value="petseeker" checked={account_type === 'petseeker'} onChange={handleAccountRadio} required />
                            <label className="form-check-label text-primary-cream font-family-sans-serif" htmlFor="petseekerradio">Pet Seeker</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input bg-primary-orange" type="radio" name="radio" id="petshelterradio" value="petshelter" checked={account_type === 'petshelter'} onChange={handleAccountRadio}required/>
                            <label className="form-check-label text-primary-cream font-family-sans-serif" htmlFor="petshelterradio">Pet Shelter</label>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="first_name">First Name</label>
                            <div className="col-sm-10">
                            <input type="text" name="first_name" className="form-control bg-primary-cream font-plain" id="first_name" placeholder="John" required />
                            </div>
                        </div> 
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="last_name">Last Name</label>
                            <div className="col-sm-10">
                            <input type="text" name="last_name" className="form-control bg-primary-cream font-plain" id="last_name" placeholder="Doe" required />
                            </div>
                        </div> 
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="username">Username</label>
                            <div className="col-sm-10">
                            <input type="text" name="username" className="form-control bg-primary-cream font-plain" id="username" placeholder="username123" required />
                            </div>
                        </div> 
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="password">Password</label>
                            <div className="col-sm-10">
                            <input type="password" name="password" className="form-control bg-primary-cream font-plain" id="password" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="verifypassword">Verify Password</label>
                            <div className="col-sm-10">
                            <input type="password" name="confirmpassword" className="form-control bg-primary-cream font-plain" id="verifypassword" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="email">Email</label>
                            <div className="col-sm-10">
                            <input type="email" name="email" className="form-control bg-primary-cream font-plain" id="email" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="phonenumber">Phone Number</label>
                            <div className="col-sm-10">
                            <input type="text" name="phonenumber" className="form-control bg-primary-cream font-plain" id="phonenumber" required />
                            </div>
                        </div>
                        <h4 className="text-primary-cream pt-5 pb-0">Pet Preferences</h4>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="location">Preferred Location</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_location" className="form-control bg-primary-cream font-plain" id="location" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="animal">Preferred Animal</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_animal" className="form-control bg-primary-cream font-plain" id="animal" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="breed">Preferred Breed</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_breed" className="form-control bg-primary-cream font-plain" id="breed" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="age">Preferred Age</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_age" className="form-control bg-primary-cream font-plain" id="age" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="size">Preferred Size</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_size" className="form-control bg-primary-cream font-plain" id="size" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="colour">Preferred Colour</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_colour" className="form-control bg-primary-cream font-plain" id="colour" required />
                            </div>
                        </div>
                        <label className="row-form-label text-primary-cream h5" htmlFor="pref_sex">Preferred Sex</label>
                        <div className="form-check" id="pref_sex"> 
                            <input className="form-check-input bg-primary-orange" type="radio" name="radio2" id="M" value="M" checked={pref_sex === 'M'}onChange={handleRadio} required />
                            <label className="form-check-label text-primary-cream font-family-sans-serif" htmlFor="M">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input bg-primary-orange" type="radio" name="radio2" id="F" value="F" checked={pref_sex === 'F'} required onChange={handleRadio} />
                            <label className="form-check-label text-primary-cream font-family-sans-serif" htmlFor="F">Female</label>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="personality">Preferred Personality</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_personality"className="form-control bg-primary-cream font-plain" id="personality" required />
                        </div>
                        <div className="col-sm-10">
                            <input
                                type="file"
                                className="form-control bg-primary-cream font-plain"
                                id="profilepic"
                                onChange={handlePhotoChange}
                            />
                        </div>                        
                        <p className="smallpar">{error}</p>
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary-orange m-3 shadow-sm" required>Register</button>
                        </form>
                    </div>
                    <div className="align-self-end justify-content-right w-25 hide-md">
                        <img src="/imgs/liz.png" width="100%" height="100%" alt=""></img>
                    </div>
                </div>
                    
                </div>
            </div>
        </>
    );
}

export default RegisterSeeker;