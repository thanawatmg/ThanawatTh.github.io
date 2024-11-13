"use client"
// components/Dropdown.js
import { useState } from 'react';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white p-3 rounded-md"
      >
        เมนู Dropdown
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">เมนู 1</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">เมนู 2</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">เมนู 3</a>
        </div>
      )}
    </div>
  );
}
