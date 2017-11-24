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
      <View style={styles.main}>
        <ScrollView style={styles.scroll}>
          <View style={styles.header}>
            <TouchableHighlight onPress={() => this.props.menuSelect(null)}>
              <Image source={require("../images/Close.png")} />
            </TouchableHighlight>
            <Text style={styles.title}>Choose a Campaign</Text>
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
        <TouchableHighlight
          style={styles.sideView}
          onPress={() => this.props.menuSelect(null)}
        >
          <View />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row"
  },
  scroll: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  sideView: {
    flex: 2,
    backgroundColor: "rgba(20, 24, 22, 0.8)"
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: "5%",
    paddingLeft: "3%"
  },
  title: {
    fontWeight: "bold",
    marginLeft: "5%"
  },
  option: {
    paddingLeft: "5%",
    marginTop: "0.3%",
    paddingVertical: "5%"
  }
});
