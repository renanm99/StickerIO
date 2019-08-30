import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

import Colors from "../config/Colors";
export default class Cod extends Component {
  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.8 }}
        colors={[Colors.Light, "#000"]}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <TextInput style={styles.loginInput} placeholder="Email" />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("MainPage")}
            style={styles.btn}
          >
            <Text>Enviar email</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: Colors.Light,
    alignItems: "center",
    justifyContent: "center",
    padding: 50
  },
  loginInput: {
    width: "100%",
    backgroundColor: "#fff",
    fontSize: 15,
    padding: 10,
    //textAlign: 'center',
    marginBottom: 20,
    borderRadius: 10
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: "1%",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  btn: {
    width: "40%",
    height: 40,
    padding: 8,
    backgroundColor: "#fff",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 10
  }
});
