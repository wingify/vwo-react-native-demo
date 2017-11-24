import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image
} from "react-native";

class MenuItem extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.menuItemClick(this.props.id)}
      >
        <Text style={styles.option}>{this.props.title}</Text>
      </TouchableHighlight>
    );
  }
}
export default class Menu extends React.Component {
  menuSelected(val) {
    // console.log("Menu selected " + val);
    this.props.menuSelect(val);
  }
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <TouchableHighlight onPress={() => this.props.menuSelect(null)}>
            <Image source={require("../images/Close.png")} />
          </TouchableHighlight>
          <Text style={styles.option}>Choose a Campaign</Text>
        </View>
        <MenuItem
          title="Layout Campaign"
          id="layout"
          menuItemClick={this.menuSelected.bind(this)}
        />
        <MenuItem
          title="On boarding Campaign"
          id="onboarding"
          menuItemClick={this.menuSelected.bind(this)}
        />
        <MenuItem
          title="Clear Data"
          id="clear"
          menuItemClick={this.menuSelected.bind(this)}
        />
        <MenuItem
          title="Enter API Key"
          id="api"
          menuItemClick={this.menuSelected.bind(this)}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {},
  header: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  option: {
    padding: "3%",
    marginTop: "0.3%",
    backgroundColor: "white"
  }
});
