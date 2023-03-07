const MapLocation = ({ name, locationType }) => {
  return (
    <div className="MapCard-container">
      <p>{name}</p>
      <img src={`/assets/${locationType}.jpg`} alt="hi" />
      <button>Enter location</button>
      <button>Fight monsters</button>
    </div>
  );
};

export default MapLocation;
