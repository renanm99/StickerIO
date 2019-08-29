import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class MainPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Top}>Sticker I.O</Text>
        <TextInput style={styles.loginInput} placeholder="Usuario" />
        <TextInput style={styles.loginInput} placeholder="Senha" />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text>Pedir código</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginBottom: 80
  },
  container: {
    flex: 1,
    backgroundColor: "#3f2369",
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
    justifyContent: "center",
  },
  btn: {
    width: "35%",
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
