import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import NavigationBar from 'react-native-navbar';

export default class Navbar extends React.Component {

  render() {
    const item = this.props.item
    return (
        <NavigationBar
          tintColor = '#DEDEDE'
          title={{title: this.props.title}}
          leftButton={
            <TouchableOpacity
              onPress={() => this.props.menuClick()}>
               <Image style={styles.menu} source={require("../images/Menu.png")} />
            </TouchableOpacity>
          }
          rightButton={
            <TouchableOpacity
              onPress={() => this.props.reload()}>
               <Image style={styles.menu} source={require("../images/Reload.png")} />
            </TouchableOpacity>
          }
        />
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
