import React, { Component } from "react";
import Api from "../services/api";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

import Colors from "../config/Colors";

export default class ValidarCadastro extends Component {
  state = {
    cod: "",
    email: ""
  };

  ValidarCodigo = () => {
    Api.get("/validar/token/" + this.state.cod)
      .then(response => {
        if (response.data.isAvailable) {   
          this.props.navigation.navigate("Cadastro", {email:response.data.email});
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1.8 }}
        colors={[Colors.Light, "#000"]}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.Top}>Validar código</Text>
          <TextInput
            onChangeText={value => this.setState({cod:value})}
            autoCapitalize="characters"
            style={styles.loginInput}
            placeholder="Código"
          />
          <TouchableOpacity onPress={this.ValidarCodigo} style={styles.btn}>
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
    borderRadius: 10,
    textTransform: "uppercase"
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
