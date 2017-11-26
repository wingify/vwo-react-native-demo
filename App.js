import React from "react";
import { StyleSheet, View, StatusBar, Dimensions } from "react-native";
import Shopping from "./View/Shopping.js";
import Login from "./View/Login.js";
import NavBar from "./Component/NavBar.js";
import Menu from "./View/Menu.js";

import SideMenu from "react-native-side-menu";
const window = Dimensions.get("window");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      view: "layout"
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  actionMenuTapped() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  showView(newView) {
    var newState = { showMenu: false };
    if (newView) {
      newState.view = newView;
    }
    this.setState(newState);
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item
    });
  render() {
    let contentView = null;
    if (this.state.view == "layout") {
      contentView = <Shopping />;
    } else if (this.state.view == "onboarding") {
      contentView = <Login />;
    }

    const menu = (
      <Menu style={styles.menu} menuSelect={this.showView.bind(this)} />
    );
    return (
      <SideMenu
        isOpen={this.state.showMenu}
        style={styles.app}
        menu={menu}
        openMenuOffset={window.width / 3}
      >
        <NavBar
          menuClick={this.actionMenuTapped.bind(this)}
          style={styles.nav}
        />
        <View style={styles.container}>{contentView}</View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: "column"
  },
  nav: {
    flex: 1
  },
  container: {
    flex: 8
  }
});
