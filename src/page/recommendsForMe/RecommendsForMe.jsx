import React, { useContext, useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import axios from 'axios';
import AuthContext from '../../Context/AuthContext';
import useAxiosSecure from '../../useAxiosSecure';
import '../shared/nav.css'
const RecommendsForMe = () => {
    const { user } = useContext(AuthContext); 
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axiosSecure.get(
          `/user/recommendations/${user.email}`
        );
        setRecommendations(response.data.recommendations); 
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setLoading(false); 
      }
    };

    if (user?.email) fetchRecommendations();
  }, [user?.email]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen bg-d">
    <h1 className="text-2xl font-bold mb-4 text-center text-gray-100">Recommends for Me</h1>
  
    {recommendations.length > 0 ? (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-sm md:text-base">Query Title</th>
              <th className="border px-4 py-2 text-sm md:text-base">Recommendation Title</th>
              <th className="border px-4 py-2 text-sm md:text-base">Reason</th>
              <th className="border px-4 py-2 text-sm md:text-base">Submitted On</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((rec) => (
              <tr key={rec._id} className="hover:bg-gray-100">
                <td className="border px-4 py-2 text-sm md:text-base">{rec.queryTitle}</td>
                <td className="border px-4 py-2 text-sm md:text-base">{rec.recommendTitle}</td>
                <td className="border px-4 py-2 text-sm md:text-base">{rec.recommendReason}</td>
                <td className="border px-4 py-2 text-sm md:text-base">
                  {new Date(rec.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <p className="text-center text-gray-600 mt-6">There are no recommendations for you.</p>
    )}
  </div>
  
  );

};

export default RecommendsForMe;