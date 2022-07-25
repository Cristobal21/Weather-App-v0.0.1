
import { Tabs, Tab } from 'react-bootstrap'
import { Temperature } from './Temperature'
import { WeatherState } from './WeatherState'

// export const WeatherDetail = ({ id, main, name, sys, visibility, wind, weather }) => {
export const WeatherDetail = () => {

    // const { lat, lon } = coord // -> Se recibe por paramaetros
    // const { humedad, temp, min, max } = main
    // const { pais } = sys
    // const { velocidad } = wind
    // const { estado } = weather

    return (
        <div>

            <h1>Weather Detail</h1>
            <hr />

            <Tabs
                defaultActiveKey="temp"
                id="example"
                className='mb-3'
                justify
            >
                <Tab eventKey="temp" title="Temperatura">
                    <Temperature/>
                </Tab>
                <Tab eventKey="precip" title="Precipitaciones">
                    <WeatherState/>
                </Tab>
            </Tabs>



            

            

            

            {/* <h4>Coordenadas</h4>
            <p>{`Latitud: ${lat}`}</p>
            <p>{`Longitud: ${lon}`}</p> */}

            

            {/* <div>
            {
                clima.map( (data) => (
                    <PlaceItem
                        key={ data.id }
                        { ...data }
                    />
                ) )
            }
            </div> */}
        </div>
    )
}
