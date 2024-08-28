import React, { useState } from "react";
import Table from "./Table";
import Dropdown from "./CustomDropdown";

const Student = () => {
  const [selectedClass, setSelectedClass] = useState("Class 1");
  return (
    <div className="p-6 pt-1">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Students</h2>
      </div>
      <Dropdown
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />
      <div className="mt-4">
        <Table selectedClass={selectedClass} />
      </div>
    </div>
  );
};

export default Student;
