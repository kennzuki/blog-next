
// import { useState,useEffect } from 'react';

import BlogCard from "./BlogCard";
import SideBar from "./SideBar";


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
      <section className="grid xs:grid-cols-1 md:grid-cols-4 gap-8 p-8">
        <section className="col-span-3"> <BlogCard/></section>
           
            <SideBar  />
        </section>
        {/* cpagination */}
        <section className=""></section>
  </div>;
};

export default BlogPage;
