import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../../screens/Home"
import { screens } from "../../utils"

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={ screens.tab.home.homeScreen }
                component={ HomeScreen }
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
