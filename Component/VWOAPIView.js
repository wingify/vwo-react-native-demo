import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight
} from "react-native";
import Button from "../Component/Button";
import VWO from "vwo-react-native";

export default class VWOAPIView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      api: ""
    };
  }

  launchVWO(key) {
    console.log("VWO launching with key " + key);
    if (key == "") {
      alert("Please enter vlaid key");
      return;
    }
    VWO.launchWithCallback(key, function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log("VWO launched with key " + key);
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>VWO API Key</Text>
            <TextInput
              style={styles.input}
              placeHolder="VWO API key"
              onChangeText={text => this.setState({ api: text })}
              editable
            />
          </View>
          <View style={styles.inputGroup}>
            <Button
              title="Submit"
              color="#27AE60"
              click={() => this.launchVWO(this.state.api)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "#fff"
  },
  form: {
    marginHorizontal: "20%",
    marginVertical: "5%"
  },
  inputGroup: {
    marginVertical: "4%"
  },
  label: {
    fontSize: 12,
    color: "#5F5959"
  },
  input: {
    borderRadius: 2,
    height: 30,
    backgroundColor: "#ECE7E7"
  }
});
