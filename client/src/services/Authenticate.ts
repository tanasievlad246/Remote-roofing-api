import { BackdropProps } from "@material-ui/core";
import axios from 'axios';

export default class Auth {
    static async login(username: string, password: string): boolean {
        const UserObject = await axios.post('/API/login', {
            username,
            password
        });
        return "the token";
    }

    static logout(): boolean {
        return true;
    }

    static register(): boolean {
        return true;
    }

    static isLoggedIn(): bool {
        return true;
    }
}