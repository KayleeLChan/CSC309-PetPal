import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom/';
import { Form } from 'react-bootstrap';


function RegisterSeeker(){
    const [sex, setSex] = useState('F');
    const [personality, setPersonality] = useState('very active');
    const [age, setAge] = useState('new');
    const [size, setSize] = useState('S');
    const [account_type, setAccountType] = useState('')
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);

    // Val errors
    const [userError, setUserError] = useState()
    const [passError, setPassError] = useState()
    const [confirmPassError, setConfirmError] = useState()
    const [emailError, setEmailError] = useState()
    const [isValError, setisValError] = useState(false)

    const handleAccountRadio = (event) =>{
        if(event.target.value === "petseeker"){
            setAccountType(event.target.value);
        }
        else{
            navigate('/accounts/registration/shelter')
        }
    }

    const handlePhotoChange = (event) => {
        if(event.target.files[0]){
            setPhoto(event.target.files[0]);
        }
        else{
            setPhoto('/imgs/pfp.jpg')
        }
      };

  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target)
      const userData = new FormData(event.target)
      console.log(userData)
      userData.set('pref_sex', sex);
      userData.set('pref_size', size);
      userData.set('pref_personality', personality);
      userData.set('pref_age', age);
      userData.set('accounttype', account_type);
      if(photo){
        userData.set("profilepic", photo)
      }
  
      fetch('http://localhost:8000/accounts/registration/seeker/',{
        method: 'POST',
        body: userData

      })
      .then(response => {
        console.log(response);
        console.log(response.status)
        if (response.status == 400) {
            console.log("response is 400")
            setisValError(true)
        }
        else{
            setisValError(false)
            if(response.ok){
            navigate('/accounts');
            console.log("registration successful")
            }
        }
        return response.json();
      })
    //   add in proper error displays
      .then(userData => {
        console.log(userData)
        if ('username' in userData && isValError) {
            setUserError(userData.username[0])
        }
        else{
            setUserError("")
        }
        if ('password' in userData && isValError) {
            setPassError(userData.password[0])
        }
        else{
            setPassError("")
        }
        if ('confirmpassword' in userData && isValError) {
            setConfirmError(userData.confirmpassword[0])
        }
        else{
            setConfirmError("")
        }
        if ('email' in userData && isValError) {
            setEmailError(userData.email[0])
        }
        else{
            setEmailError("")
        }
      }) 
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
                            {isValError &&
                            <p className="smallpar">{userError}</p>
                            }
                        </div> 
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="password">Password</label>
                            <div className="col-sm-10">
                            <input type="password" name="password" className="form-control bg-primary-cream font-plain" id="password" required />
                            </div>
                            {isValError &&
                            <p className="smallpar">{passError}</p>
                            }
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="verifypassword">Verify Password</label>
                            <div className="col-sm-10">
                            <input type="password" name="confirmpassword" className="form-control bg-primary-cream font-plain" id="verifypassword" required />
                            </div>
                            {isValError &&
                            <p className="smallpar">{confirmPassError}</p>
                            }
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="email">Email</label>
                            <div className="col-sm-10">
                            <input type="email" name="email" className="form-control bg-primary-cream font-plain" id="email" required />
                            </div>
                            {isValError &&
                            <p className="smallpar">{emailError}</p>
                            }
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
                            <label className="row-form-label h5" htmlFor="colour">Preferred Colour</label>
                            <div className="col-sm-10">
                            <input type="text" name="pref_colour" className="form-control bg-primary-cream font-plain" id="colour" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="age">Preferred Age</label>
                            <Form.Select className="form-select form-select-sm font-plain w-auto border fs-5"
                                aria-label="age"
                                id="age"
                                onChange={(e) => setAge(e.target.value)} required>
                                <option value="" disabled>(required)</option>
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
                                <option value="" disabled>(required)</option>
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
                                <option value="" disabled>(required)</option>
                                <option value="F">Female</option>
                                <option value="M">Male</option>
                            </Form.Select>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="personality">Preferred Personality</label>
                            <Form.Select className="form-select form-select-sm font-plain w-auto border fs-5"
                                aria-label="personality"
                                id="personality"
                                onChange={(e) => setPersonality(e.target.value)} required>
                                <option value="" disabled>(required)</option>
                                <option value="very active">very active</option>
                                <option value="active">active</option>
                                <option value="laid-back">laid-back</option>
                                <option value="lap">lap-pet</option>
                            </Form.Select>
                        </div>
                        <div className="form-group row text-primary-cream">
                        <label className="row-form-label h5" htmlFor="profilepic">
                            Add a Profile Photo!
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="file"
                                className="form-control bg-primary-cream font-plain"
                                id="profilepic"
                                onChange={handlePhotoChange}
                            />
                        </div>
                        </div>                      
                        <p className="smallpar">{error}</p>
                        {isValError &&
                        <p className="smallpar">One or more fields are invalid. Please click 'register' to review your errors</p>
                        }
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