import React, { useState, useEffect } from 'react';

const UserInfoComponent = ({ user_id }) => {

    // Information given from user account
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [preferredAnimal, setPreferredAnimal] = useState('');
    const [preferredBreed, setPreferredBreed] = useState('');
    const [preferredAge, setPreferredAge] = useState('');
    const [preferredSize, setPreferredSize] = useState('');
    const [preferredSex, setPreferredSex] = useState('');
    const [preferredPersonality, setPreferredPersonality] = useState('');

    useEffect(() => {
        const fetchUserInfo = async () => {
          try {
            // fetch the information of the user
            const userInfo = await fetch(`accounts/${user_id}/profile/`);
            
            // to pre-populate fields on application
            setFirstName(userInfo.first_ame);
            setLastName(userInfo.last_name);
            setEmail(userInfo.email);
            setPhoneNumber(userInfo.phonenumber);
            setPreferredAnimal(userInfo.pref_animal);
            setPreferredBreed(userInfo.pref_breed);
            setPreferredAge(userInfo.pref_age);
            setPreferredSize(userInfo.pref_size);
            setPreferredSex(userInfo.pref_sex);
            setPreferredPersonality(userInfo.pref_personality);

          } catch (error) {
            console.error('Error fetching user information:', error);
          }
        };
    
        // Call the function to fetch user information
        fetchUserInfo();
      }, [user_id]);
    

    return ( 
        <div>
            <form className="ps-0 mt-3 w-100">

            <div className="mb-3">
            <label htmlFor="firstName" className="form-label"> First Name </label>
            <input
                type="text"
                className="form-control"
                id="firstName"
                required=""
                value={firstName}
                readOnly
                />
            </div>


            <div className="mb-3">
                <label htmlFor="lastName" className="form-label"> Last Name </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lastName" 
                    required=""
                    value={lastName}
                    readOnly 
                    />
            </div>

            {/* Save this information */}
            <div className="mb-3">
            <label htmlFor="address" className="form-label"> Home Address </label>
            <input
                type="address"
                className="form-control"
                id="address"
                aria-describedby="addressHelp"
                required=""
                />
                <div id="addressHelp" className="form-text"> We'll never share your address with anyone other than the shelter. </div>
            </div>


            <div className="mb-3">
            <label htmlFor="email" className="form-label"> Email Address </label>
            <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                required=""
                value={email}
                readOnly
                />
                <div id="emailHelp" className="form-text"> We'll never share your email with anyone other than the shelter. </div>
            </div>


            <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label"> Phone Number </label>
            <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                aria-describedby="phoneNumberHelp"
                required=""
                value={phoneNumber}
                readOnly
                />
            <div id="phoneNumberHelp" className="form-text"> We'll never share your phone number with anyone other than the shelter.</div>
            </div>


            <div className="mb-3">
            <label htmlFor="age" className="form-label"> Are you above 21 years of age? </label>
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="radio"
                    name="age"
                    id="ageYes"
                    />
                <label className="form-check-label" htmlFor="ageYes"> Yes </label>
                </div>

                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="age"
                    id="ageNo"
                    />
                <label className="form-check-label" htmlFor="ageNo"> No </label>
                </div>
            </div>


            <div className="mb-3">
            <label htmlFor="insurance" className="form-label">Are you currently insured?</label>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="insurance"
                    id="insuranceYes"
                    />
                <label className="form-check-label" htmlFor="insuranceYes">Yes</label>
            </div>

            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="insurance"
                    id="insuranceNo"
                    />
                <label className="form-check-label" htmlFor="insuranceNo">No</label>
            </div>

            <label htmlFor="insuranceName" className="form-label">Name of Insurance</label>
            <input type="text" className="form-control mb-2" id="insuranceName" />
            <label htmlFor="payment" className="form-label">Method of Payment</label>
                <select
                    className="form-select form-select-sm font-plain w-auto"
                    aria-label="Default select example"
                    id="payment"
                    required=""
                    >
                    <option selected="">(required)</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="amex">American Express</option>
                    <option value="interac">Interac E-transfer</option>
                    <option value="paypal">Paypal</option>
                </select>
            </div>

            </form>
        </div>
    );
};

export default UserInfoComponent;