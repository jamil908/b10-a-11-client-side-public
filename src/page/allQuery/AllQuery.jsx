import axios from "axios";
import React, { useEffect, useState } from "react";
import "../shared/nav.css";
import { Link } from "react-router-dom";
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
    <div className="container mx-auto bg-c px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Recent Queries
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentQuery.map((item) => (
          <div
            key={item._id}
            className="card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.productImage || "https://via.placeholder.com/300"}
              alt={item.productName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 truncate">
                {item.productName}
              </h3>
              <p className="text-gray-600 mt-2 truncate">{item.queryTitle}</p>
              <p className="text-gray-700 font-medium mt-2">
                Recommendations: {item.recommendationCount}
              </p>
              <div className="mt-4">
                <Link to={`/queryDetails/${item._id}`}>
                  <button className="btn w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllQuery;
