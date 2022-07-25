



export const Temperature = ({ main }) => {

    const { temp, min, max } = main


    return (
        <div>
            <h4>Temperatura</h4>
            <p>{`Temperatura actual: ${ temp }`}</p>
            <p>{`Temperatura mínima: ${ min }`}</p>
            <p>{`Temperatura máxima: ${ max }`}</p>
        </div>
    )
}
