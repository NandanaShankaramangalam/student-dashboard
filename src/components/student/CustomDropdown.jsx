import { useState } from "react";

const Dropdown = ({ selectedClass, setSelectedClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];

  const handleSelect = (option) => {
    setSelectedClass(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md focus:outline-none"
      >
        {selectedClass}
        <svg
          className="ml-2 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          <ul className="py-1">
            {classes.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
