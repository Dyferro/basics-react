import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0);

    const incrementar=()=>(setContador(contador+1));
  return (
    <div>
      <h2>Contador</h2>
      <p>Cuenta de dias {contador}</p>
      <h4>
          {
              //condicion?exito:fracaso
              contador>5?'Ya':'Todavia'
          }
      </h4>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default Contador
