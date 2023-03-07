import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/MapLocation.css";

import { Link } from "react-router-dom";

const MapLocation = ({ location, locationType }) => {
  return (
    <div className="MapLocation-container">
      <p>{location.name}</p>
      <img src={`/assets/${locationType}.jpg`} alt="hi" />
      <div className="MapLocation-buttons-container">
        <button>Enter location</button>
        <button>Fight monsters</button>
      </div>
    </div>
  );
};

export default MapLocation;
