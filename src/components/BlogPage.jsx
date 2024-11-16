
// import { useState,useEffect } from 'react';
import BlogCard from "./BlogCard";


const BlogPage = () => {
  

  // useEffect(() => {
  //    function fetchPosts() {
  //     let url = `http://localhost:5173/api/blogData.json`;
  //     const res =  fetch(url);
      // const data = res.json();
      // console.log(data);

  //     setBlogs(data);
  //   }
  //   fetchPosts();
  // }, []);
  // console.log(blogs);

    return <div>
        {/* categories */}
        <section className=""></section>
        {/* blog cards */}
        <section className="">
            <BlogCard/>
        </section>
        {/* cpagination */}
        <section className=""></section>
  </div>;
};

export default BlogPage;
