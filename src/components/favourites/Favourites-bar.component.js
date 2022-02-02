import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import RestaurantInfo from "../features/restaurnts-info.features";
import Spacer from "../spacer.components";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
const FavouritesBar = ({ favourites, onDetail }) => {
  if (!favourites) {
    console.log("nothing");
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from(favourites).map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onDetail("RestaurantDetail", { restaurant })}
              >
                <RestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
export default FavouritesBar;
