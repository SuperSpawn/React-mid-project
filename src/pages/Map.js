import React from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Map.css";

import { MapNavbar } from "../components/MapNavbar";
import { MapLocations } from "../components/MapLocations";
import fetchUsers from "../service/fetchUsers";

import { NoPage } from "./NoPage";

export const Map = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const users = fetchUsers();
  if (!users) return <NoPage />;
  const locations = users[0].gang;

  return (
    <div className="Map-container page-height">
      <MapNavbar />
      <MapLocations locations={locations} />
    </div>
  );
};
