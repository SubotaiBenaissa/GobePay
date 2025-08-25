import { View, Text } from 'react-native'
import { Layout } from "../../layouts"
import { useNavigation } from "@react-navigation/native"
import { screens } from "../../utils"

export const LoginScreen = () => {

    const { navigate } = useNavigation();

    return (
        <Layout.Auth>
            <Text onPress={ () => navigate(screens.auth.registerScreen) }>LoginScreen</Text>
        </Layout.Auth>
    )
    
}