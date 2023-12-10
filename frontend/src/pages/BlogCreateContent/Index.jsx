import React from 'react';
import { useNavigate } from 'react-router-dom/';
import { useParams } from 'react-router-dom';

function BlogCreateContent() {
    const accessToken = localStorage.getItem('access_token');
    const currShelterName = localStorage.getItem('username');
    const navigate = useNavigate();
    const { id } = useParams();

    function handleSubmit(event){
        let data = new FormData(event.target);
        data.append('Blog', id);

        console.log(event.target)
        console.log(data)

        fetch(`http://localhost:8000/blogs/creation/${id}/`, {
            method: 'POST',
            body: data,
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle successful submission (after posting a comment, immediately redirect them to all blogs, so they can see)
            // console.log(data);
            navigate("/accounts/blogs/")
        })
        .catch(error => {
            console.log(error)
        });

        event.preventDefault();
    }

    return (
        <>
            <div onSubmit={handleSubmit} class="d-flex two-col-child w-90 m-4 p-3 px-5 py-5 bg-cream flex-column rounded">
                <form id="blogForm" class="d-flex flex-column h-100 responsive-col">
                    <div class="d-flex flex-column h-50">
                        <label class="row-form-label text-primary-cream h1 mb-1" for="text">Content</label>
                        <textarea class="form-control border border-0 h-100" placeholder="Put your content here" id="text" name="text"></textarea>
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary-orange m-3 shadow-sm" required>Post</button>
                </form>
            </div>
        </>
    )
}

export default BlogCreateContent;