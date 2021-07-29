import { AxiosInstance, AxiosResponse } from "axios";
import axios from 'axios';

export default class Client {
    protected static client: any = axios.create({
        baseURL: 'http://localhost:8090/API',
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    async get(url: string, authorization: string): Promise<AxiosResponse> {
        return Client.client.get(url, {
            
        })
    }
}