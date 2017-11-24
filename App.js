import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Shopping from "./View/Shopping.js";
import NavBar from "./Component/NavBar.js";
import Menu from "./View/Menu.js";

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
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  showView(id) {
    //id == null => just close menu
    this.setState({
      showMenu: false //Hide menu
    });
    console.log("Show view " + id);
  }

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.app}>
          <NavBar menuClick={this.showMenu.bind(this)} style={styles.nav} />
          <View style={styles.container}>
            <Shopping />
          </View>
        </View>
        {this.state.showMenu && (
          <View style={styles.floatView}>
            <Menu menuSelect={this.showView.bind(this)} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
  app: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  floatView: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  nav: {
    flex: 1
  },
  container: {
    flex: 8
  }
});
