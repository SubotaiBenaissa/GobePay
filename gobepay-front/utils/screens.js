export const auth = {
    root: "AuthRoot",
    loginScreen: "LoginScreen",
    registerScreen: "RegisterScreen"
}

export const home = {
    root: "HomeRoot",
    homeScreen: "HomeScreen"
}

export const payments = {
    root: "PaymentsRoot",
    paymentScreen: "PaymentScreen"
}

const wallet = {
    root: "WalletRoot",
    walletScreen: "WalletScreen",
    amountRechargeScreen: "AmountRechargeScreen",
    rechargeWallet: "RechargeWallet"
}

const account = {
    root: "AccountRoot",
    accountScreen: "AccountScreen",
    changeFullNameScreen: "ChangeFullNameScreen",
    changeEmailScreen: "ChangeEmailScreen",
    changePasswordScreen: "ChangePasswordScreen"
}

const global = {
    root: "GlobalRoot",
    sendMoneyUserScreen: "SendMoneyUserScreen"
}

export const screens = {
    auth,
    account,
    global,
    tab: {
        root: "BottomTabRoot",
        home,
        payments,
        wallet
    }
}