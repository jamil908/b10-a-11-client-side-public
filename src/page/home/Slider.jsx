import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../shared/nav.css'
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module

import '/src/index.css'
const Slider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the product data from the public folder
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Error fetching product data:", error)
      );
  }, []);

  return (
    <div className="p-5 s  bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* <h2 className="text-4xl font-extrabold text-center mb-3 text-cyan-500">
        Recommended Products
      </h2>
      <p className=" text-2xl  w-fit mx-auto mb-2 md:mb-4  font-bold text-cyan-600">
      "Next Step Guide: Discover, Recommend, and Elevate Your Choices!"
      </p> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
          <div className="border swiperSlide relative p-6 rounded-xl shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
  {/* Image Section */}
  <div className="overflow-hidden rounded-lg h-full relative">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
    />
    {/* Hover Text Section */}
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
      <h3 className="text-2xl font-bold text-cyan-300 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-300 mb-4 px-4 text-center">
        {product.description}
      </p>
      <p className="text-lg font-semibold text-white">Price: ${product.price}</p>
    </div>
  </div>
  {/* Optional Button */}
  <button className="w-full mt-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300">
    View Details
  </button>
</div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
