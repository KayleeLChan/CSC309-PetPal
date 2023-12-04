import React from 'react';

function ViewSeekerProfile(props) {
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">
                <div className="d-flex flex-column justify-content-center align-items-center hide-md w-50 two-col-child">
                    <h1>Hi {props.data.first_name}!</h1>
                    <div className="paddingify">
                        <div className="d-flex flex-row">
                        <h2 className="font-plain">Username: {props.data.username}</h2>
                        </div>
                        <hr/>
                        <div className="d-flex flex-row">
                        <h2 className="font-plain">Phone: {props.data.phonenumber}</h2>
                        </div>
                        <hr/>
                        <div className="d-flex flex-row">
                        <h2 className="font-plain">Email: {props.data.email}</h2>
                        </div>
                    </div>
                    <button className="btn-primary-orange" onClick={props.displayUpdate}>Update</button>
                    <p>Click Update to view all user details and edit your profile</p>
                    {/* paws */}
                    <img className="hide-xl" src="/imgs/Group_9.svg" height="50%" width="50%" alt="paws"></img>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ViewSeekerProfile;