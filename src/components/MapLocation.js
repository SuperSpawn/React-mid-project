import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/MapLocation.css";

import { useNavigate } from "react-router-dom";

const MapLocation = ({ location, locationType }) => {
  const navigate = useNavigate();

  const fightHandler = () => {
    navigate("/combat");
  };
  const locationHandler = () => {
    localStorage.setItem("location", JSON.stringify(location));
    navigate("/location");
  };

  return (
    <div className="MapLocation-container">
      <p>{location.name}</p>
      <img src={`/assets/${locationType}.jpg`} alt="hi" />
      <div className="MapLocation-buttons-container">
        <button onClick={locationHandler}>Enter location</button>
        <button onClick={fightHandler}>Fight monsters</button>
      </div>
    </div>
  );
};

export default MapLocation;
