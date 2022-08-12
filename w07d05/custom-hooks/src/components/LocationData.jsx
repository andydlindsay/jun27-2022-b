import useLocationData from "../hooks/useLocationData";

const LocationData = () => {
  const coords = useLocationData();

  return (
    <div>
      <h2>Location Data:</h2>
      <h2>Lon: {coords.lon}, Lat: {coords.lat}</h2>
    </div>
  );
};

export default LocationData;
