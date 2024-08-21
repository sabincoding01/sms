import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className=' pt-4'>
    <nav className='  container text-white px-8 md:px-16 lg:px-24 mt-4 ml-5 '>
     
      <div className=' bg-cyan-900 container py-2 flex justify-between items-center rounded-md md:bg-cyan-600'>
     

        {/* Hamburger Menu Button for Small Screens */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className='pl-5 pr-5'>
        <div className={`hidden md:flex space-x-6`}>
          <a href="#home" className='hover:text-gray-950'>HOME</a>
          <a href="#about" className='  hover:text-gray-950'>ABOUT US</a>
          <a href="#service" className='hover:text-gray-950'>SERVICES</a>
          <a href="#project" className='hover:text-gray-950'>UNICODE CONVERTER</a>
          <a href="#contact" className='hover:text-gray-950'>PRODUCTS</a>
          <a href="#contact" className='hover:text-gray-950'>CONTACT</a>
        </div>

        </div>
<div className='pr-5'>
        {/* Connect Button */}
        <button className='pr-5 bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          <a href="#contact">CALL:: 01-4582469</a>
        </button>
        </div>
      </div>
      

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-gray-800'>
          <div className='space-y-4 p-4 text-center'>
            <a href="#home" className='block hover:text-gray-400'>HOME</a>
            <a href="#about" className='block hover:text-gray-400'>ABOUT ME</a>
            <a href="#service" className='block hover:text-gray-400'>SERVICES</a>
            <a href="#project" className='block hover:text-gray-400'>UNICODE CONVERTOR</a>
            <a href="#contact" className='block hover:text-gray-400'>PRODUCTS</a>
            <a href="#contact" className='block hover:text-gray-400'>CONTACT</a>

          </div>
        </div>
        
      )}
      
    </nav>
    </div>
  );
};

export default Navbar;
