import React from 'react';
import { useNavigate } from 'react-router-dom/';
import { useParams } from 'react-router-dom';

function BlogCreateContent() {
    const accessToken = localStorage.getItem('access_token');
    const navigate = useNavigate();
    const { id } = useParams();

    function handleSubmit(event){
        event.preventDefault();

        const data = JSON.stringify({
            title: event.target.title.value,
            text: event.target.text.value,
        });

        fetch(`http://localhost:8000/blogs/creation/${id}/`, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle successful submission (after posting a comment, immediately redirect them to all blogs, so they can see)
            navigate(`/blogs/${id}`)
        })
        .catch(error => {
            console.error(error)
        });
    }

    return (
        <>
            <div onSubmit={handleSubmit} class="d-flex two-col-child w-90 m-4 p-3 px-5 py-5 bg-cream flex-column rounded">
                <form id="blogForm" class="d-flex flex-column h-100 responsive-col">
                    <div class="d-flex flex-column h-50">
                    <label class="row-form-label h1 mb-2" for="title">Blog Post Title</label>
                        <input class="form-control border border-0 h-100" placeholder="Blog post title" id="title" name="title"></input>
                        <label class="row-form-label h1 mt-3 mb-1" for="text">Content</label>
                        <textarea class="form-control border border-0 h-100" placeholder="Put your content here" id="text" name="text"></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary-orange m-3 shadow-sm" required>Post</button>
                </form>
            </div>
        </>
    )
}

export default BlogCreateContent;