import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import './nav.css';
import AuthContext from '../../context/AuthContext';

const NavBar = () => {
  const { user, handleLogOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink className="btn text-lg font-semibold hover:text-blue-600" to="/">
        Home
      </NavLink>
      <NavLink className="btn text-lg font-semibold hover:text-blue-600" to="/queries">
        Queries
      </NavLink>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-lg">
      <div className="navbar container mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a className="text-3xl font-extrabold text-white tracking-wide">
            Next-Step-Guide
          </a>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden lg:flex space-x-5">
          {links}
          {user && user?.email && (
            <>
              <NavLink className="btn text-lg font-semibold hover:text-blue-200" to="/myQueries">
                My Queries
              </NavLink>
              <NavLink className="btn text-lg font-semibold hover:text-blue-200" to="/my-recommends">
                My Recommends
              </NavLink>
              <NavLink className="btn text-lg font-semibold hover:text-blue-200" to="/recommendsForMe">
                Recommend For Me
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        <div className="lg:hidden flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 bg-white text-gray-800 rounded-box shadow-lg w-52"
            >
              {links}
              {user && user?.email ? (
                <>
                  <NavLink className="btn block px-4 py-2 hover:bg-blue-200" to="/myQueries">
                    My Queries
                  </NavLink>
                  <NavLink className="btn block px-4 py-2 hover:bg-blue-200" to="/my-recommends">
                    My Recommends
                  </NavLink>
                  <NavLink className="btn block px-4 py-2 hover:bg-blue-200" to="/recommendsForMe">
                    Recommend For Me
                  </NavLink>
                  <button
                    onClick={handleLogOut}
                    className="btn block text-red-600 font-bold px-4 py-2 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="btn block text-green-600 font-bold px-4 py-2 hover:bg-green-100">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="btn block text-blue-600 font-bold px-4 py-2 hover:bg-blue-100">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* User Avatar and Login/Logout */}
        <div className="flex items-center space-x-4">
          {user && user?.email && (
            <div className="flex items-center">
             
              <img
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user.displayName}
                src={user.photoURL}
                alt="User Avatar"
                className="w-12 h-12 rounded-full object-cover border-2 border-white hover:scale-110 transform transition duration-300"
              />
              <ReactTooltip
                id="user-tooltip"
                place="bottom"
                type="light"
                effect="solid"
              />
            </div>
          )}
          <div>
            {user && user?.email ? (
              <button
                onClick={handleLogOut}
                className="hidden lg:block bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 transform transition duration-300"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button className="hidden lg:block bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 transform transition duration-300">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="hidden lg:block bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 transform transition duration-300">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
