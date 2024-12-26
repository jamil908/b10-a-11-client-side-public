import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import Loading from '../loading/Loading';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../useAxiosSecure';
import '../shared/nav.css'
import { Fade, Zoom } from 'react-awesome-reveal';

const MyQueries = () => {
    const {user,loading}=useContext(AuthContext)
const [gridCols, setGridCols] = useState("grid-cols-1"); 
    
    const [queries, setQueries] = useState([]);
   
    const axiosSecure=useAxiosSecure();
    
    useEffect(() => {
        const fetchQueries = async () => {
            try {
                const email = `${user.email}`;
                const response = await axiosSecure.get(`/emailQueries?email=${email}`,{
                  withCredentials:true
                });
                setQueries(response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
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

       

    
    return (
   
    <div className="min-h-[calc(100vh-120px)] bg-d px-6 py-4">
    {/* Banner Section */}
    <div
      className="relative bg-cover bg-center min-h-[calc(100vh-320px)] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/9GHWkST/a646b740-b000-46a9-a453-3d0c0de2da82.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center max-w-3xl p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Query Manager
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Manage your queries efficiently and get insights faster. Start now!
        </p>
        <Link to="/addQueries">
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-500 shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Add Queries
          </button>
        </Link>
      </div>
    </div>

  
    {loading ? (
      <Loading />
    ) : queries.length === 0 ? (
      
      <div className="flex flex-col items-center justify-center py-16">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          No Queries Found
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          You don't have any queries yet. Start by adding a new query.
        </p>
        <Link to="/addQueries">
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-500 shadow-lg transition-transform transform hover:scale-105">
            Add Query
          </button>
        </Link>
      </div>
    ) : (
      // Render Queries
    <div>
    <div className='flex gap-3 p-8 mx-auto w-fit'>
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
      <div className={`grid ${gridCols}  gap-3 lg:gap-6`}>
        {queries.map((item) => (
      <Zoom>
      <div
  key={item._id}
  className="bg-white rounded-lg h-60 shadow-md p-4 border transform transition duration-300 hover:scale-105 hover:shadow-xl"
>
  <Zoom cascade damping={0.1}>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {item.productName}
    </h3>
    <p className="text-gray-600 mb-2">{item.queryTitle}</p>
    <p className="text-gray-500 mb-4">
      <strong>Recommendations:</strong> {item.recommendationCount}
    </p>
  </Zoom>
  <Fade>
    <div className="flex justify-between items-center mt-4">
      <Link to={`/queryDetails/${item._id}`}>
        <button className="btn bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transform transition duration-300 hover:scale-105">
          View
        </button>
      </Link>
      <Link to={`/update/${item._id}`}>
        <button className="btn bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-600 transform transition duration-300 hover:scale-105">
          Update
        </button>
      </Link>
      <button
        className="btn bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 transform transition duration-300 hover:scale-105"
        onClick={() => handleDelete(item._id)}
      >
        Delete
      </button>
    </div>
  </Fade>
</div>
      </Zoom>
        ))}
      </div>
    </div>
    )}
  </div>
    );
};

export default MyQueries;