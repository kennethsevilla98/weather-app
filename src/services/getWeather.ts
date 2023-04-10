import axios from "axios"


export const getWeather = async (lat: string, lon: string)=> {
    
    try{
        const response = await axios.get(`/api/get-weather`, {
            params: {
                lat,
                lon,
            }
        })
        return response.data  
    }catch(e){
        console.log(e)
    }

}