import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

class PhoneView extends React.Component {
  render() {
    return (
      <View 
      style={this.props.arrangement == "vertical" ? styles.container : styles.containerV}>
        <Image style={styles.phoneImage} source={this.props.image1} />
        <View style={styles.details}>
          <Text numberOfLines={2} style={styles.name}>{this.props.name}</Text>
          <Text style={styles.brand}> by {this.props.brand}</Text>
          <Text style={styles.price}> ${this.props.price} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    borderWidth: 1
  },
  containerV: {
    flexDirection: "column",    
  },
    
  phoneImage: { width: 50, height: 100, marginRight: "5%" },
  details: {
    paddingTop: "5%",
  },
  name: { },
  brand: {
    color: "grey", fontSize: 10
  },
  price: {
    color: "#BC1C1C", marginTop: 10, fontSize: 18
  }
});

export default PhoneView;
