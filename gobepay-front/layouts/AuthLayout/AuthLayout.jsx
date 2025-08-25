import { Image, SafeAreaView, StatusBar, View } from "react-native";
import logo from "../../assets/paypal-logo.png"
import { styles } from "./AuthLayout.styles.js"

export const AuthLayout = ({ children }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />

            <SafeAreaView style={ styles.container }>
                <View style={ styles.logoContainer } >
                    <Image source={ logo } style={ styles.logo }/>
                </View>
                { children }
            </SafeAreaView>
        </>
    )
}
