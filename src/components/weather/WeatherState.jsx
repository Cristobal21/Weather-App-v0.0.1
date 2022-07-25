
export const WeatherState = ({ main, wind, weather }) => {

    const { velocidad } = wind
    const { humedad } = main
    const { estado } = weather


    return (
        <div>
            <h4>Precipitaciones</h4>
            <p>{`Humedad: ${ humedad }`}</p>
            <p>{`Velocidad viento: ${ velocidad }`}</p>
            <p>{`Estado actual: ${ estado }`}</p>
        </div>
    )
}
