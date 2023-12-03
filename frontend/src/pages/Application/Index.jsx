import React from 'react';
import { useParams } from "react-router-dom";

function Application() {
    // when doing get request to application, pass in name 
    const { id } = useParams();

    return ( <>
        <div data-bs-theme="petpal">
            <div className="main">                 
            {/* CONTENT STARTS HERE */}

                {/* Left Column Start */}
                <div className="d-flex flex-column w-50 m-5 bg-cream flex-column align-items-center two-col-child">

                    <applicationSheet></applicationSheet>
                
                </div>
                {/* Left Column End */}


                {/* Right Column Start */}
                <div className="d-flex flex-column m-5 p-5 justify-content-start align-items-center w-40 text-primary-brown two-col-child">
                
                    <StatusBox></StatusBox>
                
                </div>
                {/* RIght Column End */}



            </div>
        </div> 
    </> );
}

export default Application;