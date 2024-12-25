import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AuthContext from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true, // Allow cookies for authentication
});
const useAxiosSecure = () => {
    const {handleLogOut}=useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response => {
            return response;
            }, error =>{
                console.log('error caught in interceptor',error)
                if(error.status === 401 || error.status === 403){
                    console.log('need to logout')
                    handleLogOut()
                    .then(()=>{
                        console.log('logout user')
                        navigate('/login')
                    })
                    .catch(error=>console.log(error));
                }
                return Promise.reject(error)
            }
           
        );
    },[])

    return axiosInstance
};

export default useAxiosSecure;



