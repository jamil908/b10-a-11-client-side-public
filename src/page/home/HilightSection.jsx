import React from "react";
import { Zoom } from "react-awesome-reveal";
import '../shared/nav.css'
const HighlightSection = () => {
  return (
    <div className="py-12 px-6 bg-e bg-gray-50 ">
      <Zoom cascade>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-300 mb-4">Our Highlights</h2>
          <p className="text-lg text-gray-400">
            Discover what makes us stand out from the rest.
          </p>
        </div>
      </Zoom>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Zoom>
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovative Solutions</h3>
              <p className="text-gray-600">
                We bring cutting-edge solutions to solve your toughest challenges.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
        </Zoom>
        <Zoom delay={100}>
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Experience</h3>
              <p className="text-gray-600">
                Tailored recommendations designed exclusively for your needs.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500"></div>
          </div>
        </Zoom>
        <Zoom delay={200}>
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Seamless Integration</h3>
              <p className="text-gray-600">
                Effortlessly integrate our tools into your existing workflow.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-red-500"></div>
          </div>
        </Zoom>
        <Zoom delay={300}>
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Scalable Design</h3>
              <p className="text-gray-600">
                Our solutions grow with you, ensuring lasting value.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
          </div>
        </Zoom>
        <Zoom delay={400}>
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Our team is here to guide you every step of the way.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-700"></div>
          </div>
        </Zoom>
        <Zoom delay={500}>
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Trusted by clients worldwide for measurable success.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default HighlightSection;
