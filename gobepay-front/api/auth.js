import { ENV } from "../utils";

async function register(email, password) {
    
    const url = `${ENV.API_URL}/${ENV.ENDPOINT.AUTH.REGISTER}`;
    const params = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    };

    const response = await fetch(url, params);

    if (!response.ok) throw response;

    return await response.json();

}

export const authControl = {
    register
}