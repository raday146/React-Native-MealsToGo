import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import Search from "../components/search.component";
import { LocationContext } from "../../../../services/restauransts/location/location.context";
import { RestaurantContext } from "../../../../services/restauransts/restaurants.context";
import MapCallout from "../components/mapCallout.component";
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;
  useEffect(() => {
    const { northeast, southwest } = viewport;
    const latDelta = northeast.lat - southwest.lat;
    setLatDelta(latDelta);
  }, [latDelta, location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <MapCallout
                  name={restaurant.name}
                  icon={restaurant.photos[0]}
                />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};

export default MapScreen;
