import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import Header from "../header/Header";

const Home = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
