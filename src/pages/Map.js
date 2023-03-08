import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/Map.css";

import { MapLocations } from "../components/MapLocations";
import fetchUsers from "../service/fetchUsers";

import { NoPage } from "./NoPage";
import { Navbar } from "../components/Navbar";

export const Map = () => {
  //const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const users = fetchUsers();
  if (!users) return <NoPage />;
  const locations = users[0].gang;

  return (
    <div className="Map-container page-height">
      <Navbar>
        <button onClick={logoutHandler}>logout</button>
      </Navbar>
      <MapLocations locations={locations} />
    </div>
  );
};
