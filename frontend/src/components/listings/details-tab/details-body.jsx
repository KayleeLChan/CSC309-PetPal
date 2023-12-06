import React, { useState } from 'react';
import DetailsDetails from './details-details';
import DetailsAbout from './details-about';

const DetailsBody = ({listing, formData, setFormData}) => {
    return (
        <>
            <DetailsDetails listing={listing} formData={formData} setFormData={setFormData}></DetailsDetails>
            <DetailsAbout listing={listing} formData={formData} setFormData={setFormData}></DetailsAbout>
        </>
    );
}

export default DetailsBody;