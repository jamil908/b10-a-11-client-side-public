import React from 'react';
import { Fade,  } from 'react-awesome-reveal';
import { FaPhoneAlt,  } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import  '../shared/nav.css'
const Promote = () => {
    return (
        <div>
            
      <section className="  mx-auto ">
        <Fade triggerOnce>
          <div className="  rounded-lg p-6">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
              Contact Us
            </h2>
            <p className="text-center text-gray-200 mb-6">
              Have questions or need help? Reach out to us, and we’ll get back
              to you as soon as possible.
            </p>
            <div className="grid grid-cols-1  md:w-3/5 text-white  rounded-lg mx-auto md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <div>
                <span className='flex items-center text-center gap-2'><MdOutlineEmail className=' text-cyan-500'></MdOutlineEmail><h4 className="text-xl font-bold ">Address</h4></span>
                  <p className="">jamilhossainrafi@example.com</p>
                </div>
                <div>
                <span className='flex items-center text-center gap-2'><FaPhoneAlt className=' text-cyan-500'></FaPhoneAlt><h4 className="text-xl font-bold ">Phone</h4></span>
                  <p className="">+8801781142856</p>
                </div>
                <div>
                <span className='flex items-center text-center gap-2'><MdOutlineLocationOn className=' text-cyan-500' /><h4 className="text-xl font-bold text-white">Address</h4></span>
                  <p className="">
                    gulbag 125-b, Chittagong, Bangladesh
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-2 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Fade>
      </section>
        </div>
    );
};

export default Promote;