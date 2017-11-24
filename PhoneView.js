import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

class PhoneView extends React.Component {
  render() {
    var styles = this.props.arrangement == "list" ? listStyle : gridStyle;
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
            <Image style={styles.phoneImage} source={this.props.image1} />
        </View>
        <View style={styles.details}>
          <Text numberOfLines={2} style={styles.name}>{this.props.name}</Text>
          <Text style={styles.brand}> by {this.props.brand}</Text>
          <Text style={styles.price}> ${this.props.price} </Text>
        </View>
      </View>
    );
  }
}

const listStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    borderWidth: 0.5
  },
  imageView: {
    backgroundColor: "#eee",
    marginRight: "10%",
  },
  phoneImage: { width: 50, height: 100},
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
    paddingHorizontal: "5%",
  },
  imageView: {
    alignItems: "center",
    borderWidth: 1,
    paddingVertical: "10%"
  },    
  phoneImage: { 
      flex: 0.5,
      width: 50, height: 100, 
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

export default PhoneView;
