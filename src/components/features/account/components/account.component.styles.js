import React from "react";
import styled from "styled-components/native";
import bg from "../img/home_bg.jpg";

export const AccountBackground = styled.ImageBackground.attrs({
  source: `${bg}`,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;
