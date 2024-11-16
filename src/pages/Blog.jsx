import BlogPage from "../components/BlogPage";

const Blog = () => {
  return (
    <div className="">
      <div className='py-40 bg-black text-center text-white px-4'>
      <h2 className=' text-5xl lg:text-7xl leading-snug font-bold mb-5'>
        Blogs
      </h2>
    
      </div>
        {/* all blogs */}
        <div className="max-w-7 p-4">
        <BlogPage/>
      </div>
    </div>
    
  );
};

export default Blog;
