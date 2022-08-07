import { useState } from "react"
import { Button, Card, Col, Collapse, Container, Fade, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useFetchWeather } from "../hooks/useFetchWeather"
import { WeatherDetail } from "./WeatherDetail"


export const PlaceItem = ({ name, title, country, cordinates }) => {

    const { lat, lng } = cordinates

    const [open, setOpen] = useState(false)

    const { clima } = useFetchWeather( lat, lng )

    const { dataWeather } = clima

    const {
        id,
        nombre,
        visibility,
        humidity,
        temp,
        temp_min,
        temp_max,
        speed,
        description,
    } = clima

    
    const getWeather = () => {
        
    }

    return (
        <Container>
            <Row xs={1} md={2}>
                <Col md={6}>
                    <Card className="mb-3" border="primary">
                        <Card.Header>
                            <Card.Title>
                                <Link to="/">{title}</Link>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{name}</Card.Text>
                            <Card.Text>{`${lat} ${lng}`}</Card.Text>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="card-weather"
                                aria-expanded={open}
                                variant="outline-danger"
                            >
                                Ver Clima
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{country}</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Fade
                        in={open}
                        onEntering={() => getWeather}
                    >
                        <div id="card-weather">
                            <Card border="info">
                                <Card.Header>
                                    <Card.Title>Detalle del Clima</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>{`Temperatura actual: ${ clima.temp }`}</Card.Text>
                                    {/* <Card.Text>{`Mínima: ${ dataWeather.temp_min }`}</Card.Text>
                                    <Card.Text>{`Máxima: ${ dataWeather.temp_max }`}</Card.Text>
                                    <Card.Text>{`Estado: ${ dataWeather.description }`}</Card.Text>
                                    <Card.Text>{`Humedad: ${ dataWeather.humidity }`}</Card.Text>
                                    <Card.Text>{`Velocidad viento: ${ dataWeather.speed }`}</Card.Text>
                                    <Card.Text>{`Ciudad: ${ dataWeather.nombre }`}</Card.Text> */}
                                </Card.Body>
                            </Card>
                        </div>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )
}