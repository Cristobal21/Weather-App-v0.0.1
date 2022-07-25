import React from 'react'
import ReactDOM from 'react-dom/client'

import WeatherApp from './WeatherApp'
import './styles.css'
import { Container } from 'react-bootstrap'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <WeatherApp />
    </Container>
  </React.StrictMode>
)
