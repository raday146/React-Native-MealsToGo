import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components";
import RestaurantInfo from "../features/restaurnts-info.features";
import { SafeArea } from "../utils/safe-area.component";
import { RestaurantContext } from "../../services/restauransts/restaurants.context";
import Spinner from "../utils/spinner.component";
import Search from "../search.component";

const RestaurntsContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const goTo = (subComponentName, componentDetial) => {
    navigation.navigate(subComponentName, componentDetial);
  };
  return (
    (isLoading && <Spinner />) || (
      <SafeArea>
        <Search />
        <RestaurntsContainer>
          <FlatList
            data={restaurants}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => goTo("RestaurantDetail", { restaurant: item })}
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
        </RestaurntsContainer>
      </SafeArea>
    )
  );
};

export default RestaurantsScreen;
