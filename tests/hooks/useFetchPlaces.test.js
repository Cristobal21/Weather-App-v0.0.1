import { renderHook, waitFor } from "@testing-library/react"
import { useFetchPlaces } from "../../src/hooks/useFetchPlaces"

describe('Pruebas en el hook useFetchPlaces', () => {

    test('Debe regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchPlaces('Miami'))
        const { lugares } = result.current
        expect( lugares.length ).toBe(0)
    })

    test('Debe retornar un arreglo de lugares', async () => {
        
        const { result } = renderHook( () => useFetchPlaces('Miami'))
        
        /**Con esto se tiene que esperar a que el arreglo de lugares tenga un largo de contenido mayor a cero */
        /**Es decir, verifica que el arreglo de lugares, tenga contenido*/
        await waitFor(
            () => expect( result.current.lugares.length ).toBeGreaterThan(0)
        )
        
        const { lugares } = result.current

        expect( lugares.length ).toBeGreaterThan(0)
    })
})