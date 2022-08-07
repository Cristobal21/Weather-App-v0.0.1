

export const getClima = async ( latitud, longitud ) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ latitud }&lon=${ longitud }&appid=87a6024cfb90c7b58391cb691253d6fa&units=metric&lang=es`
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${ lugar }&appid=87a6024cfb90c7b58391cb691253d6fa&units=metric&lang=es`
    const resp = await fetch(url)
    const {
        coord,
        id,
        main,
        name,
        sys,
        visibility,
        wind,
        weather
    } = await resp.json()

    const { lat, lon } = coord
    const { humidity, temp, temp_min, temp_max } = main
    const { country } = sys
    const { speed } = wind
    const { description } = weather

    const dataWeather = {
        id,
        nombre: name,
        visibility,
        lon,
        lat,
        humidity,
        temp,
        temp_min,
        temp_max,
        country,
        speed,
        description,
    }


    // console.log(dataWeather)


    // const dataMain = main.map( data => ({
    //     temp: data.temp,
    //     min: data.temp_min,
    //     max: data.temp_max,
    //     humidity: data.humidity
    // }))

    return {
        dataWeather
    }
}
