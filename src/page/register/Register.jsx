import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import registerLottieData from "../../assets/lottie/register.json.json";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  // const [showPassword, setShowPassword]=useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const {createUser,setError,setUser}=useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const image = e.target.photo.value;

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password, image);
    setError('')
    if(password.length<6){
      setError('password must contain at least six character  ')
      toast.error('Password must contain at least six characters');
      return
    }
    if(!/[a-z]/.test(password)){
      setError('password must contain at least one lowercase ')
      toast.error('password must contain at least one lowercase ');

      return
    }
    if(!/[A-Z]/.test(password)){
      setError('password must contain at least one uppercase ')
      toast.error('password must contain at least one uppercase ')
      return
    }
    createUser(email,password)
    .then((result)=>{
      const user=result.user
      console.log(user)
      setUser(user)
      toast.success('succesful')
      // updateUserProfile({displayName:name, photoURL:image}).then(()=>{
      //     toast.success('succesful')
      //     setUser((prev)=>({...prev,displayName:name,photoURL:image}))
      //   }).catch(err=>{
      //     toast.error(err)
      //   })
     

      form.reset()
      navigate(location?.state ? location.state :"/");
    })
    .catch((error)=>{
      const errorcode=error.code;
      const errorMassage=error.message;
      toast.error(error.message)
      
    })
  };
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
                {/* <button type='button' onClick={()=>setShowPassword(!showPassword)} className='absolute top-[360px] right-12 btn btn-xs'>
        {
          showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
        }
       </button> */}
              </label>

              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

              {/* {
      error && <p className='text-red-500'>{error}</p>
     } */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <button className="btn">
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
