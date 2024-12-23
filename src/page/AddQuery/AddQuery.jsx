import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

const AddQuery = () => {
  const {user}=useContext(AuthContext)
    const handleQueryAdd =async e =>{
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
          recommendationCount: 0,
        }
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/addQuery`,queryData)
        console.log(data)
    }
    return (
        <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold text-center mb-6">Add Query</h2>
  <form onSubmit={handleQueryAdd}>
    <div class="mb-4">
      <label for="product-name" class="block text-sm font-semibold text-gray-700">Product Name</label>
      <input type="text" id="product-name" name='productName' class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter product name" required />
    </div>

    <div class="mb-4">
      <label for="product-brand" class="block text-sm font-semibold text-gray-700">Product Brand</label>
      <input type="text" id="product-brand"name='productBrand' class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter product brand" required />
    </div>

    <div class="mb-4">
      <label for="product-image" class="block text-sm font-semibold text-gray-700">Product Image URL</label>
      <input type="url" id="product-image"name='productImage' class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter product image URL" required />
    </div>

    <div class="mb-4">
      <label for="query-title" class="block text-sm font-semibold text-gray-700">Query Title</label>
      <input type="text" id="query-title" name='queryTitle' class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your query title" required />
    </div>

    <div class="mb-4">
      <label for="reason-details" class="block text-sm font-semibold text-gray-700">Boycotting Reason Details</label>
      <textarea id="reason-details" rows="4"name='boycott' class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter the reason for boycotting the product" required></textarea>
    </div>

    <div class="mb-4 text-center">
      <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Add Query</button>
    </div>
  </form>
</div>
    );
};

export default AddQuery;