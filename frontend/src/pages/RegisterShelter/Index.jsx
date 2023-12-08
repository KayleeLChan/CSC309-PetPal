import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom/';
import { Form } from 'react-bootstrap';

function RegisterShelter(){
    const [account_type, setAccountType] = useState('petshelter')
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);

    const [userError, setUserError] = useState()
    const [passError, setPassError] = useState()
    const [confirmPassError, setConfirmError] = useState()
    const [emailError, setEmailError] = useState()
    const [isValError, setisValError] = useState(false)


    // setAccountType("petshelter");

    const handlePhotoChange = (event) => {
        if(event.target.files[0]){
            setPhoto(event.target.files[0]);
        }
      };

  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target)
      const userData = new FormData(event.target)
      console.log(userData)
      userData.set('accounttype', account_type);
      if(photo){
        userData.set("profilepic", photo)
      }
  
      fetch('http://localhost:8000/accounts/registration/shelter/',{
        method: 'POST',
        body: userData

      })
      .then(response => {
        console.log(response);
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
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="animal">Shelter Name</label>
                            <div className="col-sm-10">
                            <input type="text" name="sheltername" className="form-control bg-primary-cream font-plain" id="animal" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="location">Shelter Address</label>
                            <div className="col-sm-10">
                            <input type="text" name="companyaddress" className="form-control bg-primary-cream font-plain" id="location" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="city">City</label>
                            <div className="col-sm-10">
                            <input type="text" name="city" className="form-control bg-primary-cream font-plain" id="city" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="postal">Postal Code</label>
                            <div className="col-sm-10">
                            <input type="text" name="postal" className="form-control bg-primary-cream font-plain" id="postal" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="website">Website</label>
                            <div className="col-sm-10">
                            <input type="url" name="website" className="form-control bg-primary-cream font-plain" id="website" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="mission">Mission</label>
                            <div className="col-sm-10">
                            <Form.Control as="textarea"
                            placeholder="Shelter mission statement"
                            className="font-plain"
                            rows={5}
                            name="mission"
                            id="mission" required />
                            {/* <input type="textarea" name="mission" className="form-control bg-primary-cream font-plain" rows="5" id="mission" required /> */}
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="policy">Policy</label>
                            <div className="col-sm-10">
                            <Form.Control as="textarea"
                            placeholder="Shelter adoption policies"
                            className="font-plain"
                            rows={5}
                            name="policy"
                            id="policy" required />
                            {/* <input type="textarea" name="policy" className="form-control bg-primary-cream font-plain" id="policy" required /> */}
                            </div>
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

export default RegisterShelter;