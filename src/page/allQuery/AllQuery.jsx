import axios from "axios";
import React, { useEffect, useState } from "react";
import "../shared/nav.css";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
const AllQuery = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/allQueries`
        );
        setQueries(response.data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };
    fetchQueries();
  }, []);

  const recentQuery = queries.slice(0, 6);
  console.log(recentQuery);
  return (
    <div className=" mx-auto   py-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Recent Queries
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentQuery.map((item) => (
         <Zoom>
         <div
  key={item._id}
  className="relative w-[20em] h-[28em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] via-purple-700/80 to-[rgba(75,30,133,0.2)] text-white font-nunito p-[1.5em] flex justify-center items-start flex-col gap-[1em] backdrop-blur-[12px] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group/card hover:-translate-y-1 overflow-hidden"
>
  <div
    className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]"
  ></div>
  <div
    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,190,0.1),transparent_60%)] group-hover/card:animate-pulse"
  ></div>

  <div className="absolute top-4 right-4 flex gap-2">
    <div className="w-2 h-2 rounded-full bg-purple-300/50"></div>
    <div className="w-2 h-2 rounded-full bg-purple-300/30"></div>
    <div className="w-2 h-2 rounded-full bg-purple-300/10"></div>
  </div>

  <div className="relative  transition-transform duration-300 group-hover/card:translate-y-[-2px] space-y-3 flex-grow-0">
    <img
      src={item.productImage || "https://via.placeholder.com/300"}
      alt={item.productName}
      className="w-full h-48 object-cover p-3 mr-3 rounded-[1.2em] "
    />
    <h3 className="text-[1.5em] font-bold bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
      {item.productName}
    </h3>
    <p className="text-[0.9em] text-purple-100/90 leading-relaxed font-light truncate">
      {item.queryTitle}
    </p>
    <p className="text-gray-400 font-medium mt-2">
      Recommendations: {item.recommendationCount}
    </p>
  </div>

  <div className="mt-4 w-full">
    <Link to={`/queryDetails/${item._id}`}>
      <button className="relative h-fit w-full px-[1.4em] py-[0.7em] mt-2 border-[1px] border-purple-300/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-purple-500/10">
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"
        ></div>
        <p className="relative z-10 font-medium tracking-wide">View Details</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className="relative z-10 w-5 h-5 group-hover/btn:translate-x-[10%] transition-transform duration-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>
    </Link>
  </div>

  <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-sm group-hover/card:animate-pulse"></div>
</div>


         </Zoom>
        ))}
      </div>
    </div>
  );
};

export default AllQuery;
