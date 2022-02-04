import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { RestaurantInfoComponent } from "../features/restaurnts-info.features";
import MapCallout from "../features/map/components/mapCallout.component";
import Spacer from "../spacer.components";
import Text from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
const FavouritesBar = ({ favourites, onDetail }) => {
  if (favourites.length === 0) {
    console.log("nothing end fast");
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
                <MapCallout
                  name={restaurant.name}
                  icon={restaurant.photos[0]}
                />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
export default FavouritesBar;
