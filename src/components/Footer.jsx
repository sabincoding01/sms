import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-0">
          <div className="flex-1 mb-0 md:mb-0">
            {/* <h3 className="text-2xl font-bold mb-2 text-center" >Sabin Timalsina</h3>
            <p className="text-gray-400">
            I am a front-end web developer from nepal..
            </p> */}
          </div>
          
       </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Sabin. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/sabin.timalsina.7982" target="_blank" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/saveen0?igsh=MXhwcXRmNjJkMGh5dQ%3D%3D&utm_source=qr" target="_blank" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/sabin-timalsina-63090831b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/sabincoding01 " target="_blank" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;