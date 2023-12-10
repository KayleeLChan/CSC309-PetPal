import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function DetailsTop(props) {
    const navigate = useNavigate();
    const date = new Date(props.shelterData.date_joined)
    const formattedDate = date.toLocaleString();

    function navigateReviews(){
        navigate(`/shelters/${props.id}/reviews`);
      }

      function navigateBlogs(){
        navigate(`/blogs/?shelter=${props.id}`);
      }

      function navigateListings(){
        navigate(`/listings/?shelter=${props.shelterData.username}`);
      }
      
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="d-flex two-col p-4 align-self-center align-items-center mt-4 w-100 justify-content-left bg-brown rounded-2">
                    {/* shelter logo */}
                    <img src={props.shelterData.profilepic ? props.shelterData.profilepic : '/imgs/shelterpfp.png'} className="user-pic two-col-child align-self-center rounded-circle m-5 mt-3 mb-3" />


                    {/* fields = ['profilepic','sheltername', 'companyaddress', 'city', 'postal', 'website', 'mission', 'policy', 'date_joined'] */}
                    {/* shelter details */}
                    <div className="two-col-child align-self-center justify-content-center w-50 mt-2 mb-3">
                        <a className="text-primary-cream mb-1 h1" href={`/shelters/${props.id}`}>{props.shelterData.sheltername}</a>
                        <h5 className="text-primary-cream mb-1">{props.shelterData.companyaddress}, {props.shelterData.city}</h5>
                        <Button variant="primary-cream" className="m-2 ms-0" onClick={navigateReviews}>Reviews</Button>
                        <Button variant="primary-cream" className="m-2" onClick={navigateListings}>Listings</Button>
                        <Button variant="primary-cream" className="m-2" onClick={navigateBlogs}>Blogs</Button>
                    </div>

                    {/* shelter contact details */}
                    <div className="d-flex two-col-child flex-column align-items-center align-self-center justify-content-start w-50 mb-2 mt-1">
                        <p className="text-primary-cream mb-1">Account published on: {formattedDate}</p>
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