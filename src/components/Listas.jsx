import React from 'react'

const Listas = () => {
    const initialState = [1, 2, 3, 4, 5, 6];


    const [lista, setLista] = React.useState(initialState);

    const agregar = () => {
        setLista([...lista, 7, 8, 9])
    }
    return (
        <div>
            {
                lista.map((item, index) => (<h4 key={index}>{item}</h4>))
            }
            <button onClick={() => agregar()}>Agregar</button>
        </div>
    )
}

export default Listas