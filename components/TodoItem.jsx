import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressed }) => {
  return (
    <TouchableOpacity onPress={pressed}>
      <Info>
        <MaterialIcons name="delete" size={18} color="#333" />
        <TodoText>{item}</TodoText>
      </Info>
    </TouchableOpacity>
  );
};

const Info = styled.View`
  flex-direction: row;
  padding: 16px;
  margin-top: 16px;
  border-color: #bbb;
  border-width: 1px;
  border-style: dashed;
  border-radius: 10px;
`;
const TodoText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

export default TodoItem;
