import React from 'react';
import DetailsTop from './details-top';
import DetailsBody from './details-body';

const DetailsTab = ({listing}) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <DetailsTop listing={listing}></DetailsTop>
            <DetailsBody listing={listing}></DetailsBody>
        </div>
    );
}

export default DetailsTab;