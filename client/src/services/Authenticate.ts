import axios, { AxiosResponse } from 'axios';
import { UserAuthenticationDetails, UserDetails } from '../types';

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

    static async login(credentials: UserLogin): Promise<UserAuthenticationDetails> {
        try {
            const response: AxiosResponse = await Auth.client.post("/users/login", credentials);
            localStorage.setItem('authData', JSON.stringify(response.data));

            const data: UserAuthenticationDetails = JSON.parse(localStorage.getItem('authData') || '{}');

            return new Promise((resolve, reject) => {
                if (data.token) {
                    resolve(data);
                } else {
                    reject(response);
                }
            });
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async logout(): Promise<any> {
        const userData: string | null = localStorage.getItem('authData');

        if (userData) {
            localStorage.removeItem('authData');
            return  Promise.resolve(true);
        }
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
        const data: UserAuthenticationDetails = JSON.parse(localStorage.getItem('authData') || '{}');
        if (data.token) {
            const userDetailsUrl: string = `/users/${data.id}`;
            const auth: boolean = Auth.client.get(userDetailsUrl, {
                headers: {
                    'Authorization': data.token
                }
            }).then((response: any) => {
                if (response.status < 200 || response.status > 299) {
                    localStorage.removeItem('authData');
                    return false;
                } else {
                    return true;
                }
            });
            return auth;
        }
        return false;
    }

    static getToken(): UserAuthenticationDetails {
        return JSON.parse(localStorage.getItem('authData') || '{}');
    }
}