import { useState } from "react"
import { AddNewPlace } from "./components/AddNewPlace"
import { PlaceGrid } from "./components/PlaceGrid"
// import { WeatherGrid } from "./components/weather/WeatherGrid"



function WeatherApp() {

  const [lugares, setLugares] = useState(['miami'])

  const onAddPlace = (nuevoLugar) => {
    setLugares([nuevoLugar])
    // setLugares([ nuevoLugar, ...lugares ])
  }

  return (
    <>
      <h1 className="title-app mb-5 mt-5" >Wheater App v0.0.1</h1>

      <AddNewPlace
        onNewPlace={onAddPlace}
      />

      {
        lugares.map((lugar) => (
          
          <PlaceGrid
            key={lugar}
            lugar={lugar}
          />
            
        ))
      }      
    </>
  )
}

export default WeatherApp
