import { render, screen } from "@testing-library/react"
import { WeatherGrid } from "../../../src/components/weather/WeatherGrid"
import { useFetchWeather } from "../../../src/hooks/useFetchWeather"

jest.mock('../../../src/hooks/useFetchWeather')

describe('Pruebas en <WeatherGrid/>', () => {

    const lugar = 'Miami'

    test('Debe hacer match con el snapshot', () => {

        useFetchWeather.mockReturnValue({
            clima: []
        })

        const { container } = render(<WeatherGrid lugar={lugar} />)
        expect(container).toMatchSnapshot()
    })

    // test('Debe cargar la info cuando se llame al useFetchWeather', () => {

    //     const weather = [
    //         {
    //             id: 'abc',
    //             name: 'Buin, Region Metropolitana',
    //             visibility: 9000,
    //             coord: {
    //                 lon: 1234,
    //                 lat: -1234,
    //             },
    //             main: {
    //                 humedad: 34,
    //                 temp: 13.11,
    //                 min: 7,
    //                 max: 15
    //             },
    //             sys: {
    //                 pais: 'Chile',
    //                 id: 'CL'
    //             },
    //             wind: {
    //                 velocidad: '1.4km/h'
    //             },
    //             weather: {
    //                 estado: 'Nublado'
    //             },
    //         }
    //     ]

    //     useFetchWeather.mockReturnValue({
    //         clima: weather
    //     })

    //     render(<WeatherGrid lugar={ lugar }/>)

    // })
})