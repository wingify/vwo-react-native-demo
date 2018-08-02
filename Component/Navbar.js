import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import NavigationBar from 'react-native-navbar';

export default class Navbar extends React.Component {

  render() {
    const item = this.props.item
    return (
        <NavigationBar
          tintColor = '#DEDEDE'
          title={{title: this.props.title}}
          leftButton={
            <TouchableOpacity
              onPress={() => this.props.menuClick()}>
               <Image style={styles.barButton} source={require("../images/Menu.png")} />
            </TouchableOpacity>
          }
          rightButton={
            <TouchableOpacity
              onPress={() => this.props.reload()}>
               <Image style={styles.barButton} source={require("../images/Reload.png")} />
            </TouchableOpacity>
          }
        />
    );
  }
}

const styles = StyleSheet.create({
  barButton: {
        // width: '100%', 
    // height: 70, 
    // position: 'absolute',
    // bottom: 0,
  }
});
