import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    LoginScreen,
    RegisterScreen
} from "../../screens/Auth"
import { screens } from "../../utils";

const Stack = createNativeStackNavigator()

export function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={ screens.auth.loginScreen }
                component={ LoginScreen }
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name={ screens.auth.registerScreen }
                component={ RegisterScreen }
                options={{ title: '' }}
            />
        </Stack.Navigator>
    )
}