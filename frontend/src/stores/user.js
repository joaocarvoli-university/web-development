import { api } from '../baseConfig'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getAppError } from '../mixing/errorMessageMixing'


export const User = {
    id: String,
    email: String,
    password:String,
    username: String
}


export const useUserStore = defineStore('User', () =>{
    const user = ref<User>({})

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
    return {User, authenticate}
})