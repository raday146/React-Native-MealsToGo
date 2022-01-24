import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantReq, restTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const retriveData = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantReq()
        .then((res) => restTransform(res))
        .then((res) => {
          setRestaurants(res);
          setIsLoading(false);
        })
        .catch((error) => setError(error));
    }, 2000);
  };

  useEffect(() => {
    retriveData();
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
