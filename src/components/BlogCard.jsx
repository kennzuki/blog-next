import { Link } from 'react-router-dom';
import { data } from '../api/data.js';
import { FaUser } from 'react-icons/fa';
import { useState } from "react";
import ReactPaginate from 'react-paginate'

const BlogCard = () => {
  const [blogs, setBlogs] = useState(data.slice(0, 86));
  const [pageNumber, setPageNumber] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  

  // Get unique categories
  const categories = ['All', ...new Set(data.map(blog => blog.category))];

  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const perPage = 12;
  const pagesVisited = pageNumber * perPage;
  
  const displayPosts = filteredBlogs
    .slice(pagesVisited, pagesVisited + perPage)
    .map(blog => (
      <Link
        to={`/blog/${blog.id}`}
        className='flex flex-col gap-3 items-start border p-8 rounded-xl shadow-xl'
        key={blog.id}
      >
        <div className='p-4  hover:scale-105 duration-300'>
          <img src={blog.image} alt='' className='w-full rounded-xl' />
        </div>
        <p className='font-bold'>{blog.title}</p>
        <p className='text-gray-600 flex gap-2 place-items-center'>
          <FaUser /> {blog.author}
        </p>
        <p className='text-sm text-gray-400'>
          Published: {blog.published_date}
        </p>
        <p className='text-sm text-gray-400'>
          Category: {blog.category}
        </p>
      </Link>
    ));

  const pageCount = Math.ceil(filteredBlogs.length / perPage);

  return (
    <div>
      {/* Category Filter Buttons */}
      <div className='flex flex-wrap justify-center gap-2 mb-6'>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setPageNumber(0); // Reset to first page when changing category
            }}
            className={`px-4 py-2 rounded border-b ${
              selectedCategory === category 
                ? 'bg-yellow-500 text-white hover:scale-105 duration-300' 
                : 'bg-orange-500 text-white hover:scale-105 duration-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4'>
        {displayPosts}
      </div>

      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={({ selected }) => setPageNumber(selected)}
        containerClassName="flex space-x-2 items-center mx-auto my-8"
        pageLinkClassName="px-3 py-2 border rounded hover:bg-gray-100"
        activeLinkClassName="bg-blue-500 text-white"
        previousLinkClassName="px-3 py-2 border rounded hover:bg-gray-100"
        nextLinkClassName="px-3 py-2 border rounded hover:bg-gray-100"
      />
    </div>
  );
};

export default BlogCard;