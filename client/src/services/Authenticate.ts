import axios, { AxiosResponse } from 'axios';
import { UserDetails } from '../types';

interface UserLogin {
    email: string,
    password: string
}
export default class Auth {
    private static client: any = axios.create({
        baseURL: 'http://localhost:8090/API',
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    static login(credentials: UserLogin): boolean {
        Auth.client.post("/users/login", credentials)
            .then((response: AxiosResponse) => {
                localStorage.setItem('authData', JSON.stringify(response.data));
            })
            .catch((error: Error) => {console.log(error)});

        const data: string | null = localStorage.getItem("authData");

        if (data) {
            return true;
        } else {
            return false;
        }
    }

    static logout(): boolean {
        return true;
    }

    static async register({name, surname, email, password}: UserDetails): Promise<boolean> {
        try {
            const registerResponse = await Auth.client.post("/users", {
                name,
                surname,
                email,
                password
            });

            return new Promise((resolve, reject) => {
                if (registerResponse.success) {
                    resolve(registerResponse);
                } else {
                    reject(registerResponse);
                }
            });
        } catch (error) {
            return Promise.reject({message: error})
        }
    }

    static isLoggedIn(): boolean {
        return false;
    }
}