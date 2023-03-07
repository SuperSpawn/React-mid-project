import React from "react";

import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/MapLocations.css";
import MapLocation from "./MapLocation";

export const MapLocations = ({ locations }) => {
  return (
    <div className="MapLocations-container page-height">
      {locations.map((location) => {
        const locationType = location.name.split(" ").pop();
        return (
          <MapLocation
            key={location.id}
            location={location}
            locationType={locationType}
          />
        );
      })}
    </div>
  );
};
