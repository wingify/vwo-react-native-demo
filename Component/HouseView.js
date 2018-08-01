import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  FlatList,
  TouchableHighlight
} from "react-native";

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
      <TouchableHighlight style={styles.container} onPress={this.itemTapped}>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image style={styles.phoneImage} source={item.image} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // paddingVertical: "2%",
    paddingHorizontal: "5%"
  },
  imageView: {
    // backgroundColor: "#eee",
    // marginRight: "10%"
  },
  phoneImage: { width: 100, height: 100 }
});
