const SERVER_IP = "192.168.1.101"

export const ENV = {
    SERVER_IP: SERVER_IP,
    BASE_PATH: `http://${SERVER_IP}`,
    API_URL: `http://${SERVER_IP}/api`,
    ENDPOINT: {
        AUTH: {
            REGISTER: "auth/register",
            LOGIN: "auth/login",
        },
        ME: "user/me",
        WALLET: {
            RECHARGE: "wallet/recharge",
            SEND_MONEY: "wallet/send_money"
        },
        HISTORY: "history",
        USERS: "users/get_all"
    },
    JWT: {
        ACCESS: "access"
    },
    STRIPE_TOKEN: "pk_test_51QsvJ5GdmR0RrENZqQnhil9lxpWBIGVbmM0sAtKQeOIuVdMuDKEuCTcSvrb3cTeJ7OiMjNTQ3soMtdSyTvUctgCD00HYSAFANd"
}