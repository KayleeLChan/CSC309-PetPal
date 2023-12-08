import React from 'react';

function BlogContent(props) {
    console.log(props)
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="d-flex align-self-start mt-4 w-100 justify-content-left">
                    <div className="d-flex two-col-child w-90 m-4 px-5 py-5 bg-cream flex-column rounded">
                        {/* shelter logo */}
                        <img src={props.blogContent.profilepic} className="user-pic two-col-child align-self-center rounded-circle m-5 mt-3 mb-3" />
                        {/* shelter author name */}
                        <p className="text-primary-brown mb-1">
                            {props.blogContent.author_name}
                        </p>
                        <p className="text-primary-brown mb-1">
                            {props.blogContent.text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogContent;