import React from 'react';
import { useNavigate } from 'react-router-dom/';
import { useState } from 'react';

function CommentBar(props) {
    const [err, setError] = useState("")
    const accessToken = localStorage.getItem('access_token');

    function handleSubmit(event){
        let data = new FormData(event.target);
        console.log(event.target)
        console.log(data)

        fetch(`http://localhost:8000/comments/shelter/${props.shelterID}/`, {
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
        })
        .catch(error => {
            console.log("catch")
            setError(error.toString());
        });

        event.preventDefault();
    }
    
    return (
        <>
            <form onSubmit={handleSubmit} id="commentForm">
                {/* <textarea
                    value={newComment}
                    onChange={handleInputChange}
                    placeholder="Type your comment..."
                /> */}
                <div className="col-sm-10">
                    <textarea className="form-control bg-primary-cream font-plain w-100 max-width-100" id="comment_bar" name="text" placeholder="Type your comment here!" required />
                    <button type="submit" className="btn btn-lg btn-primary-orange m-3 shadow-sm" required>Post</button>
                </div>
            </form>
        </>
    );
}

export default CommentBar;