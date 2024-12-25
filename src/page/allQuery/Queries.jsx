import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Queries = () => {
  const [queries, setQueries] = useState([]); 
  const [searchText, setSearchText] = useState(""); 

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/allQueries`
        );
        const sortedQueries = response.data.sort(
          (a, b) => b.recommendationCount - a.recommendationCount
        );
        setQueries(sortedQueries);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };
    fetchQueries();
  }, []);

 
  const filteredQueries = queries.filter((item) =>
    item.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-120px)] px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">
        All Queries
      </h1>

    
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search by Product Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredQueries.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.productImage || "https://via.placeholder.com/300"}
              alt={item.productName}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 truncate mb-2">
                {item.productName}
              </h2>
              <p className="text-gray-600 mb-4 truncate">{item.queryTitle}</p>
              <p className="text-gray-700 font-medium mb-4">
                Recommendations:{" "}
                <span className="text-blue-600">{item.recommendationCount}</span>
              </p>
              <div className="flex justify-center">
                <Link to={`/queryDetails/${item._id}`}>
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
                  Recommend
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

export default Queries;
