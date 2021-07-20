import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>Todo for the world</Title>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 80px;
  padding-top: 40px;
  background-color: coral;
`;
const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
`;
export default Header;
