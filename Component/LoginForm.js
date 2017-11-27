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

export default class LoginForm extends React.Component {
  login() {
    console.log("Login button clicked");
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} editable />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} secureTextEntry editable />
          <Text style={styles.secondaryLabel}>Forgot Password?</Text>
        </View>
        <View style={styles.inputGroup}>
        <Button
            title="Login"
            style={{ backgroundColor: "#27AE60" }}
            click={() => this.login()}
          />
          <Text style={[styles.secondaryLabel, { textAlign: "center", paddingVertical: "3%"}]}>
            or
          </Text>
          <Button
            title="Login with Facebook"
            style={{ backgroundColor: "#1D5196" }}
            click={() => this.login()}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={[styles.secondaryLabel, { textAlign: "center" }]}>
            Sign up for a new account
          </Text>
        </View>
        <View style={styles.inputGroup}>
          <Button
            title="Skip and Continue  ➔"
            style={{ backgroundColor: "#AAA" }}
            click={() => this.login()}
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
    marginHorizontal: "10%",
    marginVertical: "5%",

  },
  inputGroup: {
    marginVertical: "4%"
  },
  label: {
    fontSize: 12,
    color: "#5F5959"
  },
  secondaryLabel: {
    fontSize: 10,
    color: "#B37575"
  },
  input: {
    borderRadius: 2,
    height: 30,
    backgroundColor: "#ECE7E7"
  }
});
