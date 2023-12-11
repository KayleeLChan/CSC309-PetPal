import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

function CommentBar(props) {
    const [err, setError] = useState("")
    const accessToken = localStorage.getItem('access_token');
    const { objectID, onCommentSubmit, commentType } = props;

    function handleSubmit(event) {
        event.preventDefault();

        // Format the text field
        let data = new FormData(event.target);
        
        if (commentType == "shelter") {
            const textValue = event.target.text.value;
            const ratingValue = event.target.rating.value;
            if (ratingValue) {
                const formattedText = `Rating: ${ratingValue.toString()}/5\n${textValue}`;
                data.set('text', formattedText);
            }
        }

        fetch(`http://localhost:8000/comments/${commentType}/${objectID}/`, {
            method: 'POST',
            body: data,
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                // Handle successful submission
                setError("");
                onCommentSubmit();
            })
            .catch(error => {
                setError(error.toString());
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="commentForm" className="w-100">
                <div className="d-flex row-to-column col-sm-10 w-100">
                    <textarea className="form-control bg-primary-cream font-plain w-75" id="comment_bar" name="text" placeholder="Type your comment here!" required />
                    {commentType == "shelter" ? (<div className="d-flex flex-row mx-3 align-items-center text-center">
                        <p className="mb-0">Rating: </p><Form.Control type="number"
                            id="rating"
                            className="mx-1 ps-2"
                            max="5"
                            min="0"
                            step="1"
                            required={false} /><p className="mb-0">/5</p>
                    </div>) : <></>}
                    <button type="submit" className="btn btn-lg btn-primary-orange m-3 shadow-sm" required>{'>'}</button>
                </div>
            </form>
        </>
    );
}

export default CommentBar;