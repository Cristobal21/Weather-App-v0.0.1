import { Container, Row } from "react-bootstrap"
import { useFetchWeather } from "../hooks/useFetchWeather"

export const WeatherDetail = ({ lugar }) => {

    const { clima } = useFetchWeather( lugar )

    const dataWeather = () => {
        
    }


    return (
        <>
            <p>
                {
                    clima.map( data => data.name )
                }
            </p>
        </>
    )
}
