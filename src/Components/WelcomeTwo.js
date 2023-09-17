import React, { useState } from "react";
import AnimatedPage from "./AnimatedPage.jsx";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function WelcomeTwo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const isInputValid = firstName.trim() !== "" && lastName.trim() !== "";

  const handleButtonClick = () => {
    if (isInputValid) {
      // You can now access the firstName and lastName values here
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
    } else {
      // You can display an error message or handle the validation however you prefer
      console.log("Please enter both first and last names.");
    }
  };

  return (
    <AnimatedPage>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-sans">Enter your name</h1>
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 border rounded-md mr-20" // Added mr-2 for spacing
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border rounded-md" // No mr-2 for spacing
          />
        </div>
        <Link
          to={isInputValid ? `/age/${firstName}` : "#"} // Disabling the link if input is not valid
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

export default WelcomeTwo;
