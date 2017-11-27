import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableHighlight
} from "react-native";
import Button from "../Component/Button";

export default class PhoneDetailView extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetailsView: false
    };
  }

  render() {
    const item = this.props.item;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.onClose()}>
          <Image style={styles.close} source={require("../images/Close.png")} />
        </TouchableHighlight>

        <ScrollView>
          <View style={styles.scrollcontainer}>
            <Image style={styles.phoneImage} source={item.image} />
            <Text numberOfLines={2} style={styles.name}>
              {item.name}
            </Text>
            <Text style={styles.price}> ${item.price} </Text>
            <Text style={styles.stars}> ⭐️ ⭐️ ⭐ ⭐ </Text>
            <View style={styles.seperator} />
            <View style={styles.detailContainer}>
              <Text style={[styles.details, { color: "#267911" }]}>
                • In Stock
              </Text>
              <Text style={styles.details}>• Cash on Delivery available </Text>
              <Text numberOfLines={2} style={styles.details}>
                • Also available in Space Gery and Rose gold
              </Text>
            </View>
            <View style={styles.button}>
              <Button
                style={styles.button}
                title="Buy Now"
                color="#AE7827"
                click={() => this.login()}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Add to Cart"
                color="#AFB52C"
                click={() => this.login()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    borderWidth: StyleSheet.hairlineWidth
  },
  close: {
    marginLeft: "2%",
    marginTop: "2%",
    width: 30,
    height: 30
  },
  scrollcontainer: {
    alignItems: "center",
    paddingVertical: "5%",
    paddingHorizontal: "15%"
  },
  phoneImage: { width: 60, height: 120 },
  name: {
    paddingTop: "4%",
    fontSize: 12
  },
  price: {
    color: "#BC1C1C",
    marginTop: 10,
    fontSize: 16
  },
  stars: {
    paddingTop: "3%",
    color: "#E2B447",
    fontSize: 14
  },
  seperator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: "5%",
    width: "100%"
  },
  detailContainer: {
    paddingVertical: "10%"
  },
  details: {
    paddingTop: "3%",
    fontSize: 10
  },
  button: {
    paddingVertical: "5%",
    width: "100%"
  }
});
