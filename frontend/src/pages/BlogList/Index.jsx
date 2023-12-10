import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from "react-router-dom";
import BlogListSection from '../../components/blogs/blogListSection';


function BlogList() {
    const [data, setData] = useState([]);
    const accessToken = localStorage.getItem('access_token');
    const [searchParams, setSearchParams] = useSearchParams();

    // useMemo to store search parameters
    const query = useMemo(
        () => ({
            shelter: searchParams.get("shelter") ?? "all",
        }),
        [searchParams]
    );

    useEffect(() => {
        const queryParams = new URLSearchParams({
            shelter: query.shelter,
        });

        fetch(`http://localhost:8000/blogs/?${queryParams}`)
            .then(response => response.json())
            .then(response_data => {
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
                    <div className="d-flex p-4 align-self-center align-items-center mt-4 w-100 justify-content-center bg-brown rounded-2">
                        {/* <img src="/imgs/shelter.svg" width="10%" height="10%" alt="" /> */}
                        <h1 className="text-primary-cream">All Blogs</h1>
                    </div>
                    {/*List of Blogs*/}
                    <BlogListSection blogData={data}/>
                </div>
            </div>
        </>
    );

}

export default BlogList;