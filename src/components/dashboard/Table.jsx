import React from 'react';
import { resources } from '../../constants/constants';

const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th className="px-6 py-3">Item</th>
        <th className="px-6 py-3">Category</th>
        <th className="px-6 py-3">Quantity</th>
        <th className="px-6 py-3">Last Updated</th>
      </tr>
    </thead>
    <tbody>
      {resources.map((resource, index) => (
        <tr key={index} className={`border-b dark:border-gray-700 ${index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}`}>
          <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{resource.item}</th>
          <td className="px-6 py-4">{resource.category}</td>
          <td className="px-6 py-4">{resource.quantity}</td>
          <td className="px-6 py-4">{resource.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default Table