import React from "react";

const Settings = () => {
  const user = {
    name: "Anne Teresse",
    email: "anne.teresse@gmail.com",
    phone: "+91 3456789058",
    address: "123 Main St, Springfield, IL",
    profilePicture: "/anime.jpg",
  };
  return (
    <div className="p-6 pt-1">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
      </div>
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex items-center mb-6">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-6 pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Details</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-32 font-medium text-gray-700">Phone:</span>
              <span className="text-gray-600">{user.phone}</span>
            </li>
            <li className="flex items-center">
              <span className="w-32 font-medium text-gray-700">Address:</span>
              <span className="text-gray-600">{user.address}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
