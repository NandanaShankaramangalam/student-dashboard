import React, { useState } from "react";
import Table from "./Table";

const Student = () => {
  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
  const [selectedClass, setSelectedClass] = useState("Class 1");
  return (
    <div className="p-6 pt-1">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Students</h2>
      </div>
      <div className="flex justify-around">
        {classes.map((item, index) => (
          <button
            className={`rounded-full ${
              selectedClass === item ? "border-2 border-zinc-600" : ""
            } bg-yellow-600 hover:bg-yellow-500 p-1 w-24 h-8 text-white`}
            onClick={() => setSelectedClass(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <Table selectedClass={selectedClass}/>
      </div>
    </div>
  );
};

export default Student;
