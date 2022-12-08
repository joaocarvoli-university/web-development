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
                role: ""
            }
            const userRole = await getRole(user)
            user.value.role = userRole
            return user.value
        } catch (error) {
            return getAppError(error)
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
                return response.role.name
            }

        } catch (error) {
            const appError = getAppError(error)
            if (appError.name === "ValidationError") {
                appError.message = "Nao foi possivel criar a sua conta"
            }
            return appError
        }
    }
    async function put(user, userId) {
        try {
            const { data, status } = await api.put(`/users/${userId}`, user)
            const response = data.data
            if (status == 200) {
                return response
            }

        } catch (error) {
            const appError = getAppError(error)
            if (appError.name === "ValidationError") {
                appError.message = "Nao foi possivel atualizar seus dados"
            }
            return appError
        }
    }

    async function getRole(user) {
        try {
            const res = await api.get("/users/me?populate=role", {
                headers: {
                    Authorization: `Bearer ${user.value.jwt}`
                },
            })
            const { data } = res
            return data.role.name
        } catch (error) {
            return getAppError(error)
        }

    }
    return { User, authenticate, post, getByUserId, put, getRole }
})