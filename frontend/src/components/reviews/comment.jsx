import React from 'react';

function Comment(props) {
    return (
        <>
            <div data-bs-theme="petpal">
                <div className="p-2 d-flex flex-row m-4 justify-content-left align-items-center bg-primary-cream rounded-2">
                    {/* <img src="./imgs/Zawg.png" className="rounded-circle border border-1 user-pic m-3" alt="User Profile" /> */}
                    
                    <div className="d-flex flex-column">
                        {/* <div className="d-flex flex-row w-15 mt-2">
                                <img src="./imgs/reviewstar.png" width="30%" height="30%" className="m-1 empty-star" alt="Empty Star" />
                                <img src="./imgs/reviewstar.png" width="30%" height="30%" className="m-1 empty-star" alt="Empty Star" />
                                <img src="./imgs/reviewstar.png" width="30%" height="30%" className="m-1 empty-star" alt="Empty Star" />
                                <img src="./imgs/reviewstar.png" width="30%" height="30%" className="m-1 empty-star" alt="Empty Star" />
                                <img src="./imgs/reviewstar.png" width="30%" height="30%" className="m-1 empty-star" alt="Empty Star" />
                            </div> */}
                        <p className="mb-1 text-primary-brown fw-bold">@{props.commentData.author_name}</p>
                        <p className="mb-1 text-primary-brown">{props.commentData.text}</p>
                        {/* <h5 className="text-primary-brown"></h5> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comment;