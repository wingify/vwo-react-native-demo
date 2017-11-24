import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class NavBar extends React.Component {
  render() {
    return (        
      <View style={styles.container}>
      <Image style={styles.menu} source={require('../images/Menu.png')}/>
      <Text style={styles.control}>Control</Text>
      <Text style={styles.title}>Layout Campaign</Text>
      <Text style={styles.variation}>Variation</Text>
      <Image style={styles.menu} source={require('../images/Reload.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "row",
    backgroundColor: "#090C21",
    alignItems: "center",
    justifyContent: "space-between"
  },
  menu: {},
  control: {
    color: '#EB5757'
  },
  variation: {
    color: '#27AE60'
  },
  title: {
    color: 'white'
  },
  reload:{},
});


export default NavBar;
