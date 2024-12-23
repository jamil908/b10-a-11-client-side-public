import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';

const QueryDetails = () => {
    const { id } = useParams(); // Get the query ID from the URL
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
        
    </div>}
      
    </>
    );
};

export default QueryDetails;