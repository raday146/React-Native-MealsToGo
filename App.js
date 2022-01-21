import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/components/screen/restaurants.screen";
const App = () => {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar />
    </>
  );
};
export default App;
