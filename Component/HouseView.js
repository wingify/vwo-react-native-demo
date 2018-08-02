import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
const window = Dimensions.get("window");

export default class HouseView extends React.Component {
  state = {
      showDetailsView: false,
    };

  itemTapped() {
    Alert.alert(
      'Use our House Agent!',
      'You can use our in-house agents who can help you find a suitable house.',
      [
        {text: 'Upgrade with $6', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  render() {
    const item = this.props.item
    return (
      <TouchableOpacity style={styles.container} onPress={this.itemTapped}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <ImageBackground style={styles.backgroundImage} source={item.image}>
                <View style={styles.blackHighlight}> 
                  <Text style={styles.houseprice}> ${item.price} </Text>
                  <Text style={styles.housename}> ${item.name} </Text>
                  <Text style={styles.housetype}> Residential </Text>
                </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: "2%",
    paddingHorizontal: "5%"
  },
  blackHighlight: {
    width: '100%', 
    height: 70, 
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(12, 12, 12, 0.5)'
  },
  backgroundImage: { width: window.width * 0.4, height: window.width * 0.4 },
  houseprice: {
    color: "#FFFFFF",
    fontSize: 20
  },
  housename: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  housetype: {
    color: "#FFFFFF",
    fontSize: 14
  }
});
