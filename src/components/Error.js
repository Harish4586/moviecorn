import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate= useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you're looking for doesn't exist or an error occurred.
      </p>
      <button
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        onClick={() => navigate("/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Error;