import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllQuery = () => {
    const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/queries`);
        setQueries(response.data);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };
    fetchQueries();
  }, []);

    return (
        <div className="query-card">
        {queries.map((item) => (
          <div key={item._id} className="card">
            <h3>{item.productName}</h3>
            <p>{item.queryTitle}</p>
            <p>Recommendations: {item.recommendationCount}</p>
            <button className='btn' onClick={() => handleViewDetails(item._id)}>View Details</button>
            <button className='btn' onClick={() => handleUpdate(item._id)}>Update</button>
            <button className='btn' onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    );
};

export default AllQuery;