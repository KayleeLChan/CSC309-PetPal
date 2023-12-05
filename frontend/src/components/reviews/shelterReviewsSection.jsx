import React from 'react';
import Comment from './comment';
import CommentBar from './commentBar';

function ShelterReviewsSection(props) {
    const { commentsData, shelterID } = props;

    // Check if commentsData is undefined or commentsData.results is undefined
    if (!commentsData || !commentsData.results) {
        return null; // or handle the loading state or display an error message
    }

    return (
        <>
            <div data-bs-theme="petpal">
                    <div className="d-flex align-self-start mt-4 w-100 justify-content-left">
                        <div className="d-flex two-col-child w-90 m-4 px-5 py-5 bg-cream flex-column rounded">
                            {commentsData.results.map((comment) => (
                                <Comment key={comment.id} commentData={comment} />
                            ))}

                            <CommentBar shelterID={shelterID}/>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default ShelterReviewsSection;