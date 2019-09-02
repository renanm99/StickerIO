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

export default class EsqueciSenha extends Component {
    state = {
        email: ""
    };
    EnviarEmail = () => {
        if (!(this.state.email == "")) {
            this.props.navigation.navigate("MainPage");
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
                    <Text style={styles.Top}>Esqueci minha senha</Text>
                    <TextInput
                        onChange={value => this.setState({ email: value })}
                        style={styles.loginInput}
                        placeholder="Email"
                    />
                    <TouchableOpacity
                        onPress={this.EnviarEmail}
                        style={styles.btn}
                    >
                        <Text>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    Top: {
        fontSize: 50,
        color: "#fff",
        textAlign: "center",
        marginBottom: 55
    },
    container: {
        flex: 0.84,
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
    },
    codText: {
        fontSize: 16,
        textDecorationLine: "underline",
        color: "#fff",
        marginTop: 30
    }
});

//export default EsqueciSenha;
