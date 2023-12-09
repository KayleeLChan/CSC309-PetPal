import React from 'react';
import UpdatePhoto from './updatePhoto';


function ViewSeekerProfile(props) {
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main mh-100 d-flex two-col">
                <div className="d-flex flex-column justify-content-center align-items-center w-50 two-col-child">
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
                        <hr/>

                        <h2>Your Pet Preferences</h2>

                        <div className="d-flex flex-row">
                        <h2 className="font-plain">Preferred Animal: {props.data.pref_animal}</h2>
                        </div>
                        <hr/>
                        <div className="d-flex flex-row">
                        <h2 className="font-plain">Preferred Colour: {props.data.pref_colour}</h2>
                        </div>
                        <hr/>
                        <div className="d-flex flex-row">
                        <h2 className="font-plain">Preferred Age: {props.data.pref_age}</h2>
                        </div>
                        <hr/>
                        <div className="d-flex flex-row">
                        <h2 className="font-plain">Preferred Size: {props.data.pref_size}</h2>
                        </div>
                        <hr/>
                        <div className="d-flex flex-row">
                        <h2 className="font-plain">Preferred Sex: {props.data.pref_sex}</h2>
                        </div>
                        <hr/>
                        <div className="d-flex flex-row">
                        <h2 className="font-plain">Preferred Personality: {props.data.pref_personality}</h2>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary-orange m-3 shadow-sm" onClick={props.displayUpdate}>Update</button>
                    <p>Click Update to view all user details and edit your profile</p>
                    {/* paws */}
                    <img className="hide-xl" src="/imgs/Group_9.svg" height="50%" width="50%" alt="paws"></img>
                </div>
                <div className="d-flex flex-column bg-primary-brown align-items-center w-50 two-col-child justify-content-center">
                    <UpdatePhoto data={props.data}/>
                    <button className="btn btn-lg btn-primary-orange m-3 shadow-sm" onClick={props.handleDelete}>Delete Account</button>
                </div>
                </div>
            </div>
        </>
    );
}

export default ViewSeekerProfile;