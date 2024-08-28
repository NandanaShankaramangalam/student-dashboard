import React from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaCalendarAlt,
  FaUserGraduate,
} from "react-icons/fa";
import Cards from "./Cards";
import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="p-6 pt-1">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Cards icon={FaChalkboardTeacher} label="Total Classes" count={12} />
        <Cards icon={FaUserGraduate} label="Total Students" count={120} />
        <Cards icon={FaCalendarAlt} label="Upcoming Events" count={5} />
        <Cards icon={FaUsers} label="Total Teachers" count={10} />
      </div>
      <div className="mt-8">
        <Table/>
      </div>
    </div>
  );
};

export default Dashboard;
