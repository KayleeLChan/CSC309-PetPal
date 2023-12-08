import React from 'react';
import DetailsTop from './details-top';
import DetailsBody from './details-body';

const DetailsTab = ({listing, formData, setFormData, setImages }) => {
    return (
        <div className="d-flex one-col-child w-50 m-5 p-3 px-5 bg-cream flex-column align-items-center justify-content-center rounded">
            <DetailsTop listing={listing} formData={formData} setFormData={setFormData} setImages={setImages}></DetailsTop>
            <DetailsBody listing={listing} formData={formData} setFormData={setFormData}></DetailsBody>
        </div>
    );
}

export default DetailsTab;