import React from "react";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; 

function Welcome() {
  return (
        <div class="flex flex-col items-center justify-center h-screen">
        <div class="text-center">
            <h1 class="text-6xl font-sans">Welcome to Dollars & Sense, a financial literacy platform</h1>
        </div>
        <Link to="/name" className="mt-9 p-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300">
            <FaArrowRight size={24} />
        </Link>
        </div>
  );
  
}
export default Welcome;