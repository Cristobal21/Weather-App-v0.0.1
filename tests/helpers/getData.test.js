import { getData } from "../../src/helpers/getData"

describe('Pruebas en getData.js', () => { 

    
    test('Debe de retornar un arreglo de lugares', async () => { 
        
        const lugares = await getData('Buin')

        expect( lugares.length ).toBeGreaterThan( 0 )
        expect( lugares[0] ).toEqual({
            id: expect.any( String ),
            name: expect.any( String ),
            cordinates: expect.any( Object ),
            title: expect.any( String ),
        })
    })
})