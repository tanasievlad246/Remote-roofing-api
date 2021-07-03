import axios from 'axios';

interface AuthObject {
    token: string
}
export default class Auth {
    static async login(username: string, password: string): Promise<AuthObject> {
        try {
            const UserObject: AuthObject = await axios.post('/API/login', {
                username,
                password
            });
            console.log(UserObject);

            return new Promise((resolve, reject) => {
                if (UserObject.hasOwnProperty('token')) {
                    resolve(UserObject);
                } else {
                    reject({
                        message: "An error has occoured",
                        error: UserObject
                    });
                }
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static logout(): boolean {
        return true;
    }

    static register(): boolean {
        return true;
    }

    static isLoggedIn(): boolean {
        return true;
    }
}