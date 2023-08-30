import {defineStore} from "pinia";
import {IUser} from "../models/IUser.ts";
import AuthService from "../services/authService.ts";
import axios from "axios";
import {AuthResponse} from "../models/response/authResponse.ts";
import {API_URL} from "../http";

export const useStore = defineStore('globalStore', {
    state: () => ({
        auth: false,
        user: {} as IUser
    }),
    getters: {
        isAuth: (state) => state.auth,
    },
    actions: {
        setAuth(value: boolean) {
            this.auth = value
        },

        setUser(user: IUser) {
            this.user = user
        },

        async login(login: string, password: string){
            try {
                const response = await AuthService.login(login, password)
                localStorage.setItem('token', response.data.accessToken)
                this.setAuth(true)
                this.setUser(response.data.user)
            } catch (e) {
                console.log(e)
            }
        },

        async registration(firstName: string, lastName: string, login: string, password: string){
            try {
                const response = await AuthService.registration(firstName, lastName , login, password)
                localStorage.setItem('token', response.data.accessToken)
                this.setAuth(true)
                this.setUser(response.data.user)
            } catch (e) {
                console.log(e)
            }
        },

        async logout(){
            try {
                await AuthService.logout()
                localStorage.removeItem('token')
                this.setAuth(false)
                this.setUser({} as IUser)
            } catch (e) {
                console.log(e)
            }
        },

        async checkAuth(){
            try {
                const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
                console.log(response)
                localStorage.setItem('token', response.data.accessToken)
                this.setAuth(true)
                this.setUser(response.data.user)
            } catch (e) {
                console.log(e)
            }
        }
    },
})