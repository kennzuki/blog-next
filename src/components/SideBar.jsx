import { useState } from 'react';
import { data } from '../api/data.js';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [blogs, setBlogs] = useState(data.slice(0, 86));

  // Get latest posts (most recent 5 posts)
  const latestPosts = [...blogs]
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .slice(0, 9);

  //map blog to get filtered posts from latest published
  const filterdPosts = latestPosts.map((blog) => (
    <div className='flex flex-col gap-2 mb-8 border-b p-4 shadow-xl rounded' key={blog.id}>
      <h3 className='font-semibold'>{blog.title}</h3>
      <Link className='text-orange-500 capitalize flex gap-4 place-items-center cursor-pointer'>
        <FaArrowRight />
        read more
      </Link>
    </div>
  ));

  return (
    <div className='xs:hidden mx-auto'>
      <section className='xs:hidden mx-auto'>
        <h3 className='text-2xl text-orange-500 mb-8'>Latest Blogs</h3>
        {filterdPosts}
      </section>
    </div>
  );
};

export default SideBar;
