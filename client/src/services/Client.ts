import { AxiosInstance, AxiosResponse } from "axios";
import axios from 'axios';

export default class Client {
    protected static service: any = axios.create({
        baseURL: 'http://localhost:8090/API',
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    static async get(url: string, authorization: string): Promise<AxiosResponse> {
        return await Client.service.get(url, {
            headers: {
                'Authorization': authorization
            }
        });
    }

    static async post(url: string, authorization: string, data: object): Promise<AxiosResponse> {
        return await Client.service.post(url, {
            headers: {
                'Authorization': authorization
            },
            data: data
        });
    }

    static async patch(url: string, authorization: string, data: object): Promise<AxiosResponse> {
        return await Client.service.patch(url, {
            headers: {
                'Authorization': authorization
            },
            data: data
        });
    }

    static async delete(url: string, authorization: string): Promise<AxiosResponse> {
        return await Client.service.delete(url, {
            headers: {
                'Authorization': authorization
            }
        });
    }
}