import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

const MyQueries = () => {
    const {user}=useContext(AuthContext)
    const [queries, setQueries] = useState([]);
    useEffect(() => {
        const fetchQueries = async () => {
            try {
                const email = `${user.email}`;
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/emailQueries?email=${email}`);
                setQueries(response.data); 
            } catch (error) {
                console.error('Error fetching queries:', error);
            }
        };

        fetchQueries();
    }, []);

    return (
        <div className=' min-h-[calc(100vh-120px)]'>
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
            <Link to='/addQueries'><button className='btn'>Add Queries</button></Link>
        </div>
    );
};

export default MyQueries;