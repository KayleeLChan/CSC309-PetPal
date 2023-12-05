import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsTop from '../../components/shelterdetails/shelterTop';
import ShelterReviewsSection from '../../components/reviews/shelterReviewsSection';
import CommentBar from '../../components/reviews/commentBar';

function ShelterReviews() {
    const [shelterData, setShelterData] = useState([]);
    const [commentsData, setComments] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [ query, setQuery ] = useState({page: 1});
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
        const { page } = query;
        fetch(`http://localhost:8000/comments/shelter/${id}/?page=${page}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => setComments(data));
    }, [id, accessToken, query]);

    const handleCommentSubmit = () => {
        // fetch updated comments and update state
        
        // const { page } = query;
        // const queryString = new URLSearchParams({ page }).toString(); // Create a query string with only the 'page' parameter
        // fetch(`http://localhost:8000/comments/shelter/${id}/?${queryString}`, {
        //     headers: {
        //         'Authorization': `Bearer ${accessToken}`
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => setComments(data));
        const { page } = query;
        setQuery({ ...query, page: 1 });
        fetch(`http://localhost:8000/comments/shelter/${id}/?${page}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => setComments(data))
    };

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">
                    <DetailsTop shelterData={shelterData} />
                    {/* {console.log(commentsData)} */}
                    <ShelterReviewsSection commentsData={commentsData} shelterID={id} onCommentSubmit={handleCommentSubmit} setQuery={setQuery} query={query} totalPages={totalPages}/>
                </div>
            </div>
        </>
    );
}

export default ShelterReviews;