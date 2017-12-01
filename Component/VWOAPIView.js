import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Clipboard,
  AsyncStorage
} from "react-native";
import Button from "../Component/Button";
import VWO from "vwo-react-native";

// Stored only if VWO is launched successfully
global.apiStorageKey = "VWOAPIKey";

export default class VWOAPIView extends React.Component {
  state = {
    apiKey: "", // set only if it is available in peristant storage
    textInput: ""
  };

  componentWillMount() {
    this.readFromClipboard();
    this.loadAPIKeyFromPersistantStorage();
  }

  readFromClipboard = async () => {
    const clipboardString = await Clipboard.getString();
    const splitKey = clipboardString.split("-");
    if (splitKey.length == 2 && splitKey[0].length == 32) {
      this.setState({ textInput: clipboardString });
    }
  };

  loadAPIKeyFromPersistantStorage = async () => {
    try {
      const apiKey = await AsyncStorage.getItem(apiStorageKey);
      if (apiKey !== null) {
        this.setState({ apiKey });
      }
    } catch (e) {
      console.error("Failed to load API Key.");
    }
  };

  launchVWO(apiKey) {
    if (apiKey == "") {
      alert("Please enter valid apiKey");
      return;
    }
    var that = this;
    VWO.launchWithCallback(apiKey, function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log("VWO launched with apiKey " + apiKey);
        that.storeAPIKey(apiKey);
        that.setState({ apiKey });
      }
    });
  }

  storeAPIKey = async key => {
    try {
      await AsyncStorage.setItem(apiStorageKey, key);
    } catch (e) {
      console.error("Failed to save key. " + e);
    }
  };

  render() {
    if (this.state.apiKey) {
      return (
        <View style={styles.container}>
          <Text>VWO launched</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>VWO API Key</Text>
            <TextInput
              defaultValue={this.state.textInput}
              style={styles.input}
              onChangeText={text => this.setState({ textInput: text })}
              editable
            />
          </View>
          <View style={styles.inputGroup}>
            <Button
              title="Launch VWO"
              color="#27AE60"
              click={() => this.launchVWO(this.state.textInput)}
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
    backgroundColor: "#fff"
  },
  form: {
    marginHorizontal: "20%"
  },
  inputGroup: {
    marginVertical: "2%"
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
