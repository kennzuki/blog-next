
import { useState,useEffect } from 'react';
import BlogCard from "./BlogCard";

const BlogPage = () => {
  const [blogs, setBlogs] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      let url = `http://localhost:5000/blogs`;
      const res = fetch(url);
      const data = res.json();
      console.log(data);

      setBlogs(data);
    }
    fetchPosts();
  }, []);
  console.log(blogs);

    return <div>
        {/* categories */}
        <section className=""></section>
        {/* blog cards */}
        <section className="">
            <BlogCard blogs={blogs}/>
        </section>
        {/* cpagination */}
        <section className=""></section>
  </div>;
};

export default BlogPage;
