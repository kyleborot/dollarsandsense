import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Welcome from "./Components/Welcome.js";
import Platform from "./Components/Platform.js";
import WelcomeTwo from './Components/WelcomeTwo.js';
import WelcomeThree from './Components/WelcomeThree.js';
import WelcomeFour from './Components/WelcomeFour.js';
import WelcomeFive from './Components/WelcomeFive.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/name" element={<WelcomeTwo />} />
        <Route path="/age/:firstName" element={<WelcomeThree />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/level" element={<WelcomeFour />} />
        <Route path="/welcome" element={<WelcomeFive />} />
      </Routes>
    </Router>
  );
}

export default App;
