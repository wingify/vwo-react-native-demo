import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight
} from "react-native";

export default class PhoneView extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetailsView: false,
    };
  }

  render() {
    var styles = this.props.type == "list" ? listStyle : gridStyle;
    const item = this.props.item
    return (
      <TouchableHighlight onPress={() => this.props.tapped()}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image style={styles.phoneImage} source={item.image} />
          </View>
          <View style={styles.details}>
            <Text numberOfLines={2} style={styles.name}>
              {item.name}
            </Text>
            <Text style={styles.brand}> by {item.brand}</Text>
            <Text style={styles.price}> ${item.price} </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const listStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: "2%",
    paddingHorizontal: "5%"
  },
  imageView: {
    backgroundColor: "#eee",
    marginRight: "10%"
  },
  phoneImage: { width: 50, height: 100 },
  details: {
    paddingTop: "5%"
  },
  name: {
    fontSize: 12
  },
  brand: {
    color: "#AAAAAA",
    fontSize: 10
  },
  price: {
    color: "#BC1C1C",
    marginTop: 10,
    fontSize: 18
  }
});

const gridStyle = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "column",
    paddingVertical: "2%",
    paddingHorizontal: "5%"
  },
  imageView: {
    alignItems: "center",
    borderWidth: 1,
    paddingVertical: "10%"
  },
  phoneImage: {
    flex: 0.5,
    width: 50,
    height: 100
  },
  details: {
    paddingTop: "5%"
  },
  name: {
    fontSize: 12
  },
  brand: {
    color: "#AAAAAA",
    fontSize: 10
  },
  price: {
    color: "#BC1C1C",
    marginTop: 10,
    fontSize: 18
  }
});
