import React from 'react';
import Comment from '../comments/comment';
import CommentBar from '../comments/commentBar';
import PaginationButtons from '../pagination-buttons';

function ShelterReviewsSection(props) {
    const { commentsData, shelterID, onCommentSubmit, setQuery, query, totalPages} = props;

    // Check if commentsData is undefined or commentsData.results is undefined
    if (!commentsData || !commentsData.results) {
        return null; // or handle the loading state or display an error message
    }

    // const sortedComments = (commentsData.results).sort((a, b) => b.creation_field - a.creation_time)

    const handlePageChangePrev = () => {
        // Increment the current page number
        if(query.page != 1){
            const nextPage = query.page - 1;
            setQuery({ ...query, page: nextPage });
        }
    };
    const handlePageChangeNext = () => {
        // Increment the current page number
        if(query.page != Math.ceil(totalPages / 5)){
            const nextPage = query.page + 1;
            setQuery({ ...query, page: nextPage });
        }
    };

    return (
        <>
            <div data-bs-theme="petpal">
                    <div className="d-flex align-self-start mt-4 w-100 justify-content-left">
                        <div className="d-flex two-col-child w-90 m-4 px-5 py-5 bg-cream flex-column rounded">
                            <h2 className="mb-4 text-dark-brown text-decoration-underline responsive_heading">Comments:</h2>
                            <CommentBar objectID={shelterID} onCommentSubmit={onCommentSubmit} commentType='shelter'/>

                            {commentsData.results.map((comment) => (
                                <Comment key={comment.id} commentData={comment} />
                            ))}
                        </div>
                    </div>
                    <PaginationButtons query={query} setSearchParams={setQuery} totalPages={totalPages} />

            </div>
        </>
    );
}

export default ShelterReviewsSection;