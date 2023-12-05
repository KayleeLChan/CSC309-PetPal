import React, { useState } from 'react';
import DetailsDetails from './details-details';
import DetailsAbout from './details-about';

const DetailsBody = ({listing}) => {
    return (
        <>
            <DetailsDetails listing={listing}></DetailsDetails>
            <DetailsAbout listing={listing}></DetailsAbout>
        </>
    );
}

export default DetailsBody;