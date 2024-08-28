import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <Link to="/">
        <img src={"/school-logo.jpg"} alt="Logo" className="h-16 ps-8" />
      </Link>
      {userLoggedIn && (
        <div className="flex items-center space-x-4">
          <span>{userLoggedIn.email}</span>
          <button
            onClick={() => {
              doSignOut().then(() => {
                navigate("/login");
              });
            }}
            className="flex items-center text-sm text-white hover:underline"
          >
            <img
              src={"/anime.jpg"}
              alt="Profile"
              className="w-8 h-8 mr-2 rounded-full border-2 border-blue-500"
            />
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
