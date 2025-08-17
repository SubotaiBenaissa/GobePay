import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AccountStack, AuthStack, GlobalStack } from "./stacks"
import { screens } from '../utils'
import { BottomTabNavigation } from "./BottomTabNavigation";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {

    const user = "usuario"

    if (!user) {
        return (
            <Stack.Navigator>
                <Stack.Screen 
                    name={ screens.auth.root }
                    component={ AuthStack }
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={ screens.tab.root }
                component={ BottomTabNavigation }
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name={ screens.account.root }
                component={ AccountStack }
                options={{ headerShown: false, presentation: "modal" }}
            />
            <Stack.Screen 
                name={ screens.global.root }
                component={ GlobalStack }
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
