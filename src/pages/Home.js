import React, { useState } from "react";

import { Start } from "../components/Start";
import { Login } from "../components/Login";
import { About } from "../components/About";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Home.css";

export const Home = () => {
  const [homeSection, setHomeSection] = useState(0);

  return (
    <div className="Home-container">
      <div className="Home-navbar-container">
        <div className="Home-navbar-buttons-container">
          {homeSection !== 0 && (
            <button onClick={() => setHomeSection(0)}>Start</button>
          )}
          {homeSection !== 1 && (
            <button onClick={() => setHomeSection(1)}>Login</button>
          )}
          {homeSection !== 2 && (
            <button onClick={() => setHomeSection(2)}>About</button>
          )}
        </div>
      </div>
      <div className="Home-sections-container">
        {homeSection === 0 && <Start setHomeSection={setHomeSection} />}
        {homeSection === 1 && <Login />}
        {homeSection === 2 && <About />}
      </div>
    </div>
  );
};
