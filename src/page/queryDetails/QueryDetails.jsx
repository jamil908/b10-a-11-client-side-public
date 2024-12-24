import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';
import AuthContext from '../../context/AuthContext';

const QueryDetails = () => {
    const { id } = useParams(); // Get the query ID from the URL
    const {user}=useContext(AuthContext)
    const [query, setQuery] = useState(null);
    const [loadings,setLoading]=useState(true)
    const {loading}=useState()
    useEffect(() => {
        const fetchQueryDetails = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/queryDetails/${id}`);
                setQuery(response.data); 
            } catch (error) {
                console.error('Error fetching query details:', error);
            }  finally {
                setLoading(false); // Set loading to false
            }
        };

        fetchQueryDetails();
    }, [id]);
    if(loadings){
        return <Loading></Loading>
    }
    console.log(query)

   const handleSubmit =async e =>{
    e.preventDefault();

    const formData = new FormData(e.target)
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData)
    const queryData = {
      ...initialData,
      queryId: query._id,
      queryTitle: query.queryTitle,
      productName: query.productName,
      queryEmail:query.email,
      queryName:query.name,
      recommendUserEmail:user?.email,
      recommendUserName:user?.displayName,
      timestamp: new Date().toISOString(),
    }
    const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/addRecommend`,queryData)
    console.log(queryData)

   }
    return (
        <>

{loading ? <Loading></Loading>:  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
        <div key={query._id} className="bg-white shadow-md rounded-lg p-4">
            <img
                src={query.productImage}
                alt={query.productName}
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">{query.productName}</h2>
            <p className="text-gray-600 mb-2">
                <span className="font-semibold">Brand:</span> {query.productBrand}
            </p>
            <p className="text-gray-600 mb-2">
                <span className="font-semibold">Query Title:</span> {query.queryTitle}
            </p>
            <p className="text-gray-600 mb-2">
                <span className="font-semibold">Submitted By:</span> {query.name}
            </p>
            <p className="text-gray-600 mb-2">
                <span className="font-semibold">Email:</span> {query.email}
            </p>
            <p className="text-gray-600 mb-2">
                <span className="font-semibold">Boycott Reason:</span> {query.boycott}
            </p>
            <p className="text-gray-600 mb-2">
                <span className="font-semibold">Recommendations:</span> {query.recommendationCount}
            </p>
            <p className="text-gray-600">
                <span className="font-semibold">Timestamp:</span>{' '}
                {new Date(query.timestamp).toLocaleString()}
            </p>
        </div>
        <div>
        {/* recommendation form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Add a Recommendation</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Recommendation Title
        </label>
        <input
          type="text"
          id="title"
          name="recommendTitle"
          required
          className="mt-1 p-2 block w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
          Recommended Product Name
        </label>
        <input
          type="text"
          id="productName"
          name="recommendProduct"
          required
          className="mt-1 p-2 block w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">
          Recommended Product Image URL
        </label>
        <input
          type="url"
          id="productImage"
          name="recommendImage"
          required
          className="mt-1 p-2 block w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
          Recommendation Reason
        </label>
        <textarea
          id="reason"
          name="recommendReason"
          required
          className="mt-1 p-2 block w-full border rounded-md"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Recommendation
      </button>
    </form>
        </div>
        
    </div>}
      
    </>
    );
};

export default QueryDetails;