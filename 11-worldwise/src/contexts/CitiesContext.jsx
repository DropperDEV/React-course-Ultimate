/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch {
      alert("There was an error insert data...");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      alert("There was an error deleting data...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const value = useContext(CitiesContext);
  if (value === undefined)
    throw new Error(
      "Used CitiesContext outside of Provider. The context can only be used in children of the Provider"
    );
  return value;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
