import { useState } from "react";

export function useGeolocation(loadingSetter,countSetter) {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  function getPosition() {
    countSetter((count) => count + 1);
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    loadingSetter(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        loadingSetter(false);
      },
      (error) => {
        setError(error.message);
        loadingSetter(false);
      }
    );
  }

  return { position, error,  getPosition,  };
}
