import React from 'react';
import DetailsTop from './details-top';
import DetailsBody from './details-body';

const DetailsTab = ({listing, formData, setFormData, images, setImages }) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <DetailsTop listing={listing} formData={formData} setFormData={setFormData} images={images} setImages={setImages}></DetailsTop>
            <DetailsBody listing={listing} formData={formData} setFormData={setFormData}></DetailsBody>
        </div>
    );
}

export default DetailsTab;