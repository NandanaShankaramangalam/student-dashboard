import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaCalendarAlt,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <nav className="flex flex-col p-4">
        <Link
          to="/home/dashboard"
          className="mb-4 flex items-center hover:bg-gray-700 p-2 rounded"
        >
          <FaTachometerAlt className="mr-2" /> Dashboard
        </Link>
        <Link
          to="/home/student"
          className="mb-4 flex items-center hover:bg-gray-700 p-2 rounded"
        >
          <FaUserGraduate className="mr-2" /> Students
        </Link>
        <Link
          to="/home/upcoming-events"
          className="mb-4 flex items-center hover:bg-gray-700 p-2 rounded"
        >
          <FaCalendarAlt className="mr-2" /> Upcoming Events
        </Link>
        <Link
          to="/home/settings"
          className="mb-4 flex items-center hover:bg-gray-700 p-2 rounded"
        >
          <FaCog className="mr-2" /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
