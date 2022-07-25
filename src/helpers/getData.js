

export const getData = async ( lugar ) => {

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json?limit=10&proximity=-73.990593%2C40.740121&types=place%2Cpostcode%2Caddress%2Ccountry%2Cregion%2Cdistrict%2Clocality%2Cneighborhood%2Cpoi&access_token=pk.eyJ1IjoidG9iYWxpbm8iLCJhIjoiY2wzc3Q2d3R2MWdlYjNvcnNzMnB5cDZ3MyJ9.tuWZBXZoIN61RUySolA24Q`
    const resp = await fetch(url)
    const { features } = await resp.json()


    const data = features.map( lugar => ({
        id: lugar.id,
        name: lugar.place_name,
        cordinates: {
            lng: lugar.center[0],
            lat: lugar.center[1]
        },
        title: lugar.text,
    }))

    return data
}
