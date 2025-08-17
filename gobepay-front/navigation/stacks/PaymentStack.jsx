import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { PaymentScreen } from "../../screens/Payment"
import { screens } from "../../utils"

const Stack = createNativeStackNavigator();

export const PaymentStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={ screens.tab.payments.paymentScreen }
                component={ PaymentScreen }
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
