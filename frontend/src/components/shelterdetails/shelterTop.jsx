import React from 'react';

function DetailsTop(props) {

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="d-flex two-col p-4 align-self-center align-items-center mt-4 w-100 justify-content-left bg-brown rounded-2">
                    {/* shelter logo */}
                    <img src="./imgs/torontocatrelief.png" className="user-pic two-col-child align-self-center rounded-circle m-5 mt-3 mb-3" />


                    {/* fields = ['profilepic','sheltername', 'companyaddress', 'city', 'postal', 'website', 'mission', 'policy', 'date_joined'] */}
                    {/* shelter details */}
                    <div className="two-col-child align-self-center justify-content-center w-50 mt-2 mb-3">
                        <h1 className="text-primary-cream text-decoration-underline mb-1">{props.shelterData.sheltername}</h1>
                        <h5 className="text-primary-cream mb-1">{props.shelterData.companyaddress}, {props.shelterData.city}</h5>
                        {/* <div className="d-flex flex-row w-20 mb-3">
                            <img src="/imgs/reviewstar.png" width="30%" height="30%" className="m-1" />
                            <img src="/imgs/reviewstar.png" width="30%" height="30%" className="m-1" />
                            <img src="/imgs/reviewstar.png" width="30%" height="30%" className="m-1" />
                            <img src="/imgs/reviewstar.png" width="30%" height="30%" className="m-1" />
                            <img src="/imgs/reviewstar.png" width="30%" height="30%" className="m-1 empty-star" />
                        </div> */}
                        {/* link properly later */}
                    </div>

                    {/* shelter contact details */}
                    <div className="d-flex two-col-child flex-column align-items-center align-self-center justify-content-start w-50 mb-2 mt-1">
                        <a href="sheltermanagement.html" className="text-primary-cream mb-1 h5">
                            {/* link properly later */}
                            EDIT
                        </a>
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