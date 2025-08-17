import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WalletScreen, AmountRechargeScreen, RechargeWallet } from "../../screens/Wallet"
import { screens } from "../../utils"

const Stack = createNativeStackNavigator();

export const WalletStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={ screens.tab.wallet.walletScreen }
                component={ WalletScreen }
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name={ screens.tab.wallet.rechargeWallet }
                component={ RechargeWallet }
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name={ screens.tab.wallet.amountRechargeScreen }
                component={ AmountRechargeScreen }
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
