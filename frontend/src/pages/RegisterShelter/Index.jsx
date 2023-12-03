import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom/';

function RegisterShelter(){
    const [account_type, setAccountType] = useState('')
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleAccountRadio = (event) =>{
        if(event.target.value === "petshelter"){
            setAccountType(event.target.value);
        }
        else{
            navigate('/accounts/registration/seeker')
        }
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event.target)
      const userData = new FormData(event.target)
      console.log(userData)
      userData.set('account_type', account_type);
  
      fetch('http://localhost:8000/accounts/registration/shelter/',{
        method: 'POST',
        body: userData

      })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(userData => console.log(userData))
      .catch(error => {
        console.error(error);
        setError('An error occurred while submitting the form.');
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
                            <input type="text" name="email" className="form-control bg-primary-cream font-plain" id="email" required />
                            </div>
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
                            <input type="text" name="mission" className="form-control bg-primary-cream font-plain" id="mission" required />
                            </div>
                        </div>
                        <div className="form-group row text-primary-cream">
                            <label className="row-form-label h5" htmlFor="policy">Policy</label>
                            <div className="col-sm-10">
                            <input type="text" name="policy" className="form-control bg-primary-cream font-plain" id="policy" required />
                            </div>
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

export default RegisterShelter;