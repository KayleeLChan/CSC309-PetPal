import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom/';

function BlogCreate() {
    const accessToken = localStorage.getItem('access_token');
    const currShelterName = localStorage.getItem('username');
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const dataBody = JSON.stringify({
            blog_title: event.target.blog_title.value,
            description: event.target.description.value,
            author_name: currShelterName
        });
    
        try {
            // Use the updated state directly here
            console.log(dataBody);
            const response = await fetch('http://localhost:8000/blogs/creation/', {
                method: 'POST',
                body: dataBody,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            });
    
            const responseData = await response.json();
    
            // Handle successful submission
            navigate('/blogs');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div onSubmit={handleSubmit} className="d-flex two-col-child w-90 m-4 p-3 px-5 py-5 bg-cream flex-column rounded">
                <form id="blogForm" className="d-flex flex-column h-100 responsive-col">
                    <div className="d-flex flex-column mb-3 h-50">
                        <label className="row-form-label h1 mb-1" for="blog_title">Blog Title</label>
                        <input type="text" className="form-control border border-0 h-100" placeholder="Put your blog title here" id="blog_title" name="blog_title" required />
                    </div>
                    <div className="d-flex flex-column h-50">
                        <label className="row-form-label h1 mb-1" for="description">Description</label>
                        <textarea className="form-control border border-0 h-100" placeholder="Put your blog description here" id="description" name="description"></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary-orange m-3 shadow-sm" required>Post</button>
                </form>
            </div>
        </>
    )
}

export default BlogCreate;