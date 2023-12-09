import React from 'react';
import { Link } from 'react-router-dom';

function BlogListSection(props) {
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="d-flex mt-4 w-100 justify-content-left">
                    <div className="d-flex two-col-child w-90 m-4 px-5 py-5 bg-cream flex-column rounded">
                        {props.blogData.map(blog => (
                            <div className="d-flex flex-row pt-5 pb-5" key={blog.id}>
                                <Link to={`/accounts/blogs/${blog.id}`} className="pe-5 fs-2">
                                    <h4 className="pe-5 fs-2">"{blog.blog_title}" by {blog.author_name}</h4>
                                </Link>

                                {/* <p className="pe-5 fs-2">{blog.text}</p> */}
                                {/* Render other blog details as needed */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogListSection;