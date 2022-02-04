import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/components/infrastracture/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLata, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsProvider } from "./src/services/restauransts/restaurants.context";
import { LocationProvider } from "./src/services/location/location.context";
import Navigation from "./src/components/infrastracture/navigation";
import FavouritesProvider from "./src/services/favourites/favourites.context";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { config } from "./firebase/firebaseConfig";

const firebase = config();
const App = () => {
  const [isAuth, setAuth] = useState(false);
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLata({
    Lato_400Regular,
  });
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase
        .auth()
        .signInWithEmailAndPassword("email@gmail.com", "1234567")
        .then((user) => {
          console.log(user);
          setAuth(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);
  if (!oswaldLoaded && !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesProvider>
          <LocationProvider>
            <RestaurantsProvider>
              <Navigation />
            </RestaurantsProvider>
          </LocationProvider>
        </FavouritesProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};
export default App;
