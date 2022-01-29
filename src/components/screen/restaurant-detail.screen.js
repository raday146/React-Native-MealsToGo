import React, { useState } from "react";
import { List } from "react-native-paper";
import RestaurantInfo from "../features/restaurnts-info.features";
import { ScrollView } from "react-native";

const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  const [breackFastExpanded, setBreackFastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="BreackFast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expande={breackFastExpanded}
          onPress={() => setBreackFastExpanded(!breackFastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breackfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expande={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/Fries" />
          <List.Item title="Steack Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food" />}
          expande={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with chicke Mushroom Soup" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expande={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffe" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </>
  );
};

export default RestaurantDetail;
