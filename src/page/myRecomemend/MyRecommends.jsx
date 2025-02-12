import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import Loading from "../loading/Loading";
import Swal from "sweetalert2";
import useAxiosSecure from "../../useAxiosSecure";
import '../shared/nav.css'
import { Zoom } from "react-awesome-reveal";
const MyRecommends = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  const [gridCols, setGridCols] = useState("grid-cols-3"); 
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
    <div className="p-6  min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-cyan-500 w-fit mx-auto">My Recommendations</h2>

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
            <Zoom>
            <div
  key={recommendation._id}
  className="relative h-[20em] w-[22em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] via-purple-700/80 to-[rgba(75,30,133,0.2)] text-white font-nunito p-[1.5em] flex flex-col gap-[1em] backdrop-blur-[12px] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group/card hover:-translate-y-1"
>
  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,190,0.1),transparent_60%)] group-hover/card:animate-pulse"></div>

  {/* Floating Circles */}
  <div className="absolute top-4 right-4 flex gap-2">
    <div className="w-2 h-2 rounded-full bg-purple-300/50"></div>
    <div className="w-2 h-2 rounded-full bg-purple-300/30"></div>
    <div className="w-2 h-2 rounded-full bg-purple-300/10"></div>
  </div>

  {/* Card Content */}
  <div className="relative z-10 transition-transform duration-300 group-hover/card:translate-y-[-2px] space-y-3">
    <h3 className="text-xl font-bold bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
      {recommendation.recommendTitle}
    </h3>
    <p className="text-[0.9em] text-purple-100/90 leading-relaxed font-light">
      {recommendation.recommendReason}
    </p>

    {/* Image */}
    <img
      src={recommendation.recommendImage}
      alt={recommendation.recommendProduct}
      className="w-full h-32 object-cover rounded-md mt-2"
    />

    {/* Timestamp */}
    <p className="text-purple-300/80 text-sm mt-2">
      <span className="font-semibold">Submitted On:</span>{" "}
      {new Date(recommendation.timestamp).toLocaleString()}
    </p>
  </div>

  {/* Delete Button */}
  <button
    onClick={() => handleDelete(recommendation._id)}
    className="relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border-[1px] border-purple-300/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-purple-500/10"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
    <p className="relative z-10 font-medium tracking-wide">Delete</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="relative z-10 w-5 h-5 group-hover/btn:translate-x-[10%] transition-transform duration-300"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  </button>

  {/* Animated Bottom Glow */}
  <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-sm group-hover/card:animate-pulse"></div>
</div>

            </Zoom>
            
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
