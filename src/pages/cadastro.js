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

export default class Cadastro extends Component {
    state = {
        user: "",
        password: "",
        password2: ""
    };
    teste = () => {
        const { user, password, password2 } = this.state;
        if (password != "" && password.length > 5) {
            if (!password.includes(" ")) {
                if (password === password2) {
                    this.props.navigation.navigate("MainPage");
                }
            }
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
                    <Text style={styles.Top}>Cadastro</Text>
                    <Text style={styles.emailText}>
                        renanoliveira2199aaaaaaaa@gmail.com
                    </Text>
                    <TextInput
                        style={styles.loginInput}
                        placeholder="Usuário"
                        onChangeText={value => this.setState({ user: value })}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.loginInput}
                        placeholder="Senha"
                        onChangeText={value =>
                            this.setState({ password: value })
                        }
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.loginInput}
                        placeholder="Confirmar senha"
                        onChangeText={value =>
                            this.setState({ password2: value })
                        }
                    />
                    <TouchableOpacity onPress={this.teste} style={styles.btn}>
                        <Text>Cadastrar</Text>
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
        // marginTop: 50,
        marginBottom: 60,
        textAlign: "center"
    },
    container: {
        flex: 0.86,
        //backgroundColor: Colors.Light,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 50,
        paddingRight: 50
    },
    emailText: {
        width: "90%",
        backgroundColor: "#fff",
        fontSize: 13,
        padding: 5,
        //textAlign: 'center',
        marginBottom: 20,
        borderRadius: 5,
        textAlign: "center"
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
