
import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {

    const [email, setEmail] = useState<string>("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Forgot Password
            </Text>
            <Text style={styles.smlTitle}>
                Please enter your registered email or mobile to reset your Password.
            </Text>
            <Text style={styles.smlTitle}>
                Email/Mobile number
            </Text>
            <TextInput value={email} onChangeText={(value) => {
                setEmail(value)
            }} placeholder="" style={styles.input} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmailValidateScreen')}>
                <Text style={styles.titleLogin}>Recover Password</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20
    },
    title: {
        color: "rgba(0, 0, 0, 0.89)",
        fontSize: 26,
        fontWeight: "700",
        marginTop: 35,
    },
    smlTitle: {
        color: "rgba(0, 0, 0, 0.26)",
        fontSize: 14,
        fontWeight: "700",
        marginTop: 18
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 20,
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

export default ForgotPasswordScreen;
