import React from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Navbar.css";

export const Navbar = (props) => {
  return <div className="Navbar-container">{props.children}</div>;
};
