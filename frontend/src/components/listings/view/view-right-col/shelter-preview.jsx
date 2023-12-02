import React from 'react';
import { Button, Image } from 'react-bootstrap';

const ShelterPreview = () => {
    return (
        <div className="d-flex flex-column pb-2 m-4 text-primary-cream bg-dark-brown rounded-5 position-relative">
            <Image
                src="../imgs/Zawg.png"
                className="position-absolute top-0 start-50 translate-middle rounded-circle"
                width="30%"
            />

            <div className="p-1 pt-5 text-dark-brown bg-primary-orange rounded-top-5 text-center shadow">
                <h3>Snelter</h3>
                <h5>In Your Mom's House</h5>
            </div>

            <div className="m-3">
                <p>Email: Sssssnelter@snelter.com</p>
                <p>
                    Phone Number: <br className="show-xxl" />123-456-7890
                </p>
            </div>

            <a className="align-self-center w-50 m-3 mt-0" href="shelterdetails.html">
                <Button variant="cream" className="btn btn-lg w-100 shadow-lg" type="button">
                    Learn More
                </Button>
            </a>
        </div>
    );
};

export default ShelterPreview;
