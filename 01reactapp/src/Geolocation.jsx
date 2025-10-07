import React, { useState } from "react";

function Geolocation(){
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [errorMessage, setErrorMessage] = useState("");

  //Haversine
  function getDistanceFromLatLon(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  }
  
  // Helper function to convert degrees to radians
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  const users = [
    { name: "Alice", location: { latitude: 22.585501, longitude: 88.4855823 } },
    { name: "Bob", location: { latitude: 22.195501, longitude: 88.4955823 } },
    { name: "Charlie", location: { latitude: 22.575501, longitude: 88.4755823 } }
  ];
  let [nearbyUsers,setNearByUser] = useState([]);
  // Filter users within a 10 km radius
  function getNearByUser(){
    //   nearbyUsers = users.filter(user => {
    //   const distance = getDistanceFromLatLon(
    //     location.latitude,
    //     location.longitude,
    //     user.location.latitude,
    //     user.location.longitude
    //   );
      
    //   return distance <= 10; // Return users within 10 km
    // });
    setNearByUser(users.filter(user => {
      const distance = getDistanceFromLatLon(
        location.latitude,
        location.longitude,
        user.location.latitude,
        user.location.longitude
      );
      
      return distance <= 10; // Return users within 10 km
    }));
  }
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setErrorMessage("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              setErrorMessage("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              setErrorMessage("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              setErrorMessage("An unknown error occurred.");
              break;
            default:
              setErrorMessage("An unknown error occurred.");
          }
        }
      );
    } else {
      setErrorMessage("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <h1>Geolocation Example</h1>
      <button onClick={getLocation}>Get My Location</button>

      {location.latitude && location.longitude ? (
        <div>
          <h3>Your Location</h3>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <button onClick={getNearByUser}>Get Near By User</button>
          {
            nearbyUsers && nearbyUsers.length > 0? (
              <div>
              <h3>Near By Users</h3>
                <ul>
                  {nearbyUsers.map((user) => (
                    <li key={user.name}>{user.name}</li>
                  ))}
                </ul>
              </div>
            ):(<></>)
          }
        </div>
      ) : (
        <p>{errorMessage}</p>
      )}
    </div>
  );
}

export default Geolocation;