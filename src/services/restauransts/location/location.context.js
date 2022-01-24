import React, { useState, createContext, useEffect, useMemo } from "react";

import { locationReq, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSearch = (searchKeyWord) => {
    setIsLoading(true);
    console.log(location);
    setKeyword(searchKeyWord.toLowerCase());
    setTimeout(() => {
      locationReq(keyword)
        .then((res) => locationTransform(res))
        .then((res) => {
          setLocation(res);
          setIsLoading(false);
        })
        .catch((error) => setError(error));
    }, 2000);
  };

  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <LocationContext.Provider value={{ location, isLoading, error }}>
      {children}
    </LocationContext.Provider>
  );
};
