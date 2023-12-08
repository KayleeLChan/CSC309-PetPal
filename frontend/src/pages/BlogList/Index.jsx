import React from 'react';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

function BlogList() {

    const [data, setData] = useState([]);
    const accessToken = localStorage.getItem('access_token');

    useEffect(() => {
        fetch('http://localhost:8000/blogs/all/', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(response_data => {
                // console.log(response_data);
                setData(response_data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, [accessToken]);

    return (
        <>
            <div data-bs-theme="petpal">
                <div className="main d-flex flex-column justify-content-center align-items-center justify-content-center bg-primary-orange">
                    <h1>All Blogs</h1>
                    <img src="/imgs/shelter.svg" width="10%" height="10%" alt="" />
                    {/* {console.log(data)} */}
                    {data.map(blog => (
                        <div className="d-flex flex-row pt-5 pb-5" key={blog.id}>
                            <Link to={`/blogs/${blog.id}`} className="pe-5 fs-2">
                                <p className="pe-5 fs-2">"{blog.blog_title}" by {blog.author_name}</p>
                            </Link>
                            {/* <p className="pe-5 fs-2">{blog.text}</p> */}
                            {/* Render other blog details as needed */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

}

export default BlogList;