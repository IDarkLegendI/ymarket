import {defineStore} from "pinia";

export const useStore = defineStore('globalStore', {
    state: () => ({ auth: false }),
    getters: {
        isAuth: (state) => state.auth,
    },
    actions: {
        setAuth(value: boolean) {
            this.auth = value
        },
    },
})