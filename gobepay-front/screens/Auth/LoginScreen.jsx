import { Text, View } from "react-native"
import { Layout } from "../../layouts"
import { LoginForm } from '../../components/Auth'

export const LoginScreen = () => {

    return (
        <Layout.Auth>
            <LoginForm />
        </Layout.Auth>
    )
    
}