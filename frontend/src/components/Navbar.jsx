import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

 

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-balck">
          Appointment System
        </Link>
        <div className="space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/" className="hover:underline ">
                Home
              </Link>
             
              <button  className="hover:underline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/signup" className="hover:underline">
                Signup
              </Link>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;