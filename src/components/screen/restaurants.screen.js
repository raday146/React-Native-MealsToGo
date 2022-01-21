import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfo from "../features/restaurnts-info.features";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurntsContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

const RestaurantsScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurntsContainer>
          <RestaurantInfo />
        </RestaurntsContainer>
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
