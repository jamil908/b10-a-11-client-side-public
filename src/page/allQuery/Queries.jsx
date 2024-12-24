import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Queries = () => {
    
const [queries, setQueries] = useState([]);

useEffect(() => {
  const fetchQueries = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/allQueries`
      );
      const sortedQueries = response.data.sort((a,b)=>b.recommendationCount - a.recommendationCount)
      setQueries(sortedQueries);
    } catch (error) {
      console.error("Error fetching queries:", error);
    }
  };
  fetchQueries();
}, []);

    return (
        <div className="min-h-[calc(100vh-120px)] px-6 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
          All Queries
        </h1>
  
        {/* Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {queries.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-lg p-6 border hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.productName}
              </h2>
              <p className="text-gray-600 mb-4">{item.queryTitle}</p>
              <p className="text-gray-700 font-medium mb-6">
                Recommendations:{" "}
                <span className="text-blue-600">{item.recommendationCount}</span>
              </p>
  
              {/* Recommend Button */}
              <div className="flex justify-center">
                <Link to={`/queryDetails/${item._id}`}>
                  <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors duration-300">
                    Recommend
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Queries;