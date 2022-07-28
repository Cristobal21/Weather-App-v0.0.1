import { render, screen } from "@testing-library/react"
import WeatherApp from "../src/WeatherApp"


describe('Pruebas en <WeatherApp/>', () => {

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<WeatherApp/>)
        expect( container ).toMatchSnapshot()
        // screen.debug()
    })


})