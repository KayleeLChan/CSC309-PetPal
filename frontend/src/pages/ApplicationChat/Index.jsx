import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsTop from '../../components/shelterdetails/shelterTop';
import ShelterReviewsSection from '../../components/reviews/shelterReviewsSection';
import CommentBar from '../../components/comments/commentBar';
import ApplicationChatSection from '../../components/applications/chat/applicationChatSection';

function ApplicationChat() {
    const [shelterData, setShelterData] = useState([]);
    const [commentsData, setComments] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [query, setQuery] = useState({ page: 1 });
    const { id } = useParams();
    const accessToken = localStorage.getItem('access_token');

    useEffect(() => {
        // Fetch shelter details (not really used here)
        fetch(`http://localhost:8000/accounts/shelter/${id}/details/`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => setShelterData(data));

        // Fetch comments for the shelter
        const { page } = query;
        fetch(`http://localhost:8000/comments/application/${id}/?page=${page}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setComments(data)
                setTotalPages(Math.ceil(Number(data.count) / 10))
            });
    }, [id, accessToken, query]);

    const handleCommentSubmit = () => {
        const { page } = query;
        setQuery({ ...query, page: 1 });
        fetch(`http://localhost:8000/comments/application/${id}/?${page}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setComments(data)
                setTotalPages(totalPages + 1)
            })
    };

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main">
                    <ApplicationChatSection commentsData={commentsData} applicationID={id} onCommentSubmit={handleCommentSubmit} setQuery={setQuery} query={query} totalPages={totalPages} />
                </div>
            </div>
        </>
    );
}

export default ApplicationChat;