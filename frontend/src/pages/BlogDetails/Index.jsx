import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/';
import BlogContent from '../../components/blogs/blogContent';

function BlogDetails() {
  const [blogData, setData] = useState([]);
  const { id } = useParams();
  const accessToken = localStorage.getItem('access_token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate(`/accounts`);
      return;
    }

    fetch(`http://localhost:8000/blogs/${id}/`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => setData(data));
  }, [id, accessToken, navigate]);

  return (
    <>
      <div data-bs-theme="petpal">
        <div className="main">
            <BlogContent blogContent={blogData}/>
        </div>
      </div>
    </>
  );
}


export default BlogDetails;