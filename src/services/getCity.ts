import axios from "axios"


export const getCity = async (city?: string)=> {
    try{
        const response = await axios.get(`/api/get-city`, {
            params: {
                q: city,
            }
        })
    return response.data
    }catch(e){
        console.log(e)
    }

}