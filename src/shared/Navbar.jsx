import React, { useContext } from "react";
import { Link } from "react-router";
import logo from "../assets/logo.svg";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Signout Successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navitems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 sticky">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navitems}
          </ul>
        </div>
        <Link to="/" className="hidden md:btn btn-ghost text-xl ">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navitems}</ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="text-red-400">
          {
            user && user.email 
          }
        </div>
        <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="bg-orange-500 text-white px-2 py-1 rounded-2xl"
            >
              LogOut
            </button>
          ) : (
            <button className="bg-orange-500 text-white px-2 py-1 rounded-2xl">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>

        <button className="btn btn-outline btn-error">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
