import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard.jsx";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/blog`
        );
        // console.log("Fetched blogs:", response.data);

        setBlogs(response.data);
      } catch(err) {
        console.err("Error fetching blogs", err)
        setError("Something went wrong while fetching blogs");
      }
    };
    fetchBlogs();
  }, []);
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section
      id="blogs"
      className="xl:py-30 xl:px-26 xl:mt-20 max-xl:p-3 max-xl:mt-24 max-xl:mb-14"
    >
      <div className="xl:text-center md:max-lg:text-center">
        <p className="text-[#B4A734] md:max-lg:text-lg">Popular Blogs</p>
        <h1 className="xl:text-4xl max-xl:text-xl max-xl:text-center md:max-lg:text-2xl font-semibold xl:mb-10 text-[#0F2917]">
          Thoughts, trends and stories shaping the built world
        </h1>
      </div>
      <div>
        {blogs.length === 0 ? (
          <div>
            <motion.p
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-3xl text-[#0F2917] mt-2 text-center"
            >
              Coming Soon...
            </motion.p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center max-xl:flex-col ">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} {...blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
