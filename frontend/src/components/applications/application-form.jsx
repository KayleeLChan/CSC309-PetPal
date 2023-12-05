import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phoneNumber: '',
    postalCode: '',
    age: '',
    insurance: '',
    insuranceName: '',
    payment: '',
    compatibilityQuestions: {
      adoptFor: '',
      haveKids: '',
      petOwnerType: '',
      currentPets: '',
      idealPetAge: '',
      preferredGender: '',
      preferredSize: '',
      behaviorPreference: '',
      openToSpecialNeeds: '',
      housingType: '',
      ownOrRent: '',
      petLocation: '',
      haveYard: '',
    },
    additionalInquiries: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCompatibilityChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      compatibilityQuestions: {
        ...prevData.compatibilityQuestions,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic, e.g., send data to the server
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields go here */}
      {/* Use the `value` and `onChange` props to bind form fields to state */}
    </form>
  );
};

export default ApplicationForm;
