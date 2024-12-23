import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../loading/Loading';
import AuthContext from '../../context/AuthContext';

const Update = () => {
    const { id } = useParams();
    const{user}=useContext(AuthContext)
    const navigate =useNavigate()
    const [query, setQuery] = useState(null);
    const [loadings,setLoading]=useState(true)
   
    useEffect(() => {
        const fetchQueryDetails = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/queryDetails/${id}`);
                setQuery(response.data); 
            } catch (error) {
                console.error('Error fetching query details:', error);
            }  finally {
                setLoading(false); 
            }
        };

        fetchQueryDetails();
    }, [id]);
    console.log(query)
    if(loadings){
        return<Loading></Loading>
    }


    const handleQueryUpdate =async e =>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData)
        const queryData = {
          ...initialData,
          email:user?.email,
          name:user?.displayName,
          photo:user?.photoURL,
          timestamp: new Date().toISOString(),
          recommendationCount: query.recommendationCount,
        }
        const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/update/${id}`,queryData)
        console.log(data)
        navigate('/myQueries')
    }
    return (
        <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold text-center mb-6">Update Query</h2>
  <form  onSubmit={handleQueryUpdate}>
    <div class="mb-4">
      <label for="product-name" class="block text-sm font-semibold text-gray-700">Product Name</label>
      <input type="text" id="product-name" name='productName'defaultValue={query.productName}class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter product name" required />
    </div>

    <div class="mb-4">
      <label for="product-brand" class="block text-sm font-semibold text-gray-700">Product Brand</label>
      <input type="text" id="product-brand"name='productBrand'defaultValue={query.productBrand}  class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter product brand" required />
    </div>

    <div class="mb-4">
      <label for="product-image" class="block text-sm font-semibold text-gray-700">Product Image URL</label>
      <input type="url" id="product-image"name='productImage'defaultValue={query.productImage}   class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter product image URL" required />
    </div>

    <div class="mb-4">
      <label for="query-title" class="block text-sm font-semibold text-gray-700">Query Title</label>
      <input type="text" id="query-title" name='queryTitle'defaultValue={query.queryTitle}   class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your query title" required />
    </div>

    <div class="mb-4">
      <label for="reason-details" class="block text-sm font-semibold text-gray-700">Boycotting Reason Details</label>
      <textarea id="reason-details" rows="4"name='boycott'defaultValue={query.boycott}   class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter the reason for boycotting the product" required></textarea>
    </div>

    <div class="mb-4 text-center">
      <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Update Query</button>
    </div>
  </form>
</div>
    );
};

export default Update;