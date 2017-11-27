import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class Button extends React.Component {
  render() {
    const combineStyles = StyleSheet.flatten([styles.container, {backgroundColor: this.props.color}]);
    return (
      <TouchableHighlight
        style={combineStyles}
        onPress={() => this.props.click()}
      >
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      paddingVertical: "5%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 2,
      width: "100%"
  },
  text: {
    fontSize: 12,
    color: "white"
  }
});
