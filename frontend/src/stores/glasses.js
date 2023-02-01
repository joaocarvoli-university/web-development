import { api } from '../baseConfig'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import { getAppError } from "../mixing/errorMessageMixing";


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
            if (status == 200) return response
        } catch (error) {
            return getAppError(error)
        }
    }

    async function get(id) {
        try {
            const { data, status } = await api.get(`/many-glasses`, { params: { id: id } })
            const response = data.data
            if (status == 200) return response
        } catch (error) {
            return getAppError(error)
        }
    }

    async function create(glasses) {
        try {
            const { data, status } = await api.post(`/many-glasses`, 
            {
                data: glasses
            }
            , {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            })
            const response = data.data
            if (status == 200) return response
        } catch (error) {
            return getAppError(error)
        }
    }

    async function remove(id) {
        try {
            const { data, status } = await api.delete(`/many-glasses/${id}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`
                }
            })
            const response = data.data
            if (status == 200) return response
        } catch(error) {
            return getAppError(error)
        }
    }
    return { all, create, get, remove }
})