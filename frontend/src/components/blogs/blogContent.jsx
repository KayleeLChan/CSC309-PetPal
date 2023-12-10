import React from 'react';
import BlogContentSection from './blogContentSection';

function BlogContent(props) {
    console.log(props)
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="d-flex align-self-start mt-4 w-100 justify-content-left">
                    <div className="d-flex two-col-child w-90 m-4 px-5 py-5 bg-cream flex-column rounded">
                        {/* shelter logo */}
                        <img src={props.blogContent.profilepic} className="user-pic two-col-child align-self-center rounded-circle m-5 mt-3 mb-3" />
                        {/* blog title */}
                        <h1 className="text-primary-brown mb-1">{props.blogContent.blog_title}</h1>
                        {/* shelter author name */}
                        <h5 className="text-primary-cream mb-1">author: {props.blogContent.author_name}</h5>
                        {/* blog creation time */}
                        <h5 className="text-primary-cream mb-1">created: {props.blogContent.creation_time}</h5>
                        {/* <p className="text-primary-brown mb-1">
                            {props.blogContent.text}
                        </p> */}
                        <BlogContentSection blogContentData={props.blogContent}></BlogContentSection>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogContent;