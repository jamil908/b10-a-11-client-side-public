import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createBrowserRouter } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState([])
    const[email,setEmail]=useState('')

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
      const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
      const googleProvider = new GoogleAuthProvider()
      const handleGoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };
      const handleLogOut = () => {
        setLoading(true);
        return signOut(auth);
      };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log('state captured', currentUser)
          if(currentUser?.email){
            const user ={email:currentUser.email}
            axios.post(` ${import.meta.env.VITE_API_URL}/jwt`,user,{
              withCredentials:true})
            .then(res=>console.log(res.data))
          }
          setLoading(false);
          return () => {
            unsubscribe();
          };
        });
      }, []);
      const updateUserProfile= (updateData)=>{
        return updateProfile(auth.currentUser,updateData);
      }



    const authInfo={
        createUser,user,setUser,error,setError,updateUserProfile,handleLogin,handleGoogleLogin,handleLogOut,loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;