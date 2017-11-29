import React from "react";
import { StyleSheet, View, StatusBar, Dimensions } from "react-native";
import Layout from "./View/Layout.js";
import NavBar from "./Component/NavBar.js";
import Menu from "./View/Menu.js";
import LoginForm from "./Component/LoginForm.js";
import VWOAPIView from "./Component/VWOAPIView.js";
import SideMenu from "react-native-side-menu";
import VWO from "vwo-react-native";
import menuItems from './data/MenuItems.json';

const window = Dimensions.get("window");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      view: "layout",
      layout: "list",
        skip: false,
        socialMedia: false
    };
  }

  menuButtonTapped() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  actionReload() {
    console.log("Reload");
    var that = this;
    if (this.state.view == "layout") {
      console.log("Reload layout");
      VWO.variationForKeyWithDefaultValue("layout", "list", function(
        error,
        variation
      ) {
        if (error) {
          console.log(error);
        } else {
          that.setState({ layout: variation });
        }
      });
    }
    if (this.state.view == "onboarding") {
      console.log("Reload onboarding");
      VWO.variationForKeyWithDefaultValue("skip", false, function(
        error,
        variation
      ) {
        if (error) {
          console.log(error);
        } else {
          console.log("Skip:"  + variation);
          that.setState({ skip: variation });
        }
      });
      VWO.variationForKeyWithDefaultValue("socialMedia", false, function(
        error,
        variation
      ) {
        if (error) {
          console.log(error);
        } else {
          console.log("Social Media: " + variation);
          that.setState({ socialMedia: variation });
        }
      });
    }
  }

  contentView() {
    switch (this.state.view) {
      case "layout":
        return (
          <View style={styles.splitview}>
            <Layout type="list" />
            <Layout type={this.state.layout} />
          </View>
        );
      case "onboarding":
        return (
          <View style={styles.splitview}>
            <LoginForm />
            <LoginForm
              skip={this.state.skip}
              socialMedia={this.state.socialMedia}
            />
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
        openMenuOffset={window.width / 3}
      >
        <NavBar
          title={this.titleForNavBar()}
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
    flex: 7
  },
  splitview: {
    flex: 1,
    flexDirection: "row"
  }
});
