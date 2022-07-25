import { useState } from "react"
import { Form } from 'react-bootstrap'

export const AddNewPlace = ({ onNewPlace }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewPlace(inputValue.trim())
        setInputValue('')
    }
    
    return (

        <Form onSubmit={ onSubmit }>
            <Form.Group>
                <Form.Control 
                    type="text" 
                    placeholder="Busca un lugar, país o ciudad"
                    value={ inputValue }
                    onChange={ onInputChange }
                />
            </Form.Group>
        </Form>

    )
}
