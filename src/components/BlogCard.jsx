import { Link } from 'react-router-dom';
import { data } from '../api/data.js';
import { FaUser } from 'react-icons/fa';

const BlogCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4'>
      {data.map((blog) => (
        <Link
          className='flex flex-col gap-3 items-start border p-8 rounded-xl'
          key={blog.id}
        >
          <div className='p-4 '>
            <img src={blog.image} alt='' className='w-full rounded-xl' />
          </div>
          <p className='font-bold'>{blog.title}</p>
          <p className='text-gray-600 flex gap-2 place-items-center'>
            <FaUser /> {blog.author}
          </p>
          <p className='text-sm text-gray-600'>
            Published: {blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
