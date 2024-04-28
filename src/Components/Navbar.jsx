import React from 'react';

export const Navbar=()=> {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white py-4 px-8">
      <div className="text-2xl font-bold">ETS</div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Login</button>
    </nav>
  );
}