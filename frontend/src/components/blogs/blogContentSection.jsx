import React from 'react';
import Blog from './blog';

function BlogContentSection(props) {
    const { blogContentData } = props;

    if (!blogContentData) {
        return null; // or handle the loading state or display an error message
    }
    
    return (
        <>
            <div data-bs-theme="petpal">
                    <div className="d-flex align-self-start mt-4 w-100 justify-content-left">
                        <div className="d-flex two-col-child w-90 m-4 px-5 py-5 bg-cream flex-column rounded">
                            <h2 className="mb-4 text-dark-brown text-decoration-underline responsive_heading">Content:</h2>
                        
                            {console.log(blogContentData)}
                            {blogContentData.map((blog) => (
                                <Blog key={blog.id} contentData={blog} />
                            ))}
                        </div>
                    </div>
            </div>
        </>
    );
}

export default BlogContentSection;