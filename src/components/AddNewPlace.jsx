import { useState } from "react"
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'


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

        <Form onSubmit={ onSubmit } aria-label="form" >
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

AddNewPlace.propTypes = {
    onNewPlace: PropTypes.func.isRequired,
}
