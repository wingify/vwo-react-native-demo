import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Shopping from "./View/Shopping.js"

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.app}>
        <View style={styles.nav}>
        </View>
        <View style={styles.container}>
          <Shopping/>
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
    flex: 1,
    backgroundColor: "#090C21"
  },
  container: {
    flex: 8
  }
});
