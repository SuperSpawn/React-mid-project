import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/MapNavbar.css";

export const MapNavbar = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="MapNavbar-container">
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};
