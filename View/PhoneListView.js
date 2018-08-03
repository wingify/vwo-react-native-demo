import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import PhoneView from "../Component/PhoneView";
import PhoneDetailView from "../Component/PhoneDetails";
import phoneList from "../data/PhoneList";
import VWO from "vwo-react-native";

export default class PhoneListView extends React.Component {
  state = {
    showDetailsView: null,
    phones: phoneList
  };

  sortPhoneList = async () => {
    var newList = phoneList
    const variation = await VWO.variationNameForTestKey("sorting")
    if (variation == "Sort-Alphabetically") {
      newList.sort(function(a,b) {
        return ((a.name > b.name) ? 0 : -1 );
      });
    } else if (variation == "Sort-By-Price") {
      newList.sort(function(a,b) {
        return ((a.price > b.price) ? 0 : -1 );
      });      
    }
    this.setState({ phones: newList })
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
          extraData={this.state}
          style={styles.half}
          data={this.state.phones}
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
