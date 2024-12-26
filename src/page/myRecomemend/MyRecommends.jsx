import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import Loading from "../loading/Loading";
import Swal from "sweetalert2";
import useAxiosSecure from "../../useAxiosSecure";
import '../shared/nav.css'
const MyRecommends = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  const [gridCols, setGridCols] = useState("grid-cols-1"); 
  const [loading, setLoading] = useState(true); 
  const axiosSecure = useAxiosSecure()
  useEffect(() => {
    if (user?.email) {
      const fetchRecommendations = async () => {
        try {
          
          const response = await axiosSecure.get(
            `/recommendations/userEmail/${user.email}`,{
              withCredentials:true
            }
          );
          setRecommendations(response.data); 
        } catch (error) {
          console.error("Error fetching recommendations:", error);
        } finally {
          setLoading(false); 
        }
      };

      fetchRecommendations();
    }
  }, [user?.email]); 
  if (loading) {
    return <Loading />; 
  }

  // delete recommended
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
                  await axios.delete(`${import.meta.env.VITE_API_URL}/recommendations/delete/${id}`);
                  setRecommendations(recommendations.filter((query) => query._id !== id));
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
    <div className="p-6 bg-gray-100 bg-d min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-100">My Recommendations</h2>

      {recommendations.length > 0 ? (
        <>
        
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
        <div className={`grid  ${gridCols} gap-6 `}>
          {recommendations.map((recommendation) => (
            <div key={recommendation._id} className="bg-white  shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold">{recommendation.recommendTitle}</h3>
              <p>{recommendation.recommendReason}</p>
              <img
                src={recommendation.recommendImage}
                alt={recommendation.recommendProduct}
                className="w-full h-40 object-cover rounded-md mt-2"
              />
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Submitted On:</span>{" "}
                {new Date(recommendation.timestamp).toLocaleString()}
              </p>
              <button onClick={()=>handleDelete(recommendation._id)} className="btn">delete</button>
            </div>
            
          ))}
        </div>
        </>
      ) : (
        <p>No recommendations found.</p>
      )}
    </div>
  );
};

export default MyRecommends;
