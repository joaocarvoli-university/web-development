import { api } from '../baseConfig'
import { defineStore } from 'pinia'



export const Glasses = {
    id: String,
    amount: Number,
    price: Number,
    name: String,
    color: String,
    brand: String,
    description: String
}



export const useGlassesStore = defineStore('Glasses', () => {
    async function all(glassesType) {
        try {
            const { data, status } = await api.get(`/many-glasses?filters[type][$eq]=${glassesType}`)
            const response = data.data
            if (status == 200) {
                return response
            }
        } catch (error) {
            return error
        }
    }

    async function get(id) {
        try {
            const { data, status } = await api.get(`/many-glasses`, { params: { id: id } })
            const response = data.data
            if (status == 200) {
                //items.value = response
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function create(glasses) {
        try {
            const { data, status } = await api.post(`/many-glasses`, glasses)
            const response = data.data
            if (status == 200) {
                return response
            }
        } catch (error) {
            console.log(error)
        }
    }

    /*async function remove(id) {
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
     async function update(glasses, newCover){
        const { id } = glasses
        try {
            const { data } = await api.put(`/many-glasses/`,{params : {id: id}}, newCover, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            return get(id)
        } catch(error) {
            return getAppError(error)
        }
    }*/
    return { Glasses, all, create, get }
})