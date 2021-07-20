import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={require("./../assets/user.jpg")} style={styles.image} />
      <View style={styles.bottom}>
        <View style={styles.info}>
          <Text style={styles.textInfo}>Product Name</Text>
          <Text style={styles.price}>$ price</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 350,
    margin: 10,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,

    elevation: 1,
  },
  image: {
    width: "100%",
    borderRadius: 25,
    height: 240,
  },
  bottom: {
    marginTop: 20,
  },
  info: {},
  price: {
    fontWeight: "bold",
  },
  textInfo: {
    //   fontWeight: '600'
  },
});
export default ProductCard;
