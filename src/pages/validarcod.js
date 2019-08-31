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

const a = ({ navigation }) => {
  return this.props.navigation.navigate("MainPage");
};

export default class Cadastro extends Component {
  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.8 }}
        colors={[Colors.Light, "#000"]}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.Top}>Solicitar código</Text>
          <TextInput style={styles.loginInput} placeholder="Código" />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("MainPage");
            }}
            style={styles.btn}
          >
            <Text>Validar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  Top: {
    fontSize: 50,
    color: "#FFF",
    // flex: 1,
    // alignItems:'flex-start',
    //marginTop: 20,
    marginBottom: 55,
    textAlign: "center"
  },
  container: {
    flex: 0.79,
    //backgroundColor: Colors.Light,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 50,
    paddingRight: 50
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
    width: "30%",
    height: 40,
    padding: 8,
    backgroundColor: "#fff",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 10
  },
  codText: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#000",
    marginTop: 30
  }
});
