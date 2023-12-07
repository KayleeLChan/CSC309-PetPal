import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const UserInfoComponent = ({ user_id }) => {

    // Information given from user account
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        postalCode: '',
        address: '', 
        aboveTwentyOne: '',
        currentlyInsured: '',
        insuranceName: '',
    });
 

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userInfoResponse = await fetch(`accounts/${user_id}/profile/`);
                if (userInfoResponse.ok) {
                    const userInfo = await userInfoResponse.json();
                    setFormData({
                        firstName: userInfo.first_name,
                        lastName: userInfo.last_name,
                        email: userInfo.email,
                        phoneNumber: userInfo.phonenumber,
                    });
            }
          } catch (error) {
            console.error('Error fetching user information:', error);
          }
        };
        // Call the function to fetch user information
        fetchUserInfo();
      }, [user_id]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can submit the form data to your Django backend
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    const handleRadioChange = (e, key) => {
        setFormData({ ...formData, [key]: e.target.value });
    };
 

    return ( 
        <div>
            <Form className="ps-0 mt-3 w-100">

            <div className="mb-3">
            <label htmlFor="firstName" className="form-label"> First Name </label>
            <input
                type="text"
                className="form-control"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required
                />
            </div>


            <div className="mb-3">
                <label htmlFor="lastName" className="form-label"> Last Name </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required
                    />
            </div>


            <div className="mb-3">
            <label htmlFor="address" className="form-label"> Home Address </label>
            <input
                type="address"
                className="form-control"
                id="address"
                aria-describedby="addressHelp"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })} required
                />
                <div id="addressHelp" className="form-text"> We'll never share your address with anyone other than the shelter. </div>
            </div>

            <div className="mb-3">
            <label htmlFor="postalCode" className="form-label"> Home Address </label>
            <input
                type="postalCode"
                className="form-control"
                id="postalCode"
                aria-describedby="addressHelp"
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })} required
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
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} required
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
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} required
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
                    checked={formData.aboveTwentyOne === 'Yes'}
                    onChange={(e) => handleRadioChange(e, 'aboveTwentyOne')}
                    />
                <label className="form-check-label" htmlFor="ageYes"> Yes </label>
                </div>

                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="age"
                    id="ageNo"
                    checked={formData.aboveTwentyOne === 'No'}
                    onChange={(e) => handleRadioChange(e, 'aboveTwentyOne')}
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
                    checked={formData.currentlyInsured === 'Yes'}
                    onChange={(e) => handleRadioChange(e, 'currentlyInsured')}
                    />
                <label className="form-check-label" htmlFor="insuranceYes">Yes</label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="insurance"
                    id="insuranceNo"
                    checked={formData.currentlyInsured === 'No'}
                    onChange={(e) => handleRadioChange(e, 'currentlyInsured')}
                    />
                <label className="form-check-label" htmlFor="insuranceNo">No</label>
            </div>


            <label htmlFor="insuranceName" className="form-label">Name of Insurance</label>
                <Form.select
                    className="form-select form-select-sm font-plain w-auto"
                    aria-label="Default select example"
                    id="payment"
                    value={formData.insuranceName}
                    onChange={(e) => setFormData({ ...formData, insuranceName: e.target.value })} required
                    >
                    <option selected="">(required)</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="amex">American Express</option>
                    <option value="interac">Interac E-transfer</option>
                    <option value="paypal">Paypal</option>

                </Form.select>
                    
            </div>

            </Form>
        </div>
    );
};

export default UserInfoComponent;