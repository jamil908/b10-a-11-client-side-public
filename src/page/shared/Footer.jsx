import "../shared/nav.css";

import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import logo from "../../assets/mextsteplogo.webp"; // Add your logo file here
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <div className="relative bg-g">
      {/* Foreground Content */}
      <footer className="relative z-10 bg-transparent text-white py-10 px-5 md:px-20">
        {/* Logo and Project Name */}
        <div className="flex items-center w-fit mx-auto mb-8">
          <img src={logo} alt="Next Step Guide Logo" className="w-16 h-16 mr-4" />
          <h1 className="text-3xl font-extrabold">Next Step Guide</h1>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm text-gray-200">
              We are committed to bringing you the best recommendations and guidance for making smarter choices in your journey. Explore products, find what fits, and elevate your experience with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-blue-300 transition-colors">Products</Link></li>
              <li><Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-blue-300 mr-2" />
              <p className="text-sm text-gray-200">
                Email: <Link to="/contact" className="hover:text-blue-300 transition-colors">info@example.com</Link>
              </p>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="text-blue-300 mr-2" />
              <p className="text-sm text-gray-200">
                Phone: <Link to="/contact" className="hover:text-blue-300 transition-colors">+123 456 789</Link>
              </p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-300 mr-2" />
              <p className="text-sm text-gray-200">
                Location: 123 Main Street, Anywhere
              </p>
            </div>
            <div className="flex gap-3 mt-3">
         <div><FaFacebook></FaFacebook></div>
          <div><FaWhatsapp></FaWhatsapp></div>
          <div><FaLinkedin></FaLinkedin></div>
          <div><FaTwitter></FaTwitter></div>
         </div>
          </div>
         
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center border-t border-gray-400 pt-5">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} All Rights Reserved | Designed with ❤️ by Jamil Hossain</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
