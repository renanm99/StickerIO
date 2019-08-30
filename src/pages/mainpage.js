import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

import Colors from "../config/Colors";

export default class MainPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };
  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.8 }}
        colors={[Colors.Dark, "#000"]}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.Top}>Sticker I.O</Text>
          <TextInput style={styles.loginInput} placeholder="Email / Usuario" />
          <TextInput style={styles.loginInput} placeholder="Senha" />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <Text>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Cod")}
              style={styles.btn}
            >
              <Text>Solicitar código</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  Top: {
    fontSize: 70,
    color: "#888888",
    // flex: 1,
    // alignItems:'flex-start',
    marginTop: 50,
    marginBottom: 55
  },
  container: {
    flex: 1,
    //backgroundColor: Colors.Dark,
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
    marginTop: 20,
    borderRadius: 10
  },
  btnContainer: {
    flex: 1,
    width: "100%",
    height: "1%",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  btn: {
    width: "40%",
    height: 40,
    padding: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 15
  }
});
