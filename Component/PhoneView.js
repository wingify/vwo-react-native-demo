import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";

export default class PhoneView extends React.Component {
  state = {
      showDetailsView: false,
    };

  render() {
    const item = this.props.item
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.tapped(item.key)}>
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
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
