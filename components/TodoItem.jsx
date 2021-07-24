import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { SlideInRight } from "react-native-reanimated";
const TodoItem = ({ item, pressed }) => {
  return (
    <TouchableOpacity onPress={pressed}>
      <Animated.View
        entering={SlideInRight}
        style={{
          flexDirection: "row",
          padding: 16,
          marginTop: 16,
          borderWidth: 1,
          borderStyle: "dashed",
          borderRadius: 10,
        }}
      >
        <MaterialIcons name="delete" size={18} color="#333" />
        <TodoText>{item}</TodoText>
      </Animated.View>
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
