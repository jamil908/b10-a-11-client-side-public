import axios from "axios";
import React, { useEffect, useState } from "react";
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
  
  const recentQuery = queries.slice(-6)
  return (
    <div className="query-card">
      {recentQuery.map((item) => (
        <div key={item._id} className="card">
          <h3>{item.productName}</h3>
          <p>{item.queryTitle}</p>
          <p>Recommendations: {item.recommendationCount}</p>
          <div className=" w-8">
            {" "}
           <Link to={`/queryDetails/${item._id}`}>
                           <button className="btn bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                             View
                           </button>
                         </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllQuery;
