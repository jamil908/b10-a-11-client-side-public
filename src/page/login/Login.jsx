import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthContext from '../../Context/AuthContext';

const Login = () => {
    const {handleGoogleLogin,handleLogin,error,setError,setUser} = useContext(AuthContext)
    const location =useLocation();
    const navigate =useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        setError('')
        
        const email=e.target.email.value
        const password=e.target.password.value
        handleLogin(email,password)
        .then((result)=>{
            const user=result.user
            setUser(user)
            navigate(location?.state ? location.state :"/");
            toast.success("Login Successful!", { position: "top-right", autoClose: 5000 });
          })
          .catch((err)=>{
            toast
           setError({...error,login:toast})
          })
       
    }
    
const handleGoogleClick=()=>{
    handleGoogleLogin()
    .then((result) => {
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state :"/");
      
    })
    .catch((err) => {
      setError({ ...error, login:err.code });
    });
   }
    return (
        <div>
 <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl pt-8">
          <form onSubmit={handleSubmit} className="card-body">
          
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
             
              <label className="label">
                <Link className="label-text-alt link link-hover" to='/forget'>
                 <button > forget password</button>
                </Link>
              </label>
              <button className="btn" onClick={handleGoogleClick}>
              <span><FcGoogle></FcGoogle></span>
        login with google
      </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="px-4 text-xs pb-2">
            if you don't have  an any  account please 
            <Link className="text-red-500" to="/register">
              Register
            </Link>
          </p>
        
        </div>        </div>
    );
};

export default Login;