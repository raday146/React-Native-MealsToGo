import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const addFavourite = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const removeFavourite = (restaurant) => {
    const newFavourites = favourites.filter(
      (f) => f.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
