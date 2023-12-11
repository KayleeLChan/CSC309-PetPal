import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BlogContentSection from '../../components/blogs/blogContentSection';
import { Button } from 'react-bootstrap';

function BlogDetails() {
  const [blogData, setBlogData] = useState([]);
  const [blogContentData, setBlogContentData] = useState([]);
  const { id } = useParams();
  const accessToken = localStorage.getItem('access_token');
  const userID = localStorage.getItem('user_id')
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate(`/accounts`);
      return;
    }

    fetch(`http://localhost:8000/blogs/${id}/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setBlogData(data));

    // Fetch blog content for the Blog
    fetch(`http://localhost:8000/blogs/content/${id}/`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => {

        // Convert the single object to an array
        const contentArray = Array.isArray(data) ? data : [data];
        setBlogContentData(contentArray);
      });
  }, [id, accessToken]);

  function navigateCreateBlogContent() {
    navigate(`/blogs/${id}/create`);
  }

  function navigateShelter() {
    navigate(`/shelters/${blogData.shelter}/`);
  }

  const date = new Date(blogData.creation_time)
  const formattedDate = date.toLocaleString();

  return (
    <div data-bs-theme="petpal">
      <div className="main">
        <div className="d-flex flex-column mt-5 bg-brown rounded-1 p-3 text-primary-cream">
          <h1 className="text-primary-cream">{blogData.blog_title}</h1>
          <p>Published: {formattedDate}</p>

        </div>
        <div className="d-flex flex-auto align-items-center mt-3">
          <Button variant="cream" className="text-start btn-lg" onClick={navigateShelter}>
            Shelter: {blogData.author_name}
          </Button>
          {userID == blogData.shelter ? <Button variant="primary-cream" className="my-2" onClick={navigateCreateBlogContent}>Add Post</Button> : <></>}
        </div>

        <BlogContentSection blogContentData={blogContentData}></BlogContentSection>

      </div>
    </div>
  );
}

export default BlogDetails;
