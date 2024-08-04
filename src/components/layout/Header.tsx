import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A component that renders a fixed header at the top of the window.
 *
 * @returns {React.FC} The Header component.
 */
const Header: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 z-10 flex flex-grow h-16 w-full px-4 sm:px-8 md:px-16 items-center justify-between bg-gray-800 text-white">
      <Link to="/" className="text-lg sm:text-2xl">
        Todo App
      </Link>
      <div className="space-x-1 sm:space-x-4">
        <Link
          to="/"
          className="rounded bg-blue-500 px-4 py-2 text-xs sm:text-base duration-300 hover:bg-blue-600 transition"
        >
          View List
        </Link>
        <Link
          to="/add"
          className="rounded bg-blue-500 px-4 py-2 text-xs sm:text-base transition duration-300 hover:bg-blue-600"
        >
          Add ToDo
        </Link>
      </div>
    </header>
  );
};

export default Header;
