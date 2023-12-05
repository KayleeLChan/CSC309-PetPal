import React from 'react';
import Comment from './comment';
import CommentBar from './commentBar';

function ShelterReviewsSection(props) {
    const { commentsData, shelterID, onCommentSubmit } = props;

    // Check if commentsData is undefined or commentsData.results is undefined
    if (!commentsData || !commentsData.results) {
        return null; // or handle the loading state or display an error message
    }

    // // console.log(sortedComments);
    // const sortedComments = (commentsData.results).sort((a, b) => b.creation_field - a.creation_time)
    // console.log(sortedComments)

    return (
        <>
            <div data-bs-theme="petpal">
                    <div className="d-flex align-self-start mt-4 w-100 justify-content-left">
                        <div className="d-flex two-col-child w-90 m-4 px-5 py-5 bg-cream flex-column rounded">
                            <h2 className="mb-4 text-dark-brown text-decoration-underline responsive_heading">Comments:</h2>
                            <CommentBar shelterID={shelterID} onCommentSubmit={onCommentSubmit}/>

                            {commentsData.results.map((comment) => (
                                <Comment key={comment.id} commentData={comment} />
                            ))}
                        </div>
                    </div>
            </div>
        </>
    );
}

export default ShelterReviewsSection;