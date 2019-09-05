import React, { Component } from "react";
import Api from '../services/api';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

import Colors from "../config/Colors";
export default class EnviarCod extends Component {
  state = {
    name: "",
    email: ""
  };

  enviarEmailCod = () => {
    if (true === true) {
      const newCod = {
          name:this.state.name,
          email:this.state.email
      };
      Api.post("/teste/email",newCod)
        .then(response => {
          if (response.data.isAvailable) {
            this.props.navigation.navigate("Cadastro", {
              email: response.data.email
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
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
          <Text style={styles.Top}>Solicitar código</Text>
          <TextInput
            onChangeText={value => this.setState({ name: value })}
            style={styles.loginInput}
            placeholder="Seu nome"
          />
          <TextInput
            onChangeText={value => this.setState({ email: value })}
            style={styles.loginInput}
            placeholder="Email"
          />
          <TouchableOpacity onPress={this.enviarEmailCod} style={styles.btn}>
            <Text>Enviar email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingBottom: 40 }}
            onPress={() => this.props.navigation.navigate("ValidarCod")}
          >
            <Text style={styles.codText}>Já possuo código</Text>
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
    flex: 1,
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
    width: "40%",
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
    color: "#fff",
    marginTop: 30
  }
});
