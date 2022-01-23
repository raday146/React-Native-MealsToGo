import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";
import Spacer from "../spacer.components";
import Text from "../typography/text.component";

const RestaurantCard = styled(Card)`
  elevation: 5;
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.lineHeights.copy};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
  flex-direction: row;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  font-size:  ${(props) => props.theme.fontSizes.captions}
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "some address",
    isOpen = true,
    rating = 3,
    isCloseTemporarily = false,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isCloseTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpen && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
export default RestaurantInfo;
