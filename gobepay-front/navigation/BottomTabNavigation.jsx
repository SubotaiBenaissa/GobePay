import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "@rneui/themed"
import { HomeStack, PaymentStack, WalletStack } from "./stacks"
import { screens } from "../utils"

const Tab = createBottomTabNavigator()

export const BottomTabNavigation = () => {

    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarInactiveTintColor: "#646464",
                tabBarActiveTintColor: "#003087",
                tabBarIcon: ({ color, size }) => screenIcon(route, color, size)
        })}>
            <Tab.Screen 
                name={ screens.tab.home.root }
                component={ HomeStack }
                options={{ title: "Inicio" }}
            />
            <Tab.Screen 
                name={ screens.tab.payments.root }
                component={ PaymentStack }
                options={{ title: "Pagos" }}
            />
            <Tab.Screen 
                name={ screens.tab.wallet.root }
                component={ WalletStack }
                options={{ title: "Cartera" }}
            />
        </Tab.Navigator>
    )

}

function screenIcon(route, color, size) {
    let iconName = "home"
    
    switch(route.name){
        case screens.tab.home.root:
            iconName = "home"
            break;
        case screens.tab.payments.root:
            iconName = "dollar"
            break;
        case screens.tab.wallet.root:
            iconName = "money"
            break;
        default:
            iconName = ""
    }

    return <Icon type="font-awesome" name={ iconName } color={ color } size={ size } />
}
