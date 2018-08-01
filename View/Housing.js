import React from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from "react-native";
import HouseView from "../Component/HouseView";
import houseList from "../data/HouseList";
import VWO from "vwo-react-native";

export default class Housing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          key="1"
          data={houseList}
          numColumns="2"
          renderItem={({ item }) => (
            <HouseView
              item={item}
              />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "#fff"
  }
});
