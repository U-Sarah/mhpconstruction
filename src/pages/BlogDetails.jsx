import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/blog/${id}`);
        setBlog(res.data);
      } catch (error) {
        console.log("Error in fetching blog deatils", error);
      }
    };
    fetchBlog();
  }, [id]);
  if (!blog) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <h1>{blog.topic}</h1>
      <img src={blog.image} alt="" />
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
      </div>
    </section>
  );
};

export default BlogDetails;
