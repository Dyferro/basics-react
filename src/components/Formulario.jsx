import React from 'react'

const Formulario = () => {

    const [nombre, setNombre] = React.useState('');

    const [descripcion, setDescripcion] = React.useState('');

    const [lista, setLista] = React.useState([])

    const validarDatos = (e) => {
        e.preventDefault();

        if (!nombre.trim()) {
            console.log('Esta vacio el campo nombre');
            return
        }

        if (!descripcion.trim()) {
            console.log('Esta vacio el campo descripcion');
            return
        }

        console.log(`Procesando datos ${nombre}: ${descripcion}`);
        setLista([
            ...lista,
            { nombre: nombre, nombreDescripcion: descripcion }
        ])
        e.target.reset();
        setNombre('');
        setDescripcion('');
    };


    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={validarDatos}>
                <input
                    type="text"
                    placeholder="Nombre"
                    className="form-control mb-2"
                    onChange={e => setNombre(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Descripcion"
                    className="form-control mb-2"
                    onChange={e => setDescripcion(e.target.value)}
                />
                <button className="btn btn-primary btn-block" type="submit">Insertar</button>
            </form>
            <hr />
            <ol>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            {item.nombre} : {item.nombreDescripcion}
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Formulario