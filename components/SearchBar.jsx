import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ changed }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={changed}
        placeholder="what are you looking for"
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F7F7F7",
    width: "100%",
    padding: 15,
    borderRadius: 25,
  },
  wrapper: {
    marginTop: 75,
  },
});

export default SearchBar;
