import React from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/LocationsList.css";
import fetchUsers from "../service/fetchUsers";

import { LocationCard } from "./LocationCard";

import uuid from "react-uuid";

export const LocationsList = () => {
  const locationsAccount = fetchUsers()[0];
  const locations = locationsAccount.gang;

  return (
    <div className="LocationsList-container">
      {locations.map((location) => (
        <LocationCard key={uuid()} data={location} />
      ))}
    </div>
  );
};
