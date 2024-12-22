import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay module

const Slider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the product data from the public folder
    fetch('/product.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching product data:', error));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-5">Product Recommendations</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2000, // Time in milliseconds (2 seconds)
          disableOnInteraction: false, // Ensure autoplay continues after user interaction
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
            <div className="border p-4 rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-blue-500 font-bold mt-2">Price: ${product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
