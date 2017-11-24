import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import PhoneView from './PhoneView.js'

const Dimensions = require('Dimensions');
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

// const window = Dimensions.get('window');

export default class App extends React.Component {
  onPressLearnMore() {
    console.log("Here");
  }
  render() {
    console.log("Rendering" + windowHeight);
    
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={phoneList}
            renderItem={({ item }) => <PhoneView name={item.name} brand={item.brand} price={item.price} image1={item.image} arrangement="vertical"/> }
          />
        </View>
        <View style={styles.grid}>
        </View>
      </View>
    );
  }
}
const phoneList = [
  {
    key: "iPhone",
    name: "iPhone 6 (16GB, Black)",
    brand: "Apple",
    price: 399,
    image: require("./images/iPhone.png")
  },
  {
    key: "s8",
    name: "Samsung Galaxy S8 (64GB, Black)",
    brand: "Samsung",
    price: 799,
    image: require("./images/samsung-s8.png")
  },
  {
    key: "pixel",
    name: "Google Pixel (32GB, Very Silver)",
    brand: "Google",
    price: 699,
    image: require("./images/pixel.png")
  },
  {
    key: "zte",
    name: "ZTE Max XL (16GB)",
    brand: "ZTE",
    price: 129,
    image: require("./images/zte-max.png")
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  },
  list: {
    width: windowWidth / 2,
    height: windowHeight,
    backgroundColor: 'lightgrey'
  },
  grid: {
    width: windowWidth / 2,
    height: windowHeight,
    backgroundColor: 'green'
  }
});
