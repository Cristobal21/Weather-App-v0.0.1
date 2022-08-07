import { useEffect, useState } from "react"
import { getData } from "../helpers/getData"

export const useFetchPlaces = ( lugar ) => {

    const [lugares, setLugares] = useState([])

    const getPlaces = async () => {
        const newPlaces = await getData( lugar )
        setLugares( newPlaces )
    }

    useEffect(() => {

        getPlaces()

    }, [])


    return {
        lugares
    }
}
