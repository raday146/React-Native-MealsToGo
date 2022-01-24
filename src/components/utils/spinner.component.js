import * as React from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const Container = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Spinner = () => (
  <Container>
    <Loading animating={true} color={Colors.blueGrey500} />
  </Container>
);

export default Spinner;
