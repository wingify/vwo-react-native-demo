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

export default class LoginForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      showDetailsView: null
    };
  }

  loginCompletedView(text) {
    return (
      <View style={styles.loginCompletedView}>
        <Text>{text}</Text>
      </View>
    );
  }

  loginAction(info) {
    this.setState({ showDetailsView: info})
    VWO.trackConversion("landingPage");
  }

  render() {
    if (this.state.showDetailsView) {
      return this.loginCompletedView(this.state.showDetailsView);
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.form} showsVerticalScrollIndicator={false}>
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
              color="#27AE60"
              click={() => this.loginAction("UserLoggedIn")}
            />

            {this.props.socialMedia && (
              <Text
                style={[
                  styles.secondaryLabel,
                  { textAlign: "center", paddingVertical: "3%" }
                ]}
              >
                or
              </Text>
            )}
            {this.props.socialMedia && (
              <Button
                title="Login with Facebook"
                color="#1D5196"
                click={() => this.loginAction("Logged in With FaceBook")}
              />
            )}
          </View>
          <View style={styles.inputGroup}>
            <Text style={[styles.secondaryLabel, { textAlign: "center" }]}>
              Sign up for a new account
            </Text>
          </View>
          {this.props.skip && (
            <View style={styles.inputGroup}>
              <Button
                title="Skip and Continue  ➔"
                color="#AAA"
                click={() => this.loginAction("Logged skipped")}
              />
            </View>
          )}
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
  secondaryLabel: {
    fontSize: 10,
    color: "#B37575"
  },
  input: {
    borderRadius: 2,
    height: 30,
    backgroundColor: "#ECE7E7"
  },
  loginCompletedView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
