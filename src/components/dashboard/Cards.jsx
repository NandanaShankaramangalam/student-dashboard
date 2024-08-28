import React from "react";

const Cards = ({ icon: Icon, label, count }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
      <div className="bg-blue-100 p-3 rounded-full">
        <Icon className="text-blue-600 w-6 h-6" />
      </div>
      <div>
        <p className="text-gray-700 text-sm">{label}</p>
        <p className="text-gray-900 text-2xl font-bold">{count}</p>
      </div>
    </div>
  );
};

export default Cards;
