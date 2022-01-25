import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { LocationContext } from "./location/location.context";
import { restaurantReq, restTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { location } = useContext(LocationContext);
  const retriveData = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantReq(loc)
        .then(restTransform)
        .then((res) => {
          setRestaurants(res);
          setIsLoading(false);
          console.log(restaurants, "done");
        })
        .catch((error) => {
          setError(error);
          console.log(error, "done");

          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locString = `${location.lat},${location.lng}`;
      retriveData(locString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
