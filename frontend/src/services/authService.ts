import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/authResponse.ts";

export default class AuthService {
    static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post('/login', {login, password})
    }

    static async registration(firstName: string, lastName: string,
                              login: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post('/registration', {firstName, lastName, login, password})
    }

    static async logout(): Promise<void>{
        return $api.post('/logout')
    }
}