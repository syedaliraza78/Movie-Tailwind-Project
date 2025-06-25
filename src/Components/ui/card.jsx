import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to Tailwind + TSX</h2>
      <p className="text-gray-600 mb-4">
        This is a styled component using Tailwind CSS with TypeScript (.tsx).
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">
        Click Me
      </button>
    </div>
  );
};

export default Card;
