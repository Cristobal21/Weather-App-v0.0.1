
import { useFetchPlaces } from "../hooks/useFetchPlaces"
import { useFetchWeather } from "../hooks/useFetchWeather"
import { PlaceItem } from "./PlaceItem"
import { WeatherDetail } from "./weather/WeatherDetail"



export const PlaceGrid = ({ lugar }) => {

    const { lugares } = useFetchPlaces( lugar )
 
    
    return (
        <>
            <p className="mt-3">{`Última búsqueda realizada: ${ lugar }`}</p>
            <hr />

            <div>
                {
                    lugares.map( (data) => (
                        <PlaceItem
                            key={ data.id }
                            { ...data }
                        />
                    ) )
                }
            </div>
        </>
    )
}
