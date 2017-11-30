import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import PhoneView from "../Component/PhoneView";
import PhoneDetailView from "../Component/PhoneDetails";
import phoneList from "../data/Phones";

export default class Layout extends React.Component {
  state = {
    showDetailsView: null
  };
  itemTapped(key) {
    this.setState({ showDetailsView: key });
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
          key={this.props.type == "list" ? 1 : 2}
          style={styles.half}
          data={phoneList}
          numColumns={this.props.type == "list" ? 1 : 2}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#CED0CE" }} />
          )}
          renderItem={({ item }) => (
            <PhoneView
              item={item}
              type={this.props.type}
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
