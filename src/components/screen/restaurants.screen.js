import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfo from "../features/restaurnts-info.features";
import { SafeArea } from "../utils/safe-area.component";
import { RestaurantContext } from "../../services/restauransts/restaurants.context";
import { LocationContext } from "../../services/restauransts/location/location.context";
import Spinner from "../utils/spinner.component";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurntsContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  return (
    (isLoading && <Spinner />) || (
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurntsContainer>
          <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
            keyExtractor={(item) => item.name}
          />
        </RestaurntsContainer>
      </SafeArea>
    )
  );
};

export default RestaurantsScreen;
