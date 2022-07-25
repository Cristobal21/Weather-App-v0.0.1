import { useFetchWeather } from "../../hooks/useFetchWeather"
import { WeatherDetail } from "./WeatherDetail"




export const WeatherGrid = ({ lugar }) => {

    const { clima } = useFetchWeather(lugar)

    return (
        <>
            <p className="mt-3">{`Clima actual en: ${ lugar }`}</p>
            <hr />

            <div>
                {
                    clima.map( (data) => (
                        <WeatherDetail
                            // key={ data.id }
                            // { ...data }
                        />
                    ) )
                }
            </div>
        </>
    )
}
