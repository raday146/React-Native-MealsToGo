import React from "react";
import RestaurantInfo from "../features/restaurnts-info.features";

const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  return <RestaurantInfo restaurant={restaurant} />;
};

export default RestaurantDetail;
