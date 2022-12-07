import { api } from '../baseConfig'
import { defineStore } from 'pinia'



export const useGlassesStore = defineStore('Car', () => {
    async function post(glasses, idUser) {
        try {
            const { data, status } = await api.get(`/carts?filters[userId][$eq]=${idUser}&populate=*`)
            const response = data.data
            if (status == 200) {
                return response
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }

    async function userCart(idUser) {
        try {
            const { data, status } = await api.get(`/carts?filters[userId][$eq]=${idUser}&populate=*`)
            const response = data.data
            if (status == 200) {
                return response
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }
    
    async function remove() {
        try {
            const { data } = await api.delete(`/many-glasses/`,{params : {id: id}}, {
                headers: authenticationHeader(store.token)
            })
            const glassDeleted = Glasses.value.find( Glasses => Glasses.id === id)
            if (glassDeleted) {
                Glasses.value.splice(Glasses.value.indexOf(glassDeleted), 1)
            }
            return data.data
        } catch(error) {
            return getAppError(error)
        }
    }

    return { userCart }
})
