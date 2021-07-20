import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const AddTodo = ({ add }) => {
  const [todoText, setTodoText] = useState("");

  const handleChangeText = (text) => {
    setTodoText(text);
  };
  return (
    <Wrapper>
      <Input onChangeText={handleChangeText} placeholder="new todo" />
      <TouchableOpacity onPress={() => add(todoText)}>
        <Btn>
          <Btext>adicionar</Btext>
        </Btn>
      </TouchableOpacity>
      {/* <Button onPress={() => add(todoText)} title="add todo" color="coral" /> */}
    </Wrapper>
  );
};
const Btn = styled.View`
  width: 100%;
  padding: 15px;
  background-color: coral;
  border-radius: 10px;
`;
const Btext = styled.Text`
  text-align: center;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
`;
const Wrapper = styled.View``;
const Input = styled.TextInput`
  margin-bottom: 10px;
  padding: 6px 8px;
  border-bottom-width: 2px;
  border-bottom-color: #eee;
  font-size: 16px;
`;
export default AddTodo;
