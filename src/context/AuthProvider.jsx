import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { createBrowserRouter } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import {  createUserWithEmailAndPassword } from "firebase/auth";
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState([])
    const[email,setEmail]=useState('')

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };







    const authInfo={
        createUser,user,setUser,error,setError
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;