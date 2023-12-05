import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsTop from '../../components/shelterdetails/shelterTop';
import ShelterReviewsSection from '../../components/reviews/shelterReviewsSection';
import CommentBar from '../../components/reviews/commentBar';

function ShelterReviews() {
    const [shelterData, setShelterData] = useState([]);
    const [commentsData, setComments] = useState([]);
    const { id } = useParams();
    const accessToken = localStorage.getItem('access_token');

    useEffect(() => {
        // Fetch shelter details
        fetch(`http://localhost:8000/accounts/shelter/${id}/details/`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => setShelterData(data));

        // Fetch comments for the shelter
        fetch(`http://localhost:8000/comments/shelter/${id}/`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => setComments(data));
    }, [id, accessToken]);

    const handleCommentSubmit = () => {
        // fetch updated comments and update state
        fetch(`http://localhost:8000/comments/shelter/${id}/`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => setComments(data));
    };

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">
                    <DetailsTop shelterData={shelterData} />
                    <ShelterReviewsSection commentsData={commentsData} shelterID={id} onCommentSubmit={handleCommentSubmit}/>
                </div>
            </div>
        </>
    );
}

export default ShelterReviews;