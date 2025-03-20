import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-6xl sm:text-7xl text-indigo-600 font-bold">404</div>
      <h1 className="text-3xl sm:text-4xl text-gray-800 mt-4 text-center">
        Page Not Found
      </h1>
      <p className="text-gray-600 mt-2 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none text-center"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
