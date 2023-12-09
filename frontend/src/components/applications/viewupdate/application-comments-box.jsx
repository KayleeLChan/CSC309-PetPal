import React from 'react';

const ChatComponent = ({ user }) => {
    console.log(user);
    return (
        <div className="d-flex flex-column m-4 mb-3 text-dark-brown bg-white rounded-5 position-relative mx-auto w-100 chat">
            
            <img 
                src={user.profilepic} 
                className="position-absolute top-0 start-50 translate-middle rounded-circle" 
                width="25%" 
                alt={user.first_name} />

            <div className="p-1 pt-5 text-dark-brown bg-primary-orange rounded-top-5 text-center shadow">
                <h2 className="responsive_heading">{user.first_name}</h2>
            </div>

        </div>  
    );
};

export default ChatComponent;