import React, { useState } from "react";

import { UsersList } from "../components/UsersList";
import { MonsterList } from "../components/MonsterList";
import { LocationsList } from "../components/LocationsList";
import { StatsList } from "../components/StatsList";

import { Navbar } from "../components/Navbar";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Admin.css";

import { NoPage } from "./NoPage";

export const Admin = () => {
  const [adminSection, setAdminSection] = useState(0);
  const [error, setError] = useState(0);

  if (error === 1) return <NoPage />;

  return (
    <div className="Admin-container">
      <Navbar>
        <button onClick={() => setAdminSection(0)}>Users</button>
        <button onClick={() => setAdminSection(1)}>Locations</button>
        <button onClick={() => setAdminSection(2)}>Monsters</button>
        <button onClick={() => setAdminSection(3)}>Stats</button>
      </Navbar>
      {adminSection === 0 && <UsersList setError={setError} />}
      {adminSection === 1 && <LocationsList setError={setError} />}
      {adminSection === 2 && <MonsterList setError={setError} />}
      {adminSection === 3 && <StatsList setError={setError} />}
    </div>
  );
};
