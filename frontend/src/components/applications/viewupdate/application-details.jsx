import React from 'react';

const ApplicationSheetComponent = ({ application }) => {
  const adoptingForOptions = [["myself", "myself"], ["family", "my family"]];
  const childrenOptions = [["kids", "kids"], ["none", "no kids"]];
  const historyOptions = [["previous", "previous"], ["first", "first-time"]];
  const currentOptions = [["none", "no pet(s)"], ["cat", "cat(s)"], ["dog", "dog(s)"], ["both", "dog(s) and cat(s)"], ["other", "other pet(s)"]];
  const ageOptions = [["none", "no age preference"], ["new", "newborn"], ["young", "young"], ["adult", "adult"], ["senior", "senior"]];
  const sizeOptions = [["none", "no size preference"], ["S", "small"], ["M", "medium"], ["L", "large"], ["XL", "extra large"]];
  const sexOptions = [["none", "no age preference"], ["F", "female"], ["M", "male"]];

  const selectedAdopt = adoptingForOptions.find(([option]) => option === application.adopting_for)?.[1];
  const selectedChildren = childrenOptions.find(([option]) => option === application.children)?.[1];
  const selectedHistory = historyOptions.find(([option]) => option === application.pet_owner_history)?.[1];
  const selectedCurrent = currentOptions.find(([option]) => option === application.current_pets)?.[1];
  const selectedAgeLabel = ageOptions.find(([option]) => option === application.ideal_pet_age)?.[1];
  const selectedSizeLabel = sizeOptions.find(([option]) => option === application.ideal_pet_size)?.[1];
  const selectedSexLabel = sexOptions.find(([option]) => option === application.ideal_pet_sex)?.[1];
  return (
    <>
      <h2 className="mb-4 text-dark-brown text-decoration-underline responsive_heading">SECTION I: APPLICANT</h2>
      <div className="align-self-center mb-2 px-5">
        <p className="d-flex w-100">FIRST NAME: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.applicant_first_name}</span></p>
        <p className="d-flex w-100">LAST NAME: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.applicant_last_name}</span></p>
        <p className="d-flex w-100">ADDRESS: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.address}</span></p>
        <p className="d-flex w-100">POSTAL CODE: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.postal_code}</span></p>
        <p className="d-flex w-100">EMAIL: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.applicant_email}</span></p>
        <p className="d-flex w-100">PHONE: <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.applicant_phone_number}</span></p>
        <p className="d-flex w-100">ABOVE 21 YEARS OF AGE? <span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.above_twentyone ? 'Yes' : 'No'}</span></p>
      </div>

      <h2 className="mb-4 text-dark-brown text-decoration-underline responsive_heading">SECTION II: APPLICATION DETAILS</h2>
      <div className="align-self-center mb-2 px-5">
        <p className="d-flex w-100">I am looking to adopt for: <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{selectedAdopt}</span></p>
        <p className="d-flex w-100">I have <span className="bg-primary-cream p-1 rounded ms-2 me-2 flex-fill">{selectedChildren}</span> at home</p>
        <p className="d-flex w-100">I am a <span className="bg-primary-cream p-1 rounded ms-2 me-2 flex-fill">{selectedHistory}</span> pet owner</p>
        <p className="d-flex w-100">I currently have <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{selectedCurrent}</span></p>
        <p className="d-flex w-100">My ideal pet is a(n) <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{selectedAgeLabel}</span></p>
        <p className="d-flex w-100">I would like to adopt a <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{selectedSexLabel}</span></p>
        <p className="d-flex w-100">I prefer a pet that is <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{selectedSizeLabel}</span></p>
        <p className="d-flex w-100">My pet's behavior should be <span className="bg-primary-cream p-1 rounded ms-2 flex-fill">{application.ideal_pet_behaviour}</span></p>
      </div>

      <h2 className="mb-4 text-dark-brown text-decoration-underline responsive_heading">SECTION III: PAYMENT</h2>
      <div className="align-self-center mb-2 px-5">
        <p className="d-flex w-100">CURRENTLY INSURED:<span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.currently_insured ? 'YES' : 'NO'}</span></p>
        {/* <p className="d-flex w-100">INSURANCE NAME:<span className="bg-primary-cream p-1 rounded ms-3 flex-fill"></span></p> */}
        <p className="d-flex w-100">METHOD OF PAYMENT*:<span className="bg-primary-cream p-1 rounded ms-3 flex-fill">{application.insurance_name}</span></p>
        <p className="fst-italic d-flex w-100"> *Further payment information will be expected upon approval of the application.
          Please routinely check the chatbox or notifications for further instructions from the shelter.</p>
      </div>
    </>
  );
};

export default ApplicationSheetComponent;