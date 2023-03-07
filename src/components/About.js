import React from "react";
import { Link } from "react-router-dom";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="Home-About-container page-height">
      <h3>
        This is a project by <span>Talal Zoabi</span>
      </h3>
      <div>
        <Link>
          <span>Check out my GitHub</span>
        </Link>
      </div>
      <div>
        <Link>
          <span>Check out my LinkedIn</span>
        </Link>
      </div>
    </div>
  );
};
