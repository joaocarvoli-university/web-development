import { api } from '../baseConfig'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getAppError } from '../mixing/errorMessageMixing'


export const User = {
    id: Number,
    email: String,
    password:String,
    username: String,
    bornDate: String
}


export const useUserStore = defineStore('User', () =>{
    async function authenticate(identifier, password) {
        try {
            const res = await api.post("/auth/local", {
                identifier,
                password
              })
              const { data } = res
              return data
        } catch(error) {
            const appError = getAppError(error)
            if(appError.name === "ValidationError") {
                appError.message = "Usuário ou senha incorretos!"
            }
            return appError
        }
    }
    async function post(user) {
        try {
            const res = await api.post("/users", {
                username: user.username,
                email: user.email,
                password: user.password,
                bornDate: user.bornDate
            })
              const { data } = res
              return data
        } catch(error) {
            const appError = getAppError(error)
            if(appError.name === "ValidationError") {
                appError.message = "Não foi possível criar a sua conta"
            }
            return appError
        }
    }
    return {User, authenticate, post}
})