import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaFilter, FaThLarge, FaHome } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="mt-10 flex flex-row justify-center space-x-4 sm:space-x-6 lg:space-x-20 items-center">
      <div className="flex flex-col items-center">
        <Link
          to="/"
          className="text-2xl sm:text-3xl text-gray-700 hover:text-indigo-600"
        >
          <FaHome />
        </Link>
        <span className="text-xs sm:text-sm text-gray-600 mt-1">Home</span>
      </div>

      <div className="flex flex-col items-center">
        <Link
          to="/search"
          className="text-2xl sm:text-3xl text-gray-700 hover:text-indigo-600"
        >
          <FaSearch />
        </Link>
        <span className="text-xs sm:text-sm text-gray-600 mt-1">Search</span>
      </div>

      <div className="flex flex-col items-center">
        <Link
          to="/filter"
          className="text-2xl sm:text-3xl text-gray-700 hover:text-indigo-600"
        >
          <FaFilter />
        </Link>
        <span className="text-xs sm:text-sm text-gray-600 mt-1">Filter</span>
      </div>

      <div className="flex flex-col items-center">
        <Link
          to="/category"
          className="text-2xl sm:text-3xl text-gray-700 hover:text-indigo-600"
        >
          <FaThLarge />
        </Link>
        <span className="text-xs sm:text-sm text-gray-600 mt-1">Category</span>
      </div>
    </div>
  );
};

export default Icons;
