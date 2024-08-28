import React from 'react';
import { motion } from 'framer-motion';
import { events } from '../../constants/constants';

const Card = () => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Events (2023 - 2024)</h2>
        <ul>
          {events.map((event, index) => (
            <motion.li
              key={index}
              className="bg-gray-100 p-4 mb-4 rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-700">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="mt-1 text-sm text-gray-600">{event.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Card;
