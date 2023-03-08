import React, { useState } from "react";

import { UsersList } from "../components/UsersList";
import { MonsterList } from "../components/MonsterList";
import { LocationsList } from "../components/LocationsList";
import { StatsList } from "../components/StatsList";

import { Navbar } from "../components/Navbar";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Admin.css";

export const Admin = () => {
  const [adminSection, setAdminSection] = useState(0);

  return (
    <div className="Admin-container">
      <Navbar>
        <button onClick={() => setAdminSection(0)}>Users</button>
        <button onClick={() => setAdminSection(1)}>Locations</button>
        <button onClick={() => setAdminSection(2)}>Monsters</button>
        <button onClick={() => setAdminSection(3)}>Stats</button>
      </Navbar>
      {adminSection === 0 && <UsersList />}
      {adminSection === 1 && <LocationsList />}
      {adminSection === 2 && <MonsterList />}
      {adminSection === 3 && <StatsList />}
    </div>
  );
};
