import { fireEvent, render, screen } from "@testing-library/react"
import { AddNewPlace } from "../../src/components/AddNewPlace"

describe('Pruebas en <AddNewPlace/>', () => { 

    test('Debe hacer match con el snapshot', () => { 
        const { container } = render(<AddNewPlace onNewPlace={ () => {} } />)
        expect( container ).toMatchSnapshot()
    })

    test('Debe cambiar el valor de la caja de texto', () => { 
        render(<AddNewPlace onNewPlace={ () => {} } />)
        const input = screen.getByRole('textbox') // Hace referencia al elemento input que esta en el componente
        
        /** Para disparar un evento especifico */
        fireEvent.input( input, { target: { value: 'Buin' } } )
        expect( input.value ).toBe('Buin')
        // screen.debug()
    })

    test('Debe llamar al onNewPlace si el input tiene un valor', () => { 
        
        const inputValue = 'Buin'
        const onNewPlace = jest.fn()
        
        render(<AddNewPlace onNewPlace={ onNewPlace } />) // Se identifica al sujeto de pruebas

        const input = screen.getByRole('textbox') // Se hace referencia al elemento input
        const form = screen.getByRole('form') // Se hace referencia al elemento form

        fireEvent.input( input, { target: { value: inputValue } } ) // Se dispara el envento haciendo enfasis al valor que contiene el input
        fireEvent.submit( form ) // Se dispara el evento onsubmit del formulario
        // screen.debug()

        expect( input.value ).toBe('')

        expect( onNewPlace ).toHaveBeenCalled()
        expect( onNewPlace ).toHaveBeenCalledTimes(1)
        expect( onNewPlace ).toHaveBeenCalledWith( inputValue )
    })

    test('No debe de llamar el onNewPlace si el input esta vacío', () => {
        
        const onNewPlace = jest.fn()
        render(<AddNewPlace onNewPlace={ onNewPlace } />) // Se identifica al sujeto de pruebas

        const form = screen.getByRole('form')
        fireEvent.submit( form )

        expect( onNewPlace ).not.toHaveBeenCalled()
        
        // const input = screen.getByRole('textbox')
        // const form = screen.getByRole('form')

        // if( input.value.length > 1 ) {
        //     fireEvent.submit( form )
        //     expect( onNewPlace ).toHaveBeenCalledTimes(1)
        //     console.log('Hay algo en el input')
        // } else {
        //     expect( onNewPlace ).toHaveBeenCalledTimes(0)
        //     console.log('Input vacío');
        // }

    })

})