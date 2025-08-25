import { View, Text } from 'react-native'
import { Layout } from '../../layouts'
import { RegisterForm } from "../../components/Auth"

export const RegisterScreen = () => {

    return (
        <Layout.Auth>
            <RegisterForm />
        </Layout.Auth>
    )
    
}