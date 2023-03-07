import React, { useState } from "react";

import { AdminNavbar } from "../components/AdminNavbar";
import { UsersList } from "../components/UsersList";
import { MonsterList } from "../components/MonsterList";
import { LocationsList } from "../components/LocationsList";
import { StatsList } from "../components/StatsList";

import "../styles/Admin.css";

export const Admin = () => {
  const [adminSection, setAdminSection] = useState(0);

  return (
    <div className="Admin-container">
      <AdminNavbar setAdminSection={setAdminSection} />
      {adminSection === 0 && <UsersList />}
      {adminSection === 1 && <LocationsList />}
      {adminSection === 2 && <MonsterList />}
      {adminSection === 3 && <StatsList />}
    </div>
  );
};
