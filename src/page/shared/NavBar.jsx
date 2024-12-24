import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import  './nav.css'
import AuthContext from '../../context/AuthContext';
const NavBar = () => {
  const {user,handleLogOut}=useContext(AuthContext)
    const links=<>
  
        <NavLink className={'btn'} to='/'>Home</NavLink>
        <NavLink className={'btn'} to='/myQueries'>MyQueries</NavLink>
        <NavLink className={'btn'} to='/my-recommends'>MyRecommends</NavLink>
        <NavLink className={'btn'} to='/queries'>Queries</NavLink>
        <div className=" md:hidden">
        {user && user?.email ? (
          <button
            onClick={handleLogOut}
            className=" md:ml-4   md:btn  md:text-white text-red-400 font-bold  md:bg "
          >
            logout
          </button>
        ) : (
          <Link to="/login">
            <button className="md:ml-4  md:btn  md:text-white text-red-400  md:bg">
              login
            </button>
          </Link>
        )}
      </div>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Next-Step-Guide</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  {user && user?.email && (
      <div>
            <img
              data-tooltip-id="user-tooltip"
              data-tooltip-content={user.displayName} 
              src={user.photoURL}
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500"
            />
            <ReactTooltip id="user-tooltip" place="bottom" type="light" effect="solid" />
          </div>
    )}
    <div>
    {user && user?.email ? (
        <button
          onClick={handleLogOut}
          className="btn hidden md:inline-block bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 transform transition duration-300"
        >
          Logout
        </button>
      ) : (<>
        <Link to="/login">
          <button className="btn hidden md:inline-block bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 transform transition duration-300">
            Login
          </button>
        </Link>
        <Link to='/register'><button className='btn'>Register</button></Link>
      </>
      )}
    </div>
    
  </div>
</div>
        </div>
    );
};

export default NavBar;