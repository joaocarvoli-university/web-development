import { api } from '../baseConfig'
import { defineStore } from 'pinia'


export const Glasses = {
    id: String,
    amount:Number,
    price: Number,
    name: String,
    description: String
}


export const cart = {
    glasses: Glasses,
}

export const useGlassesStore = defineStore('Car', () => {

      async function all(){
        try {
            const { data, status } = await api.get("/cart")
            const response = data.data
            if(status == 200){
                return response
            }
        }
        catch(error){
            return error
        }
    }

    return {all}
})
