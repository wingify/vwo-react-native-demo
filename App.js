import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Shopping from "./View/Shopping.js";
import NavBar from "./Component/NavBar.js";
import { StatusBar } from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
  }
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  showMenu() {
    console.log("Show hamburger menu");
  }
  render() {
    return (
      <View style={styles.app}>
        <NavBar menuClick={this.showMenu.bind(this)} style={styles.nav} />
        <View style={styles.container}>
          <Shopping />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  nav: {
    flex: 1
  },
  container: {
    flex: 8
  }
});
