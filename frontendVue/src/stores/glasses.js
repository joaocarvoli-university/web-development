import { api } from '../baseConfig'
import { ref } from 'vue'



const items = ref([])



export const useGlasses = defineS


async function allGlasses(){
    try {
        const { data, status } = await api.get("/many-glasses")
        const response = data.data
        if(status == 200){
            items.value = response
        }
    }
    catch(error){
        console.log(error)
    }
}