import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import PhoneView from "../Component/PhoneView";
import PhoneDetailView from "../Component/PhoneDetails";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetailsView: false
    };
  }

  itemTapped() {
    console.log("Item tapped.");
    this.setState({ showDetailsView: true });
  }

  render() {
    if (this.state.showDetailsView) {
      return (
        <PhoneDetailView
          item={phoneList[0]}
          style={styles.container}
          onClose={() => this.setState({ showDetailsView: false })}
        />
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.half}
          data={phoneList}
          numColumns={this.props.type == "list" ? 1 : 2}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#CED0CE" }} />
          )}
          renderItem={({ item }) => (
            <PhoneView
              style={styles.listItem}
              item={item}
              type={this.props.type}
              tapped={this.itemTapped.bind(this)}
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
  listItem: {
    // backgroundColor: "red",
    // width: "20%"
  }
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
