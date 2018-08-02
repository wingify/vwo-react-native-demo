import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import PhoneView from "../Component/PhoneView";
import PhoneDetailView from "../Component/PhoneDetails";
import phoneList from "../data/Phones";
import VWO from "vwo-react-native";

export default class Layout extends React.Component {
  state = {
    showDetailsView: null
  };
  
  sortPhoneList() {
    //Fetch variation from VWO
    const variation = "Control"
    if (variation == "Control") {
      phoneList.sort(function(a,b) {
          return (a.name - b.name);
      });
    } else (variation == "Control") {
      phoneList.sort(function(a,b) {
        return ((a.price < b.price) ? -1 : ((a.price > b.price) ? 1 : 0));
      });      
    }
  }

  itemTapped(key) {
    var selectedObject = phoneList.filter(function (el) {
      return el.key === key;
    })[0];
    console.log("Item tapped " + key + " " + selectedObject.price);
    this.setState({ showDetailsView: key });
    VWO.trackConversionWithValue("productView", selectedObject.price);
  }

  phoneDetailView(key) {
    key = this.state.showDetailsView;
    data = phoneList.filter(function(item) {
      return item.key == key;
    })[0];
    return (
      <PhoneDetailView
        item={data}
        style={styles.container}
        onClose={() => this.setState({ showDetailsView: null })}
      />
    );
  }

  render() {
    if (this.state.showDetailsView) {
      return this.phoneDetailView(this.state.showDetailsView);
    }
    return (
      <View style={styles.container}>
        <FlatList
          key="1"
          style={styles.half}
          data={phoneList}
          numColumns="1"
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#CED0CE" }} />
          )}
          renderItem={({ item }) => (
            <PhoneView
              item={item}
              tapped={this.itemTapped.bind(this)}
              />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  half: { flex: 1, borderWidth: StyleSheet.hairlineWidth }
});
