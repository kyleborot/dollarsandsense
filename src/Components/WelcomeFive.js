import React from "react";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; 
import AnimatedPage from "./AnimatedPage.jsx";

function Welcome() {
  return (
    <AnimatedPage>
        <div class="flex flex-col items-center justify-center h-screen">
        <div class="text-center">
            <h1 class="text-6xl font-sans">Thank you! Your experience is ready.</h1>
        </div>
        <Link to="/platform" className="mt-9 p-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300">
            <FaArrowRight size={24} />
        </Link>
        </div>
    </AnimatedPage>
  );
  
}
export default Welcome;