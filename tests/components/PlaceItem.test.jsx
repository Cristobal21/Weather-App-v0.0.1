import { render, screen } from "@testing-library/react"
import { PlaceItem } from "../../src/components/PlaceItem"

describe('Pruebas en <PlaceItem/>', () => {

    const name = 'Buin, Santiago Metropolitan, Chile'
    
    test('Debe hacer match con el snapshot', () => { 
        const { container } = render(<PlaceItem name={ name }/>)
        expect( container ).toMatchSnapshot()
    })

    test('Debe mostrar el nombre en el componente', () => {
        render(<PlaceItem name={ name }/>)
        expect( screen.getByText( name ) ).toBeTruthy()
    })
})