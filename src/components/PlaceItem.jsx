import { ListGroup } from "react-bootstrap"



export const PlaceItem = ({ name }) => {

    const handleClick = () => {
        
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
