import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import LoginForm from "../Component/LoginForm";

export default class Onboarding extends React.Component {
  listSeparator = () => {
    return <View style={{ height: 1 }} />;
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half}><LoginForm /></View>
        <View style={styles.half}><LoginForm /></View>
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
  half:{
      flex: 1,
      borderWidth: StyleSheet.hairlineWidth
  }
});

