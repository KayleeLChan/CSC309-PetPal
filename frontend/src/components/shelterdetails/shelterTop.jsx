import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function DetailsTop(props) {
    const navigate = useNavigate();

    console.log(props.shelterData);
    function navigateReviews(){
        navigate(`/accounts/shelters/${props.id}/reviews`);
      }

    //TODO: MAKE DATE HUMAN READABLE!
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="d-flex two-col p-4 align-self-center align-items-center mt-4 w-100 justify-content-left bg-brown rounded-2">
                    {/* shelter logo */}
                    <img src={props.shelterData.profilepic} className="user-pic two-col-child align-self-center rounded-circle m-5 mt-3 mb-3" />


                    {/* fields = ['profilepic','sheltername', 'companyaddress', 'city', 'postal', 'website', 'mission', 'policy', 'date_joined'] */}
                    {/* shelter details */}
                    <div className="two-col-child align-self-center justify-content-center w-50 mt-2 mb-3">
                        <h1 className="text-primary-cream text-decoration-underline mb-1">{props.shelterData.sheltername}</h1>
                        <h5 className="text-primary-cream mb-1">{props.shelterData.companyaddress}, {props.shelterData.city}</h5>
                        <Button variant="primary-cream" className="my-2" onClick={navigateReviews}>Reviews</Button>
                        {/* TODO MAKE BUTTON LEAD TO BLOGS PAGE */}
                        <Button variant="primary-cream" className="my-2" onClick={navigateReviews}>Reviews</Button>
                    </div>

                    {/* shelter contact details */}
                    <div className="d-flex two-col-child flex-column align-items-center align-self-center justify-content-start w-50 mb-2 mt-1">
                        <p className="text-primary-cream mb-1">Account published on: {props.shelterData.date_joined}</p>
                        <p className="text-primary-cream mb-1">Email: {props.shelterData.email}</p>
                        <p className="text-primary-cream mb-1">Phone Number: {props.shelterData.phonenumber}</p>
                        <p className="text-primary-cream mb-1">Website: {props.shelterData.website}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsTop;