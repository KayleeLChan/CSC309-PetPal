import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogListSection from '../../components/blogs/blogListSection';


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
                <div className="main d-flex flex-column">
                    {/*Top bar*/}
                    <div className="d-flex two-col p-4 align-self-center align-items-center mt-4 w-100 justify-content-left bg-brown rounded-2">
                        <img src="/imgs/shelter.svg" width="10%" height="10%" alt="" />
                        <h1>All Blogs</h1>
                    </div>
                    {/*List of Blogs*/}
                    <BlogListSection blogData={data}/>
                </div>
            </div>
        </>
    );

}

export default BlogList;