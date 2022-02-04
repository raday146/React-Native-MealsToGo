import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FavouritesContext = createContext();

const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async () => {
    try {
      if (favourites) {
        const jsonValue = JSON.stringify(favourites);
        await AsyncStorage.setItem("@favourites", jsonValue);
      }
    } catch (e) {
      console.log("saveAll");
    }
  };
  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("loading opration failed");
    }
  };
  const addFavourite = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const removeFavourite = (restaurant) => {
    const newFavourites = favourites.filter(
      (f) => f.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };
  useEffect(() => {
    loadFavourites();
  }, []);
  useEffect(() => {
    saveFavourites();
  });

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
