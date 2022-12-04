import { api } from '../baseConfig'

async function User(){
    try{
        const {response,status} = await api.get("/users")
        if(status == 200)  console.log(response.data[0])
    }catch(error){
        console.log("error")
    }
}