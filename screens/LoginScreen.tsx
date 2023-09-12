import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator, Button } from 'react-native';
import { useState } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")




    return (
        <View style={styles.container}>
            <View style={styles.mainContent} >
                <Image style={styles.mainImage} source={require('../assets/Logo.png')} />

                <Text style={styles.mainText}>
                    FOODU
                </Text>
            </View>


            <View style={styles.loginWith}>
                <View style={styles.loginWith}>
                    <Image style={styles.imageLogin} source={require('../assets/facebook.png')} />
                    <Text style={styles.textInput}>Facebook</Text>
                    <Image style={styles.imageLogin} source={require('../assets/google.png')} />
                    <Text style={styles.textInput}>Google</Text>

                </View>
            </View>
            <View style={styles.loginWith}>
                <Text style={styles.__}>-</Text>
                <View style={styles.or}>
                    <Text>OR</Text>
                </View>
                <Text style={styles.__}>-</Text>
            </View>
            <View style={styles.content}>

                <Text style={styles.label}>EMAIL ID</Text>
                <TextInput value={email} onChangeText={(value) => {
                    setEmail(value)
                }} placeholder="Enter Email" style={styles.input} />
                <Text style={styles.label}>PASSWORD</Text>
                <TextInput value={password} onChangeText={(value) => {
                    setPassword(value)
                }} placeholder="Enter Password" secureTextEntry style={styles.input} />
            </View>
            <TouchableOpacity onPress={() => {
                navigation.navigate("ForgotPasswordScreen")
            }}>
                <Text style={styles.forgotPass}>forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 25 }}>Login</Text>
            </TouchableOpacity>
            <View style={styles.another}>
                <Text style={styles.another}> Dont Have An Account?</Text>
                <TouchableOpacity onPress={() => {
                    navigation.replace("RegisterScreen")
                }}>
                    <Text style={styles.signUpLabel} >Register Now</Text>
                </TouchableOpacity>
            </View>
        </View >
    );

}



const styles = StyleSheet.create({
    signUpLabel: {
        margin: 10,
        color: "red",
        fontSize: 17,
        fontWeight: "bold"
    },
    another: {
        marginTop: 10,
        flexDirection: "row",
        fontSize: 17
    },
    forgotPass: {
        color: "red",
        fontWeight: "bold"
    },
    content: {
        alignItems: "flex-start",
        width: "100%",
        marginBottom: 20
    },
    input: {
        borderBottomWidth: 1,
        borderColor: "#bbb",
        padding: 5,
        borderRadius: 5,
        width: "100%"
    },
    label: {
        marginVertical: 10,
        color: "gray",
        fontWeight: "bold"
    },
    __: {
        color: "gray",
    },
    or: {
        paddingHorizontal: 10

    },
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25
    },
    mainContent: {
        alignItems: "center"
    },
    textInput: {
        fontSize: 20,
        marginTop: 5
    },
    imageLogin: {

    },
    loginWith: {
        flexDirection: "row",
        margin: 5
    },

    mainImage: {
        width: 150,
        height: 150
    },
    mainText: {
        fontSize: 22,
        fontWeight: "900",
        marginVertical: 20,
        color: "#5f1ad0"
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
    }
})
export default LoginScreen
