import { ListGroup } from "react-bootstrap"



export const PlaceItem = ({ name }) => {

    const handleClick = () => {
        //Hacer el redireccion a weathergrid o weatherdetail
        console.log('Hola hiciste click en > ', name);
    }

    return (
        <>
            <ListGroup>
                <ListGroup.Item action variant="info" className="mb-2" onClick={ handleClick }>
                    <p>{ name }</p>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}
