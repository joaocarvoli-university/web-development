import { api } from '../baseConfig'
import { defineStore } from 'pinia'



export const Glasses = {
    id: String,
    amount:Number,
    price: Number,
    name: String,
    description: String
}


export const useGlassesStore = defineStore('Glasses', ()=> {
    async function all(){
        try {
            const { data, status } = await api.get("/many-glasses")
            const response = data.data
            if(status == 200){
                return response
            }
        }
        catch(error){
            return error
        }
    }

    async function get(id){
        try {
            const { data, status } = await api.get(`/many-glasses` ,{params : {id: id}})
            const response = data.data
            if(status == 200){
                items.value = response
            }
        }
        catch(error){
            console.log(error)
        }
    }

    async function create(glasses){
        try {
            const { data, status } = await api.post(`/many-glasses`, glasses, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            const response = data.data
            if(status == 200){
                items.value = response
            }
        }
        catch(error){
            console.log(error)
        }
    }

    async function remove(id) {
        try {
            const { data } = await api.delete(`/many-/${id}`, {
                headers: authenticationHeader(store.token)
            })
            const mangaDeleted = mangas.value.find( manga => manga.id === id)
            if (mangaDeleted) {
                mangas.value.splice(mangas.value.indexOf(mangaDeleted), 1)
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
    }
    return {Glasses,all, create, get, remove, update }
})
