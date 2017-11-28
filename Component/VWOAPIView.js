import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Clipboard
} from "react-native";
import Button from "../Component/Button";
import VWO from "vwo-react-native";

export default class VWOAPIView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: "",
    };
    this.readFromClipboard();
  }

  readFromClipboard = async () => {
    const clipboardString = await Clipboard.getString();
    this.setState({ api: clipboardString });
  };

  launchVWO(key) {
    if (key == "") {
      alert("Please enter valid key");
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
              defaultValue={this.state.api}
              style={styles.input}
              placeHolder="VWO API key"
              onChangeText={text => this.setState({ api: text })}
              editable
            />
          </View>
          <View style={styles.inputGroup}>
            <Button
              defaultValue=""
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
    backgroundColor: "#fff",
  },
  form: {
    marginHorizontal: "20%",
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
