import React from "react";

const Offer = () => {
  return (
    <section className=" py-12">
      <div className=" mx-auto ">
        <h2 className="text-3xl font-bold text-center text-cyan-500 mb-8">
          Stay Updated with Our Highlights
        </h2>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Featured Product</h3>
            <img
              src="https://via.placeholder.com/150"
              alt="Featured Product"
              className="mx-auto mb-4"
            />
            <p className="text-gray-600">
              Discover our latest and greatest products, carefully crafted to
              meet your needs.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Special Offer</h3>
            <p className="text-2xl font-bold text-red-500 mb-2">50% Off!</p>
            <p className="text-gray-600">
              Limited-time discounts on our best-selling items. Don’t miss out!
            </p>
            <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all duration-300">
              Shop Now
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Get exclusive updates, promotions, and insights straight to your
              inbox.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
            />
            <button className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Exclusive Promotion</h3>
          <p className="text-lg mb-6">
            Unlock special deals and early access to our new collections by
            joining our community today.
          </p>
          <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-100 transition-all duration-300">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
