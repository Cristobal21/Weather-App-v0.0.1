import { useFetchWeather } from "../../hooks/useFetchWeather"
import { WeatherDetail } from "./WeatherDetail"
import PropTypes from 'prop-types'




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


WeatherGrid.propTypes = {
    lugar: PropTypes.string.isRequired
}