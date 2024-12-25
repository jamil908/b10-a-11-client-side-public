import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../shared/nav.css'
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module

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
    <div className="p-5 bg-d bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-700">
        Recommended Products
      </h2>
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
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="border p-6 rounded-xl shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-lg h-44">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4 text-center">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                {product.description}
              </p>
              <p className="text-blue-600 font-semibold text-center mt-4">
                Price: ${product.price}
              </p>
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
