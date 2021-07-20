import React, { useState } from "react";
import styled from "styled-components/native";
import {
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Ke,
  Keyboard,
} from "react-native";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "some small text", key: "1" },
    { text: "other text again", key: "2" },
    { text: "other text again", key: "3" },
  ]);
  const handleDelete = (id) => {
    setTodos((old) => {
      return old.filter((todo) => todo.key != id);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 3)
      setTodos((old) => {
        return [{ text: text, key: Math.random().toString() }, ...old];
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Container>
        <Header />
        <Content>
          <AddTodo add={submitHandler} />

          <ListWrapper>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem
                  item={item.text}
                  pressed={() => {
                    Alert.alert(`apagar?`, `quer apagar, ${item.text}`, [
                      {
                        text: "Cancel",
                        onPress: () => {},
                        style: "cancel",
                      },
                      { text: "OK", onPress: () => handleDelete(item.key) },
                    ]);
                  }}
                />
              )}
            />
          </ListWrapper>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fefefe;
`;
const Content = styled.View`
  flex: 1;
  padding: 40px;
`;
const ListWrapper = styled.View`
  flex: 1;
  margin-top: 20px;
`;
