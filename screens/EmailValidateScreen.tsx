
import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const EmailValidateScreen = ({ navigation }) => {

    const [email, setEmail] = useState<string>("");

    return (
        <View style={styles.container}>
            <Image
                style={styles.mainImage}
                source={require('../assets/rocket.png')}
            />
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Check you Email</Text>
            <Text style={styles.mainText}>
                we have sent you a reset password link on your registered email address
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.titleLogin}>Go to email</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainImage: {
        width: 300,
        height: 300
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25
    },
    title: {
        color: "rgba(0, 0, 0, 0.89)",
        fontSize: 26,
        fontWeight: "700",
        marginTop: 35,
    },
    mainText: {
        color: "rgba(0, 0, 0, 0.26)",
        fontSize: 14,
        fontWeight: "700",
        marginTop: 18,
        textAlign: "center",
    },
    button: {
        width: "100%",
        padding: 15,
        backgroundColor: "red",
        borderColor: "#eee",
        borderRadius: 10,
        borderWidth: 2,
        alignItems: "center",
        marginTop: 10
    },
    titleLogin: {
        fontSize: 24,
        fontWeight: "600",
        color: "#FFF",
    },
})

export default EmailValidateScreen;