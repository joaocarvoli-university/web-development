import { api } from '../baseConfig'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getAppError, isApplicationError } from '../mixing/errorMessageMixing'
import Cookies from 'js-cookie'
import { store } from './loggedUser.js'


export const User = {
    email: String,
    password: String,
    username: String,
    bornDate: String
}

export const UserLogin = {
    jwt: String,
    id: Number,
    username: String,
    email: String,
    role: String
}


export const useUserStore = defineStore('User', () => {
    const user = ref(UserLogin)

    async function authenticate(identifier, password) {
        try {
            const res = await api.post("/auth/local", {
                identifier,
                password
            })
            const { data } = res
            user.value = {
                jwt: data.jwt,
                id: data.user.id,
                username: data.user.username,
                email: data.user.email,
                role: String
            }
            store.commit('setAuthentication')
            Cookies.set('token', user.value.jwt)
            Cookies.set('idUser', user.value.id)
            const userRole = await getRole(user)
            if (isApplicationError(userRole)) throw userRole
            store.commit('setAuthorization', userRole)
            return user.value
        } catch (error) {
            const appError = getAppError(error)
            if (appError.name === "ValidationError") {
                appError.message = "Usuário ou senha incorretos!"

            }

        }
    }
    async function getByUserId() {
        try {
            const { data, status } = await api.get(`/users/${Cookies.get('idUser')}`)
            const response = data.data
            if (status == 200) return response
        } catch (error) {
            return error
        }
    }
    async function post(user) {
        try {
            const { data, status } = await api.post("/users", user)
            const response = data.data
            if (status == 200) return response
        } catch (error) {
            return error
        }
    }

    async function put(user) {
        try {
            const { data, status } = await api.put(`/users/${Cookies.get('idUser')}`, user, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            })
            const response = data.data
            if (status == 200) return response
        } catch (error) {
            return error
        }
    }

    async function getRole(user) {
        try {
            const { data, status } = await api.get("/users/me?populate=role", {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                },
            })
            if (status == 200) return data.role.name
        } catch (error) {
            return error
        }
    }
    return { authenticate, post, getByUserId, put, getRole }
})