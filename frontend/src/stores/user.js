import { api } from '../baseConfig'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const User = {
    id: String,
    email: String,
    password:String,
    username: String
}

const user = ref(User)


export const useUserStore = defineStore('User', () =>{
    async function authenticate(login, password) {
        try {
            const res = await api.post('/auth/local', {
                identifier: login,
                password: password
            })
            const { data } = res
            user.value = {
                id: data.user.id,
                username: data.user.username,
                email: data.user.email,
                jwt: data.jwt,
            }
        } catch(error) {
            const appError = getAppError(error)
            if(appError.name === "ValidationError") {
                appError.message = "Usuário ou senha incorretos!"
            }
            return appError
        }
    }
    return {User, authenticate}
})