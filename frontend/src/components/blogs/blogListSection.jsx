import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function BlogListSection(props) {
    return (
        <div className="d-flex mt-4 w-100 justify-content-center">
            <div className="d-flex w-100 m-4 px-5 py-5 bg-cream flex-column rounded">
                {props.blogData.length === 0 ? (<h2 className="justify-self-center align-self-center">No blogs found</h2>) : <></>}
                {props.blogData.map(blog => (
                    <Link to={`/blogs/${blog.id}`} className="text-decoration-none d-flex flex-row">
                        <Button variant="primary-cream" className="text-dark-brown bg-none text-start w-100" key={blog.id}>
                            <h2>"{blog.blog_title}" by {blog.author_name}</h2>
                            <p className="fs-5 text-truncate font-plain">{blog.description}</p>
                        </Button>
                    </Link>

                ))}
            </div>
        </div>
    );
}

export default BlogListSection;