import React from 'react';
import Card from './Card';

const Events = () => {
  return (
    <div className="p-6 pt-1">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
      </div>
      <div>
        <Card/>
      </div>
    </div>
  )
}

export default Events