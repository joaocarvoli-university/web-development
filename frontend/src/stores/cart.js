import { api } from '../baseConfig'
import { defineStore } from 'pinia'



export const useGlassesStore = defineStore('Car', () => {
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

    return { userCart }
})
