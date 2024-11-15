import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto text-white">
      <section className="text-center flex flex-col gap-6 items-center">
        <h1 className="text-white text-5xl lg:text-7xl font-bold mb-5">Welcome to My Blog</h1>
        <p className="text-gray-400 mx-auto mb-6 w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum orci eu ipsum viverra, vel semper ex scelerisque. Donec rutrum orci eu ipsum viverra, vel semper ex scelerisque.
        </p>
        <Link to='/about' className="hover:text-orange-500 flex gap-2 place-items-center mx-auto">Learn more <FaArrowRight className="mt-1"/></Link>
      </section>
    </div>
  )
}

export default Hero