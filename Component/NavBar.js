import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";

export default class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => this.props.menuClick()}
        >
          <Image style={styles.menu} source={require("../images/Menu.png")} />
        </TouchableHighlight>
        <Text style={styles.control}>Control</Text>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.variation}>Variation</Text>
        <TouchableHighlight
          style={styles.touchable}
          onPress={() => this.props.reload()}
        >
          <Image
            style={styles.reload}
            source={require("../images/Reload.png")}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#090C21",
    alignItems: "center",
    justifyContent: "space-between"
  },
  touchable: {
    // backgroundColor: "red",
    height: "100%",
    width: "10%"
  },
  menu: {
    marginLeft: "10%",
    marginTop: "17%"
  },
  control: {
    color: "#EB5757"
  },
  variation: {
    color: "#27AE60"
  },
  title: {
    color: "white"
  },
  reload: {
    marginLeft: "50%",
    marginTop: "17%"
  }
});
