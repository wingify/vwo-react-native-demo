import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import PhoneView from "../Component/PhoneView";

export default class Layout extends React.Component {
  listSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "#CED0CE" }} />;
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.half}
          data={phoneList}
          ItemSeparatorComponent={this.listSeparator}
          renderItem={({ item }) => (
            <PhoneView
              name={item.name}
              brand={item.brand}
              price={item.price}
              image1={item.image}
              arrangement="list"
            />
          )}
        />
        <FlatList
          style={styles.half}
          data={phoneList}
          numColumns={2}
          renderItem={({ item }) => (
            <PhoneView
              name={item.name}
              brand={item.brand}
              price={item.price}
              image1={item.image}
              arrangement="grid"
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  half: { flex: 1, borderWidth: StyleSheet.hairlineWidth },
});

const phoneList = [
  {
    key: "iPhone",
    name: "iPhone 6 (16GB, Black)",
    brand: "Apple",
    price: 399,
    image: require("../images/iPhone.png")
  },
  {
    key: "s8",
    name: "Samsung Galaxy S8 (64GB, Black)",
    brand: "Samsung",
    price: 799,
    image: require("../images/samsung-s8.png")
  },
  {
    key: "pixel",
    name: "Google Pixel (32GB, Very Silver)",
    brand: "Google",
    price: 699,
    image: require("../images/pixel.png")
  },
  {
    key: "zte",
    name: "ZTE Max XL (16GB)",
    brand: "ZTE",
    price: 129,
    image: require("../images/zte-max.png")
  }
];