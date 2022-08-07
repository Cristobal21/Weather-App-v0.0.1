import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import WeatherApp from './WeatherApp'
import './styles.css'
import { Container } from 'react-bootstrap'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <WeatherApp />
      </Container>
    </BrowserRouter>
  </React.StrictMode>
)
