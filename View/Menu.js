import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";

class MenuItem extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.menuItemClick(this.props.id)}
      >
        <Text style={styles.option}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

export default class Menu extends React.Component {
  menuSelected(val) {
    this.props.menuSelect(val);
  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.menuClose()}>
            <Image source={require("../images/Close.png")} />
          </TouchableOpacity>
          <Text style={styles.title}>Choose a Campaign</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {this.props.data.map(item => (
            <MenuItem
              key={item.key}
              title={item.title}
              id={item.key}
              menuItemClick={this.menuSelected.bind(this)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fafafa"
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
