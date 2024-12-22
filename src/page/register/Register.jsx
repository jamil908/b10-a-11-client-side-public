import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import registerLottieData from "../../assets/lottie/register.json.json";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword]=useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const {createUser,setError,setUser,handleGoogleLogin,error,updateUserProfile}=useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
  
    setError(""); 
    
    if (password.length < 6) {
      setError("Password must contain at least six characters");
      toast.error("Password must contain at least six characters");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      toast.error("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
  
    try {
      const result = await createUser(email, password);
      const user = result.user;
  
      await updateUserProfile({ displayName: name, photoURL: image })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: image });
          toast.success("Registration successful!");
        })
        .catch((err) => {
          toast.error("Failed to update profile: " + err.message);
        });
  
      const redirectPath = location?.state?.from || "/";
      toast.success("Redirecting to: " + redirectPath);
      navigate(redirectPath);
  
      form.reset(); 
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };
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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:w-1/3 lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <div className=" w-1/2 mx-auto">
            <Lottie animationData={registerLottieData}></Lottie>
          </div>
        </div>
        <div className="card bg-base-100  mr-0 max-w-sm shrink-0 shadow-2xl  pb-2">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo-url"
                className="input input-bordered"
                required
              />
            </div>
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
                {/* show pass system */}
                <button type='button' onClick={()=>setShowPassword(!showPassword)} className='absolute top-[360px] right-12 btn btn-xs'>
        {
          showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
        }
       </button>
              </label>
              <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />

              {
      error && <p className='text-red-500'>{error}</p>
     }
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <button onClick={handleGoogleClick} className="btn">
              <span>
                <FcGoogle></FcGoogle>
              </span>
              signin with google
            </button>
            <div className="form-control mt-6">
              <button className="btn btn-primary">register</button>
            </div>
            <p className="px-4 text-xs md:text-sm  font-bold pb-2 items-center">
              if you have already an account please{" "}
              <Link className="text-red-500" to="/login">
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
