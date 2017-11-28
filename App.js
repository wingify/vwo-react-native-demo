import React from "react";
import { StyleSheet, View, StatusBar, Dimensions } from "react-native";
import Layout from "./View/Layout.js";
import NavBar from "./Component/NavBar.js";
import Menu from "./View/Menu.js";
import LoginForm from "./Component/LoginForm.js";
import VWOAPIView from "./Component/VWOAPIView.js";
import SideMenu from "react-native-side-menu";
const window = Dimensions.get("window");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      view: "api",
      leftLayout: "list",
      rightLayout: "list"
    };
  }

  menuButtonTapped() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  actionReload() {
    console.log("Reload");
    if (this.state.view == "layout") {
      this.setState({
        rightLayout: "grid"
      });
    }
  }

  contentView() {
    switch (this.state.view) {
      case 'layout':
      return (
        <View style={styles.splitview}>
          <Layout type={this.state.leftLayout} />
          <Layout type={this.state.rightLayout} />
        </View>
      );
      case 'onboarding':
      return (
        <View style={styles.splitview}>
          <LoginForm />
          <LoginForm skip={true} socialMedia />
        </View>
      );
      case 'api':
      return (
        <View style={{flex: 1}}>
          <VWOAPIView />
        </View>
      );
    }
  }
  
  render() {
    const menu = (
      <Menu
        style={styles.menu}
        menuClose={() => this.setState({showMenu: false})}
        menuSelect={(newView) => this.setState({showMenu: false, view:newView})}
      />
    );
    return (
      <SideMenu
        isOpen={this.state.showMenu}
        style={styles.app}
        menu={menu}
        openMenuOffset={window.width / 3}
      >
        <NavBar
          reload={this.actionReload.bind(this)}
          menuClick={this.menuButtonTapped.bind(this)}
          style={styles.nav}
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
    flex: 8
  },
  splitview: {
    flex: 1,
    flexDirection: "row"
  }
});
