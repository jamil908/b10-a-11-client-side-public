import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import Loading from "../loading/Loading";

const MyRecommends = () => {
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true); 
console.log(recommendations)
  useEffect(() => {
    if (user?.email) {
      const fetchRecommendations = async () => {
        try {
          
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/recommendations/userEmail/${user.email}`
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

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">My Recommendations</h2>
      {recommendations.length > 0 ? (
        <div className="space-y-4">
          {recommendations.map((recommendation) => (
            <div key={recommendation._id} className="bg-white shadow-md rounded-lg p-4">
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
            </div>
          ))}
        </div>
      ) : (
        <p>No recommendations found.</p>
      )}
    </div>
  );
};

export default MyRecommends;
