import React, { useState, useEffect, onSubmit} from 'react';
import { Form } from 'react-bootstrap';


const CompatibilityQuizComponent = ({ user_id, handleFormSubmit }) => {

    const[formData, setFormData] = useState ({
        adoptingFor: '',
        children: '',
        petOwnerHistory: '',
        currentPets: '',
        preferedAnimal: '',
        preferredBreed: '',
        preferredAge: '',
        preferredSize: '',
        preferredSex: '',
        preferredPersonality: ''
    });
    

    useEffect(() => {
        const fetchUserInfo = async () => {
          try {
            const userInfoResponse = await fetch(
              `http://localhost:8000/accounts/${user_id}/profile/`,
              {
                headers: {
                  Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMTMxNDA0LCJpYXQiOjE3MDE5MjE4MDQsImp0aSI6IjdmOTQ4YmZmODFiMjQzYmFiNjhiM2M4NGVmN2FlZThmIiwidXNlcl9pZCI6MX0.4eFhRDwAJWRC_uSC8gyYapbxx2s12-il08jacj7pBcI',
                },
              }
            );
            if (userInfoResponse.ok) {
              const userInfo = await userInfoResponse.json();
              setFormData((prevFormData) => ({
                ...prevFormData,
                adoptingFor: userInfo.adoptingFor || prevFormData.adoptingFor,
                children: userInfo.children || prevFormData.children,
                petOwnerHistory: userInfo.petOwnerHistory || prevFormData.petOwnerHistory,
                currentPets: userInfo.currentPets || prevFormData.currentPets,
                preferedAnimal: userInfo.preferedAnimal || prevFormData.preferedAnimal,
                preferredBreed: userInfo.preferredBreed || prevFormData.preferredBreed,
                preferredAge: userInfo.preferredAge || prevFormData.preferredAge,
                preferredSize: userInfo.preferredSize || prevFormData.preferredSize,
                preferredSex: userInfo.preferredSex || prevFormData.preferredSex,
                preferredPersonality: userInfo.preferredPersonality || prevFormData.preferredPersonality,
              }));
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
    

    return (
        <div>
        {/* Questions */}

        {/* I am looking to adopt for ____ */}
        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
            <p className="mb-0">I am looking to adopt for</p>
        </div>
        <div className="col-12">
            <Form.select
                className="form-select form-select-sm font-plain w-auto border border-0"
                aria-label="Default select example"
                value={formData.adoptingFor}
                onChange={(e) => setFormData({ ...formData, adoptingFor: e.target.value })} required
                >
                <option selected="">(required)</option>
                <option value="myself">myself</option>
                <option value="family">my family</option>
            </Form.select>
        </div>
        </Form>
        

        {/* I have ___ at home */}
        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
            <p className="mb-0">I have</p>
        </div>
        <div className="col-12">
            <Form.select
                className="form-select form-select-sm font-plain w-auto border border-0"
                aria-label="Default select example"
                value={formData.children}
                onChange={(e) => setFormData({ ...formData, children: e.target.value })} required
                >
                <option selected="">(required)</option>
                <option value="kids">kids</option>
                <option value="none">no kids</option>
            </Form.select>
        </div>
        <div className="col-12">
            <p className="mb-0">at home</p>
        </div>
        </Form>


        {/* I am a ___ pet owner */}
        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
            <p className="mb-0">I am a</p>
        </div>
        <div className="col-12">
            <Form.select
                className="form-select form-select-sm font-plain w-auto border border-0"
                aria-label="Default select example"
                value={formData.petOwnerHistory}
                onChange={(e) => setFormData({ ...formData, petOwnerHistory: e.target.value })} required
                >
                <option selected="">(required)</option>
                <option value="previous">previous</option>
                <option value="first">first-time</option>
            </Form.select>
        </div>
        <div className="col-12">
            <p className="mb-0">pet owner</p>
        </div>
        </Form>

        {/* I currently have ___  */}
        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
            <p className="mb-0">I currently have</p>
        </div>
        <div className="col-12">
            <Form.select
                className="form-select form-select-sm font-plain w-auto border border-0"
                aria-label="Default select example"
                value={formData.currentPets}
                onChange={(e) => setFormData({ ...formData, currentPets: e.target.value })} required
                >
                <option selected="">(required)</option>
                <option value="none">no pet(s)</option>
                <option value="cat">cat(s)</option>
                <option value="dog">dog(s)</option>
                <option value="both">dog(s) and cat(s)</option>
                <option value="other">other pet(s)</option>
            </Form.select>
        </div>
        </Form>


        {/* My ideal pet is (Preferred Age) */}
        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
            <p className="mb-0">My ideal pet is a(n)</p>
        </div>
        <div className="col-12">
            <Form.select
                className="form-select form-select-sm font-plain w-auto border border-0"
                aria-label="Default select example"
                value={formData.preferredAge}
                onChange={(e) => setFormData({ ...formData, preferredAge: e.target.value })} required
                >
                <option selected="">(no age preference)</option>
                <option value="new">newborn</option>
                <option value="young">young</option>
                <option value="adult">adult</option>
                <option value="senior">senior</option>
            </Form.select>
        </div>
        </Form>

        {/* I prefer a pet that is (Preferred Size) */}
        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
            <p className="mb-0">I prefer a pet that is</p>
        </div>
        <div className="col-12">
            <Form.select
                className="form-select form-select-sm font-plain w-auto border border-0"
                aria-label="Default select example"
                value={formData.preferredSize}
                onChange={(e) => setFormData({ ...formData, preferredSize: e.target.value })} required
                >
                <option value="none">(no size preference)</option>
                <option value="S">small</option>
                <option value="M">medium</option>
                <option value="L">large</option>
                <option value="XL">extra large</option>
            </Form.select>
        </div>
        </Form>


        {/* I prefer a pet that is (Preferred Personality) */}
        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
            <p className="mb-0">My pet's behaviour should be</p>
        </div>
        <div className="col-12">
            <Form.select
                className="form-select form-select-sm font-plain w-auto border border-0"
                aria-label="Default select example"
                value={formData.preferredPersonality}
                onChange={(e) => setFormData({ ...formData, preferredPersonality: e.target.value })} required
                >
                <option value="none">(no behaviour preference)</option>
                <option value="very active">very active</option>
                <option value="active">active</option>
                <option value="laid-back">laid-back</option>
                <option value="lap">lap-pet</option>
            </Form.select>
        </div>
        </Form>

        {/* I prefer my pet to be (Preferred Sex) */}
        <Form className="row row-cols-xs-auto gx-3 gy-1 w-100 pt-4 align-items-center">
        <div className="col-12">
            <p className="mb-0">I prefer my pet to be </p>
        </div>
        <div className="col-12">
            <Form.select
                className="form-select form-select-sm font-plain w-auto border border-0"
                aria-label="Default select example"
                value={formData.preferredSex}
                onChange={(e) => setFormData({ ...formData, preferredSex: e.target.value })} required
                >
                <option value="none">(no behaviour preference)</option>
                <option value="M">male</option>
                <option value="F">female</option>
            </Form.select>
        </div>
        </Form>

    </div>
    );
};

export default CompatibilityQuizComponent;