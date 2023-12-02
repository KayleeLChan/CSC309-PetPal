import React, { useState, useEffect } from 'react';

const StatusBox = () => {
    const [status, setStatus] = useState('');

    useEffect(() => {
        // Fetch the status from the JSON file
        const fetchData = async () => {
          try {
            const response = await fetch('/path/to/your/data.json'); // Adjust the path
            const data = await response.json();
            setStatus(data.status || 'PENDING'); // Set default status
          } catch (error) {
            console.error('Error fetching data:', error);
            setStatus('ERROR'); // Set an error status or handle the error accordingly
          }
        };
        fetchData(); 
    }, []); // The empty dependency array ensures this effect runs only once


    return (
        <div className="d-flex flex-column w-50 mb-5 text-dark-brown bg-white rounded-5 position-relative">
            <div className="p-1 pt-3 text-primary-cream bg-primary-orange rounded-top-5 text-center shadow">
                <h2 className="responsive_heading">Application Status</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3 mb-0">
                <h2 className="p-2">{status}</h2>
            </div>
        </div>
    );
    
};

export default StatusBox;