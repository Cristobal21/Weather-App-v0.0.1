

export const getClima = async ( lugar ) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ lugar }&appid=87a6024cfb90c7b58391cb691253d6fa&units=metric&lang=es`
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


    const dataWeather = {
        id,
        name,
        visibility,
        coord : {
            lon: coord.lon,
            lat: coord.lat,
        },
        main : {
            humedad: main.humidity,
            temp: main.temp,
            min: main.temp_min,
            max: main.temp_max,
        },
        sys : {
            pais: sys.country,
            id: sys.id
        },
        wind : {
            velocidad: wind.speed
        },
        weather : {
            estado: weather[0].description
        },
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
