import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../shared/nav.css";
import { Zoom } from "react-awesome-reveal";

const Queries = () => {
  const [queries, setQueries] = useState([]); 
  const [searchText, setSearchText] = useState("");
  const [gridCols, setGridCols] = useState("grid-cols-1"); 

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/allQueries`
        );
       const sortedQueries =(response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
        
        setQueries(sortedQueries);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };
    fetchQueries();
  }, []);

  // Filter queries based on the search text
  const filteredQueries = queries.filter((item) =>
    item.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-120px)] bg-d px-6 py-8">
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

      <div className="flex justify-center space-x-4 mb-6">
      
       
        <button
          onClick={() => setGridCols("grid-cols-1")}
          className={`px-4 py-2 rounded-md ${
            gridCols === "grid-cols-1"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          1 Columns
        </button>
        <button
          onClick={() => setGridCols("grid-cols-2")}
          className={`px-4 py-2 rounded-md ${
            gridCols === "grid-cols-2"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          2 Columns
        </button>
        <button
          onClick={() => setGridCols("grid-cols-3")}
          className={`px-4 py-2 rounded-md ${
            gridCols === "grid-cols-3"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          3 Columns
        </button>
      </div>

    
      <div className={`grid ${gridCols} gap-8`}>
        {filteredQueries.map((item) => (
         <Zoom>
         <div
            key={item._id}
            className="bg-white  shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
         </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Queries;
