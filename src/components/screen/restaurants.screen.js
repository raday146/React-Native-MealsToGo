import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../features/restaurnts-info.features";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    padding: 16,
    flex: 1,
  },
});

const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </>
  );
};

export default RestaurantsScreen;
