import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services//favourites/favourites.context";

export const FavaouritBtn = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;
const Favaourites = ({ restaurant }) => {
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext);
  let isFavaourit =
    favourites && favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavaouritBtn
      onPress={() =>
        !isFavaourit ? addFavourite(restaurant) : removeFavourite(restaurant)
      }
    >
      <AntDesign
        name={isFavaourit ? "heart" : "hearto"}
        size={24}
        color={isFavaourit ? "red" : "white"}
      />
    </FavaouritBtn>
  );
};

export default Favaourites;
