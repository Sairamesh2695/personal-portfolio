import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {

  const [nav,Setnav] = useState(false)

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "portfolio", label: "Portfolio" },
    { id: 4, link: "experience", label: "Experience" },
    { id: 5, link: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      Setnav(false);
    }
  };


  return (
    <div className='flex justify-between items-center w-full h-20
    px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Ramesh</h1>
        </div>
        <ul className='hidden md:flex'>
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              onClick={() => scrollToSection(link)}
              className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'
            >
              {label}
            </li>
          ))}
        </ul>

        <div onClick={() => Setnav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
        </div>

        {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({ id, link, label }) => (
              <li
                key={id}
                onClick={() => scrollToSection(link)}
                className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200'
              >
                {label}
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default Navbar;
