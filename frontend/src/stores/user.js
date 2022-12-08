import { api } from '../baseConfig'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getAppError } from '../mixing/errorMessageMixing'


export const User = {
    email: String,
    password: String,
    username: String,
    bornDate: String
}


export const useUserStore = defineStore('User', () => {
    async function authenticate(identifier, password) {
        try {
            const res = await api.post("/auth/local", {
                identifier,
                password
            })
            const { data } = res
            return data
        } catch (error) {
            const appError = getAppError(error)
            if (appError.name === "ValidationError") {
                appError.message = "Usuário ou senha incorretos!"
            }
            return appError
        }
    }
    async function getByUserId(userId) {
        try {
            const { data, status } = await api.get(`/users/${userId}`)
            const response = data.data
            if (status == 200) {
                return response
            }
        } catch (error) {
            console.log(error)
            return error
        }
    }
    async function post(user) {
        try {
            const { data, status } = await api.post("/users", user)
            const response = data.data
            if (status == 200) {
                return response
            }

        } catch (error) {
            console.log(error)
            const appError = getAppError(error)
            if (appError.name === "ValidationError") {
                appError.message = "Não foi possível criar a sua conta"
            }
            return appError
        }
    }
    return { User, authenticate, post, getByUserId }
})