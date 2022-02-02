import React, { useState, createContext, useCallback } from "react";

import { locationReq, locationTransform } from "./location.service";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSearch = useCallback((searchKeyWord) => {
    setIsLoading(true);
    setKeyword(searchKeyWord);
    if (!searchKeyWord.length) {
      setIsLoading(false);
      return;
    }
    setTimeout(() => {
      locationReq(searchKeyWord.toLowerCase())
        .then(locationTransform)
        .then((result) => {
          setLocation(result);
          ///  setKeyword("");
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 1000);
  }, []);
  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
