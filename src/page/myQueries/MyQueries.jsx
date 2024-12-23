import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import Loading from '../loading/Loading';
import Swal from 'sweetalert2';

const MyQueries = () => {
    const {user,loading}=useContext(AuthContext)

    
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

    // delete data 
    const handleDelete = async(id)=>{
          Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then(async(result) => {
                if (result.isConfirmed) {
                    try {
                        await axios.delete(`${import.meta.env.VITE_API_URL}/queryDelete/${id}`);
                        setQueries(queries.filter((query) => query._id !== id));
                        Swal.fire(
                            'Deleted!',
                            'Your query has been deleted.',
                            'success'
                        );
                    } catch (error) {
                        console.error('Error deleting query:', error);
                        Swal.fire(
                            'Error!',
                            'Something went wrong while deleting the query.',
                            'error'
                        );
                    }
                }
            });
        };

        // update data
        const handleUpdate = async(id)=>{

        }

    
    return (
        
        <div className="min-h-[calc(100vh-120px)] px-6 py-4">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">My Queries</h2>
            <Link to="/addQueries">
                <button className="btn bg-green-400 text-white font-bold text-lg px-6 py-2 rounded-md shadow-md hover:bg-green-500">
                    Add Query
                </button>
            </Link>
        </div>
        {
            loading?<Loading></Loading>:<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {queries.map((item) => (
                <div key={item._id} className="bg-white rounded-lg shadow-md p-4 border">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.productName}
                    </h3>
                    <p className="text-gray-600 mb-2">{item.queryTitle}</p>
                    <p className="text-gray-500 mb-4">
                        <strong>Recommendations:</strong> {item.recommendationCount}
                    </p>
                    <div className="flex justify-between items-center">
                    <Link to={`/queryDetails/${item._id}`}>
                    <button
                            className="btn bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500"
                          
                        >
                            View
                        </button>
                    </Link>
                       
                      <Link to={`/update/${item._id}`}>  <button
                            className="btn bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500"
    
                        >
                            Update
                        </button></Link>
                        <button
                            className="btn bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500"
                            onClick={() => handleDelete(item._id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
        }
        
    </div>
    );
};

export default MyQueries;