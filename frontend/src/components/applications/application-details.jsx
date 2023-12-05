// ApplicationSheet.jsx
import React from 'react';

const ApplicationSheetComponent = ({ application }) => {
  return (
    <>
      <h2 className="mb-4 text-dark-brown text-decoration-underline responsive_heading">SECTION I: APPLICANT</h2>
      <div className="align-self-center mb-2 px-5">
        <p className="d-flex w-100">FIRST NAME: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.applicant_first_name}</span></p>
        <p className="d-flex w-100">LAST NAME: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.applicant_last_name}</span></p>
        <p className="d-flex w-100">ADDRESS: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.address}</span></p>
        <p className="d-flex w-100">CITY: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{/* Add city data here */}</span></p>
        <p className="d-flex w-100">POSTAL CODE: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.postal_code}</span></p>
        <p className="d-flex w-100">EMAIL: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.applicant_email}</span></p>
        <p className="d-flex w-100">PHONE: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.applicant_phone_number}</span></p>
        <p className="d-flex w-100">ABOVE 21 YEARS OF AGE? <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.above_twentyone ? 'Yes' : 'No'}</span></p>
      </div>

      <h2 className="mb-4 text-dark-brown text-decoration-underline responsive_heading">SECTION II: APPLICATION DETAILS</h2>
      <div className="align-self-center mb-2 px-5">
        <p>I am looking to adopt for: <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{application.adopting_for}</span></p>
        <p>I have <span className="bg-primary-cream p-1 rounded ms-2 me-2 flex-fill">{application.children}</span> at home</p>
        <p>I am a <span className="bg-primary-cream p-1 rounded ms-2 me-2 flex-fill">{application.pet_owner_history}</span> pet owner</p>
        <p>I currently have <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{application.current_pets}</span></p>
        <p>My ideal pet is a <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{application.ideal_pet}</span></p>
        <p>I would like to adopt a <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{application.ideal_pet_sex}</span></p>
        <p>I prefer a pet that is <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{application.ideal_pet_size}</span></p>
        <p>My pet's behavior should be <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{application.ideal_pet_behaviour}</span></p>
      </div>

      <h2 className="mb-4 text-dark-brown text-decoration-underline responsive_heading">SECTION III: PAYMENT</h2>
      <div className="align-self-center mb-2 px-5">
        <p className="d-flex w-100">CURRENTLY INSURED:<span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.currently_insured ? 'YES' : 'NO'}</span></p>
        <p className="d-flex w-100">INSURANCE NAME:<span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.insurance_name}</span></p>
        <p className="d-flex w-100">METHOD OF PAYMENT*:<span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{/* Add payment method data here */}</span></p>
        <p className="fst-italic d-flex w-100"> *Further payment information will be expected upon approval of the application.
          Please routinely check the chatbox or notifications for further instructions from the shelter.</p>
      </div>
    </>
  );
};

export default ApplicationSheetComponent;
