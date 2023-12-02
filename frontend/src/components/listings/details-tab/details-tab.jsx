import React from 'react';
import DetailsTop from './details-top';
import DetailsBody from './details-body';

const DetailsTab = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <DetailsTop></DetailsTop>
            <DetailsBody></DetailsBody>
        </div>
    );
}

export default DetailsTab;