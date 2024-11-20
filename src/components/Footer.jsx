import { Link } from "react-router-dom";


const Footer = () => {
  return (
      <div className="bg-[#0C0F19] text-gray-200 px-8 pt-16 mx-auto">
           <div className=" grid xs:grid-cols-1 md:grid-cols-4 mx-auto gap-4 [&_section]:items-center [&_section]:mb-8 [&_Link]:text-gray-400 [&_h4]:text-xl [&_h4]:font-bold [&_Link]:cursor-pointer" >
          {/* 1 */}
          <section className="flex flex-col gap-2 ">
              <h4 className="text-gray-100">Category</h4>
              <Link>News</Link>
              <Link>World</Link>
              <Link>Games</Link>
              <Link>Referencess</Link>
          </section>
          {/* 2 */}
          <section className="flex flex-col gap-2">
              <h4 className="text-gray-100">Apples</h4>
              <Link>Web</Link>
              <Link>eCommerce</Link>
              <Link>Business</Link>
              <Link>Entertainmment</Link>
          </section>
          {/* 3*/}
          <section className="flex flex-col gap-2">
              <h4 className="text-gray-100">Cherry</h4>
              <Link>Media</Link>
              <Link>Brochure</Link>
              <Link>Nonprofit</Link>
              <Link>Education</Link>
          </section>
          {/* 4 */}
          <section className="flex flex-col gap-2">
              <h4 className="text-gray-100">Business</h4>
              <Link>Infopreneur</Link>
              <Link>Personal</Link>
              <Link>Wiki</Link>
              <Link>Forum</Link>
              <Link>Project</Link>
          </section>
          </div>
          {/* copyright */}
          <div className="flex justify-center my-8">
              <p className="text-gray-300">Copyright © 2024. All rights reserved.</p>
     
     </div>
     </div>
  )
}

export default Footer