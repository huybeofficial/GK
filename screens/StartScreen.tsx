import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useState } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const StartScreen = ({ navigation }) => {

    const [click, setClick] = useState<boolean>(false)

    const loading = () => {
        setClick(true)
        setTimeout(() => {
            setClick(false)
            navigation.navigate("LoginScreen")
        }, 2000)

    }

    return (
        <View style={styles.container}>
            {click && <ActivityIndicator size={"large"} />}
            <TouchableOpacity style={styles.button} onPress={loading}>
                <View style={styles.mainContent} >
                    <Image style={styles.mainImage} source={require('../assets/Vector.png')} />

                    <Text style={styles.mainText}>
                        FOODU
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25
    },
    mainContent: {
        alignItems: "center"
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
        borderColor: "#eee",
        borderRadius: 5,
        borderWidth: 2,
        alignItems: "center",
        marginTop: 10
    }
})
export default StartScreen
