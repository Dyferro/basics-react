import React,{useState} from 'react'

const Evento = () => {
    const eventoClick=()=>{
        setTexto('Adios');
    }
    const [texto, setTexto] = useState('Hola Doina');

  return (
    <div>
      <hr/>
      <h3>{texto}</h3>
      <button onClick={eventoClick}>Click</button>
    </div>
  )
}

export default Evento
