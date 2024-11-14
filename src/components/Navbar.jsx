import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/about', link: 'About' },
    { path: '/services', link: 'Services' },
    { path: '/blogs', link: 'Blogs' },
    { path: '/contact', link: 'Contact' },
    // Add more items as needed
  ];
 
  return (
    <header className='bg-black'>
      <nav className='p-4 flex justify-between gap-6 place-items-center'>
        <a href='' className='text-3xl text-white font-bold uppercase'>
          Ken<span className="text-yellow-400">ki</span> 
        </a>
        {/* nav links */}
        <ul className='md:flex place-items-center gap-12 text-lg'>
                  {navItems.map(({ path, link }) => (
                      <li className="" key={path}>
                          <NavLink  to={path} className='text-white hover:text-gray-400'>
              {link}
            </NavLink>
              </li>
            
          ))}
          <li className='ml-4'>
            <button className='bg-white px-4 py-2 text-black rounded-md'>
              Sign Up
            </button>
          </li>
          <li className='ml-4'>
            <button className='bg-gray-400 px-4 py-2 text-white rounded-md'>
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
