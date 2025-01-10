import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Promote = () => {
    return (
        <div>
            
      <section className="container mx-auto px-6">
        <Fade triggerOnce>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
              Contact Us
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Have questions or need help? Reach out to us, and we’ll get back
              to you as soon as possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">support@example.com</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+123 456 7890</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    123 Main Street, City, Country
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
                  className="w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
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