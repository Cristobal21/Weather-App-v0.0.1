import { useEffect, useState } from "react"
import { getClima } from "../helpers/getClima"

export const useFetchWeather = ( lugar ) => {

    const [clima, setClima] = useState([])


    const getWeather = async () => {
        const newWeather = await getClima( lugar )
        setClima(newWeather)
    }
    
    
    useEffect(() => {
        getWeather()
    }, [])
    
    return {
        clima
    }
}
