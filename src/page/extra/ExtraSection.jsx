import React from "react";
import { Fade } from "react-awesome-reveal";
import '../shared/nav.css'
const ExtraSection = () => {
  return (
    <div className="px-6  text-white ">
      <Fade cascade>
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-1">Why Choose Us?</h2>
          <p className="text-lg md:text-xl">
            Discover the unique benefits and insights we bring to you.
          </p>
        </div>
      </Fade>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Fade delay={200}>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-3">Insightful Recommendations</h3>
            <p>
              Our system provides tailored recommendations to help you make better decisions.
            </p>
          </div>
        </Fade>
        <Fade delay={300}>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-3">User-Friendly Interface</h3>
            <p>
              Designed with simplicity in mind, navigate and manage your queries effortlessly.
            </p>
          </div>
        </Fade>
        <Fade delay={400}>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-3">Efficient Query Management</h3>
            <p>
              Keep all your queries organized and accessible in one place.
            </p>
          </div>
        </Fade>
        <Fade delay={500}>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-3">Data Security</h3>
            <p>
              Your data is secure with us, ensuring privacy and protection at all levels.
            </p>
          </div>
        </Fade>
        <Fade delay={600}>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-3">Customizable Features</h3>
            <p>
              Adapt our platform to suit your unique needs and preferences effortlessly.
            </p>
          </div>
        </Fade>
        <Fade delay={700}>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
            <p>
              Get round-the-clock assistance from our dedicated support team whenever needed.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ExtraSection;
