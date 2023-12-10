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
        console.log(data);

        // Convert the single object to an array
        const contentArray = Array.isArray(data) ? data : [data];
        setBlogContentData(contentArray);
      });
  }, [id, accessToken]);

  function navigateCreateBlogContent() {
    navigate(`/accounts/blogs/${id}/create`);
  }

  return (
    <div data-bs-theme="petpal">
      <div className="main">
        <h1>{blogData.blog_title}</h1>
        <p>{blogData.creation_time}</p>
        <p>{blogData.author_name}</p>
        {/* {console.log(blogData)} */}

        <Button variant="primary-cream" className="my-2" onClick={navigateCreateBlogContent}>Add Post to this Blog</Button>

        {/* Render the BlogContent component for each entry in blogData.blog_content */}
        {console.log(blogContentData)}
        <BlogContentSection blogContentData={blogContentData}></BlogContentSection>

      </div>
    </div>
  );
}

export default BlogDetails;
