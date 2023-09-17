import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import AnimatedPage from "./AnimatedPage.jsx";
import { FaArrowRight } from 'react-icons/fa';

function WelcomeThree() {
  const { firstName } = useParams(); // Get the firstName from route parameters
  const [age, setAge] = useState("");

  const isInputValid = age.trim() !== "" 

  const handleButtonClick = () => {
    if (isInputValid) {
      // You can now access the firstName and lastName values here
      console.log("Age:", age);
    } else {
      // You can display an error message or handle the validation however you prefer
      console.log("Please enter both first and last names.");
    }
  };

  return (
    <AnimatedPage>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-sans">
          {`Hi, ${firstName}. How old are you?`}
        </h1>
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="p-2 border rounded-md mr-20" // Added mr-2 for spacing
          />
        </div>
        <Link to={isInputValid ? "/level" : "#"} // Disabling the link if input is not valid
          className={`mt-9 p-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300 ${
            isInputValid ? "" : "pointer-events-none opacity-50" // Disable interaction and reduce opacity if input is not valid
          }`}
          onClick={(e) => (isInputValid ? null : e.preventDefault())} // Prevent navigation if input is not valid
          >
            <FaArrowRight size={24} />
        </Link>
      </div>
    </AnimatedPage>
  );
}

export default WelcomeThree;
