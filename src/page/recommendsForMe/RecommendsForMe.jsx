import React, { useContext, useEffect, useState } from 'react';
import Loading from '../loading/Loading';
import axios from 'axios';
import AuthContext from '../../Context/AuthContext';
import useAxiosSecure from '../../useAxiosSecure';

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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Recommends for me</h1>

      {recommendations.length > 0 ? (
        <table className="w-full border-collapse bg-white shadow-lg">
          <thead>
            <tr>
              <th className="border px-4 py-2">Query Title</th>
              <th className="border px-4 py-2">Recommendation Title</th>
              <th className="border px-4 py-2">Reason</th>
              <th className="border px-4 py-2">Submitted On</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((rec) => (
              <tr key={rec._id}>
                <td className="border px-4 py-2">{rec.queryTitle}</td>
                <td className="border px-4 py-2">{rec.recommendTitle}</td>
                <td className="border px-4 py-2">{rec.recommendReason}</td>
                <td className="border px-4 py-2">
                  {new Date(rec.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>There is no recommends for you</p>
      )}
    </div>
  );

};

export default RecommendsForMe;