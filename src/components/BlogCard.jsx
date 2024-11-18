import { Link } from 'react-router-dom';
import { data } from '../api/data.js';
import { FaUser } from 'react-icons/fa';
import { useState } from "react";
import ReactPaginate from 'react-paginate'

const BlogCard = () => {
  const [blogs, setBlogs] = useState(data.slice(0, 86))
  const [pageNumber, setPageNumber] = useState(0)
  
  const perPage = 12
  const pagesVisited = pageNumber * perPage
  const displayPosts = blogs.slice(pagesVisited, pagesVisited + perPage).map(blog => (
    <Link
    className='flex flex-col gap-3 items-start border p-8 rounded-xl shadow-xl'
    key={blog.id}
  >
    <div className='p-4 '>
      <img src={blog.image} alt='' className='w-full rounded-xl' />
    </div>
    <p className='font-bold'>{blog.title}</p>
    <p className='text-gray-600 flex gap-2 place-items-center'>
      <FaUser /> {blog.author}
    </p>
    <p className='text-sm text-gray-400'>
      Published: {blog.published_date}
    </p>
  </Link>
  ))

  const pageCount=Math.ceil(blogs.length/perPage)

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4'>
      {displayPosts}
      <ReactPaginate 
        previousLabel={'Previous'}
      nextLabel={'Next'}
      pageCount={pageCount}
        onPageChange={({ selected }) => setPageNumber(selected)}
        containerClassName="flex space-x-2 items-center mx-auto my-8"
        pageLinkClassName="px-3 py-2 border rounded hover:bg-gray-100"
        activeLinkClassName="bg-blue-500 text-white"
        previousLinkClassName="px-3 py-2 border rounded hover:bg-gray-100"
        nextLinkClassName={"px-3 py-2 border rounded hover:bg-gray-100"}
        
       
      />
       
    </div>
  );
};

export default BlogCard;
