import { useEffect, useState } from "react"
import { getClima } from "../helpers/getClima"

export const useFetchWeather = ( lat, lng ) => {

    const [clima, setClima] = useState([])

    const getWeather = async () => {
        const newWeather = await getClima( lat, lng )
        setClima(newWeather)
    }

    useEffect(() => {
        getWeather()
    }, [])
    
    return {
        clima
    }
}
