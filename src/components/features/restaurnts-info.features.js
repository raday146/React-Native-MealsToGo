import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components";
import { Card, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";
import Spacer from "../spacer.components";

const RestaurantCard = styled(Card)`
  elevation: 5;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.lineHeights.copy};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size:  ${(props) => props.theme.fontSizes.body}
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Rating = styled(View)`
  flex-direction: row;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
const Address = styled(Text)`
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
        <Title>{name}</Title>
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
            <Spacer variant={"left.large"} />
            {isOpen && <SvgXml xml={open} width={20} height={20} />}
            <Spacer variant={"left.large"} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
export default RestaurantInfo;
