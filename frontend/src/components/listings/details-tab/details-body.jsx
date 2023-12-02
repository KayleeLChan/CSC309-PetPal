import React, { useState } from 'react';
import DetailsDetails from './details-details';
import DetailsAbout from './details-about';

const DetailsBody = () => {
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);

    const handleDetailsShow = async () => {
        //   try {
        //     const response = await fetch(`http://localhost:8000/notifications/${notification.id}/`,
        //     {
        //         headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNjc2NTAzLCJpYXQiOjE3MDE0NjY5MDMsImp0aSI6ImEyMDA4OWY2NzY3ZTRjYmNiYjdhYzRhNTU1NWViMzdiIiwidXNlcl9pZCI6MX0.Em63InqkhayO9AFzGVAy1Y7B-FvPysNxG7--1yWFPJ4",}
        //     });  //TODO: Make authorization better later
        //   } catch (error) {
        //     console.error('Error fetching detailed notification:', error);
        //   }
        setShowDetailsModal(true);
    };

    const handleDetailsHide = () => {
        setShowDetailsModal(false);
    };

    return (
        <>
            <DetailsDetails></DetailsDetails>
            <DetailsAbout></DetailsAbout>
        </>
    );
}

export default DetailsBody;