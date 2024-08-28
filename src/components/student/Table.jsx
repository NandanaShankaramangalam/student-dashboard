import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = ({ selectedClass }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://freetestapi.com/api/v1/students",
          {
            params: {
              limit: 10, 
            },
          }
        );
        console.log("res=", response?.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedClass]);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="overflow-y-auto max-h-[450px]">
        {" "}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Id</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">GPA</th>
            </tr>
          </thead>
          <tbody>
            {data?.length &&
              data.map((data, index) => (
                <tr
                  key={index}
                  className={`border-b dark:border-gray-700 ${
                    index % 2 === 0
                      ? "bg-gray-50 dark:bg-gray-800"
                      : "bg-white dark:bg-gray-900"
                  }`}
                >
                  <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data?.id}
                  </th>
                  <td className="px-6 py-4">{data?.name}</td>
                  <td className="px-6 py-4">{data?.email}</td>
                  <td className="px-6 py-4">{data?.phone}</td>
                  <td className="px-6 py-4">{data?.gpa}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
