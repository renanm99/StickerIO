import React, { Component } from "react";
import api from "../services/api";

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from "react-native";

export default class Main extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Sticker I.O"
        };
    };

    state = {
        productInfo: {},
        docs: [],
        page: 1
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({
            docs: [...this.state.docs, ...docs],
            productInfo,
            page
        });
    };

    loadMore = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>

            <TouchableOpacity style={styles.productButton} 
            onPress={() => {
                this.props.navigation.navigate('Product',{product: item});
            }}>
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.4}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#442671",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    list: {
        //padding: 16
    },
    productContainer: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 7,
        padding: 20,
        marginBottom: 20
    },
    productTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333"
    },
    productDescription: {
        fontSize: 18,
        color: "#636363",
        marginTop: 5,
        lineHeight: 24
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#7448b5",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    productButtonText: {
        fontSize: 16,
        color: "#7448b5",
        fontWeight: "bold"
    }
});
