import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllQuery = () => {
    const [query,setQuery]=useState([])
    useEffect(()=>{
        fetchAllQuery()
    },[])
    const fetchAllQuery=async()=>{
        const {data}= await axios.get(`${import.meta.env.VIT_API_URL}/queries`)
        setQuery(data)
    }
    console.log(query)
    return (
        <div>
            
        </div>
    );
};

export default AllQuery;