import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfo from "../features/restaurnts-info.features";
import { SafeArea } from "../utils/safe-area.component";

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
          <FlatList
            data={[{ name: 1 }, { name: 2 }]}
            renderItem={() => <RestaurantInfo />}
            keyExtractor={(item) => item.name}
          />
        </RestaurntsContainer>
      </SafeArea>
    </>
  );
};

export default RestaurantsScreen;
