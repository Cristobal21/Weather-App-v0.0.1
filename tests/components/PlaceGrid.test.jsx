const { render, screen } = require("@testing-library/react")
const { PlaceGrid } = require("../../src/components/PlaceGrid")
const { useFetchPlaces } = require("../../src/hooks/useFetchPlaces")

jest.mock('../../src/hooks/useFetchPlaces') // Se hace referencia a que se está haciendo un mock de ese path (donde hay una función)

describe('Pruebas en <PlaceGrid/>', () => { 

    const lugar = 'Buin'

    test('Debe de hacer match con el snapshot', () => { 

        useFetchPlaces.mockReturnValue({
            lugares: [],
        })

        const { container } = render(<PlaceGrid lugar={ lugar }/>)
        expect( container ).toMatchSnapshot()
    })

    test('Debe de cargar la info cuando se llama al useFetchPlaces', () => { 

        const places = [
            {
                id: 'asd',
                name: 'Miami Beach, Estados Unidos',
                cordinates: {
                    lat: 1234,
                    lng: -4321
                },
                title: 'Miami'        
            },
            {
                id: 'qwe',
                name: 'Buin,Región Metropolitana, Chile',
                cordinates: {
                    lat: 9876,
                    lng: -4567
                },
                title: 'Buin'        
            }
        ]

        useFetchPlaces.mockReturnValue({
            lugares: places,
        })

        render(<PlaceGrid lugar={ lugar }/>)
    })

})