import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Text,
  AsyncStorage,
  Alert,
  Image,
  TouchableHighlight
} from "react-native";

import Layout from "./View/Layout.js";
import Housing from "./View/Housing.js";
import Menu from "./View/Menu.js";
import VWOAPIView from "./Component/VWOAPIView.js";
import SideMenu from "react-native-side-menu";
import VWO from "vwo-react-native";
import menuItems from "./data/MenuItems.json";
import Navbar from "./Component/Navbar.js";

const window = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    showMenu: false,
    view: "layout",
    layout: "list",
    apiKey: ""
  };


  actionReload = async () => {
    if (this.state.view == "layout") {
      this.phoneList.sortPhoneList();
    }
  }

  contentView() {
    switch (this.state.view) {
      case "layout":
        return (
          <View style={{ flex: 1 }}>
            <Layout ref={child => {this.phoneList = child}}/>
          </View>
        );
      case "variable":
        return (
          <View style={{ flex: 1 }}>
            <Housing />
          </View>
        );
      case "api":
        return (
          <View style={{ flex: 1 }}>
            <VWOAPIView />
          </View>
        );
    }
  }

  titleForNavBar() {
    const currentKey = this.state.view;
    return menuItems.filter(function(item) {
      return item.key == currentKey;
    })[0].title;
  }


  render() {
    const menu = (
      <Menu
        data={menuItems}
        style={styles.menu}
        menuClose={() => this.setState({ showMenu: false })}
        menuSelect={newView =>
          this.setState({ showMenu: false, view: newView })
        }
      />
    );

    return (
      <SideMenu
        isOpen={this.state.showMenu}
        style={styles.app}
        menu={menu}
        openMenuOffset={window.width * 0.75}
      >
        <Navbar
          title={this.titleForNavBar()}
          reload={this.actionReload.bind(this)}
          menuClick={() => this.setState({ showMenu: !this.state.showMenu })}
        />
        <View style={styles.container}>{this.contentView()}</View>
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
    flex: 9
  }
});
