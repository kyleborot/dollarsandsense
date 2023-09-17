import React, { useState } from "react";
import AnimatedPage from "./AnimatedPage.jsx";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function WelcomeFour() {
  const [selectedChoice, setChoice] = useState(""); // State to store the selected choice

  const handleChoiceChange = (event) => {
    const choice = event.target.value;
    setChoice(choice); // Dispatch the action
  };

  const handleButtonClick = () => {
    // You can now access the selectedChoice value here and use it as needed
    console.log("Selected Choice:", selectedChoice);
  };

  return (
    <AnimatedPage>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-sans mb-6">What are you looking to learn?</h1>
        <div className="mb-6">
          <form>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                value="basics"
                checked={selectedChoice === "basics"}
                onChange={handleChoiceChange}
                className="mr-2"
              />
              <span className="text-lg">I am looking to learn the very basics</span>
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                value="college"
                checked={selectedChoice === "college"}
                onChange={handleChoiceChange}
                className="mr-2"
              />
              <span className="text-lg">I am a college student and want to understand my finances</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="investment"
                checked={selectedChoice === "investment"}
                onChange={handleChoiceChange}
                className="mr-2"
              />
              <span className="text-lg">I am interested in learning about investment</span>
            </label>
          </form>
        </div>
        <Link
          to="/welcome"
          className={`p-3 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300 ${
            selectedChoice ? "" : "pointer-events-none opacity-50" // Disable interaction and reduce opacity if no choice is selected
          }`}
          onClick={(e) => (selectedChoice ? null : e.preventDefault())} // Prevent navigation if no choice is selected
        >
          <FaArrowRight size={24} />
        </Link>
      </div>
    </AnimatedPage>
  );
}


export default WelcomeFour;
