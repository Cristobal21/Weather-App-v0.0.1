import { useFetchPlaces } from "../hooks/useFetchPlaces"
import { PlaceItem } from "./PlaceItem"
import PropTypes from 'prop-types'


export const PlaceGrid = ({ lugar }) => {

    const { lugares } = useFetchPlaces( lugar )
    
    return (
        <>
            <p className="mt-3">{`Última búsqueda realizada: ${ lugar }`}</p>
            <hr />

            <div>
                {
                    lugares.map( (data) => (
                        <PlaceItem
                            key={ data.id }
                            { ...data }
                        />
                    ) )
                }
            </div>
        </>
    )
}


PlaceGrid.propTypes = {
    lugar: PropTypes.string.isRequired
}