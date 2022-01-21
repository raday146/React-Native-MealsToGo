import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/components/screen/restaurants.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/components/infrastracture/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLata, Lato_400Regular } from "@expo-google-fonts/lato";

const App = () => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLata({
    Lato_400Regular,
  });

  if (!oswaldLoaded && !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar />
    </>
  );
};
export default App;
