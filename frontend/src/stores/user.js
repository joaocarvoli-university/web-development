import { api } from '../baseConfig'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getAppError } from '../mixing/errorMessageMixing'
import Cookies from 'js-cookie'


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
            Cookies.set('token', data.jwt)
            Cookies.set('idUser', data.user.id)
            return data
        } catch (error) {
            const appError = getAppError(error)
            if (appError.name === "ValidationError") {
                appError.message = "Usuário ou senha incorretos!"
            }
            return appError
        }
    }
    async function getByUserId() {
        try {
            const { data, status } = await api.get(`/users/${Cookies.get('idUser')}`)
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
            const appError = getAppError(error)
            if (appError.name === "ValidationError") {
                appError.message = "Não foi possível criar a sua conta"
            }
            return appError
        }
    }
       async function put(user) {
        try {
            const { data, status } = await api.put(`/users/${Cookies.get('idUser')}`, user)
            const response = data.data
            if (status == 200) {
                return response
            }

        } catch (error) {
            const appError = getAppError(error)
            if (appError.name === "ValidationError") {
                appError.message = "Não foi possível criar a sua conta"
            }
            return appError
        }
    }
    return { User, authenticate, post, getByUserId,put }
})