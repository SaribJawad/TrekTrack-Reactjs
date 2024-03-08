import { createContext, useCallback, useContext, useReducer } from "react";
import { useState, useEffect } from "react";

const CitiesContext = createContext();
const Url = "http://localhost:9000";

const initialState = {
  cities: [],
  isLoading: false,
  error: "",
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };

    case "cities/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "cities/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "error":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      throw new Error("Unknown Action Type");
  }
}

function CitiesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  const { cities, isLoading, currentCity } = state;

  useEffect(function () {
    async function fetchData() {
      dispatch({ type: "loading" });
      try {
        // setIsLoading(true);)
        const resp = await fetch(`${Url}/cities`);
        const data = await resp.json();
        // setCities(data);
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({ type: "error", payload: "Unable to fetch the data" });
      }
    }
    fetchData();
  }, []);

  // to make it stable
  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;

      try {
        dispatch({ type: "loading" });
        const resp = await fetch(`${Url}/cities/${id}`);
        const data = await resp.json();
        // setCurrentCity(data);
        dispatch({ type: "city/loaded", payload: data });
      } catch {
        // console.log(currentCity, cities);
        dispatch({ type: "error", payload: "Unable to get the city" });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    try {
      dispatch({ type: "loading" });
      const resp = await fetch(`${Url}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      // setCities((cities) => [...cities, data]);
      dispatch({ type: "cities/created", payload: data });
    } catch {
      // console.log(currentCity, cities);
      dispatch({ type: "error", payload: "Unable to create the city data" });
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      const resp = await fetch(`${Url}/cities/${id}`, {
        method: "DELETE",
      });
      // setCities(cities.filter((city) => city.id !== id));
      dispatch({ type: "cities/deleted", payload: id });
    } catch {
      // console.log(currentCity, cities);
      dispatch({ type: "error", payload: "Unable to delete the city" });
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
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");

  return context;
}

export { CitiesProvider, useCities };
