import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/authContext";
import { doSignOut } from "../../../../firebase/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <div>
      {userLoggedIn && (
        <button
          onClick={() => {
            doSignOut().then(() => {
              navigate("/login");
            });
          }}
          className="text-sm text-blue-600 underline"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Dashboard;
