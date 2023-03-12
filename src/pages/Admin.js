import React, { useState } from "react";

import { UsersList } from "../components/UsersList";
import { LocationsList } from "../components/LocationsList";

import { Navbar } from "../components/Navbar";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Admin.css";

export const Admin = () => {
  const [adminSection, setAdminSection] = useState(0);

  return (
    <div className="Admin-container page-height">
      <Navbar>
        <button onClick={() => setAdminSection(0)}>Users</button>
        <button onClick={() => setAdminSection(1)}>Locations</button>
      </Navbar>
      {adminSection === 0 && <UsersList />}
      {adminSection === 1 && <LocationsList />}
    </div>
  );
};
