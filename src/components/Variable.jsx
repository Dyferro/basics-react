import React from 'react'

const Variable = () => {

    const saludo='Hola folks';
    const imagen='https://images.ctfassets.net/81iqaqpfd8fy/3r4flvP8Z26WmkMwAEWEco/870554ed7577541c5f3bc04942a47b95/78745131.jpg?w=1200&h=1200&fm=jpg&fit=fill';

  return (
    <div>
      <h2>New component {saludo}</h2>
      <img src={imagen} alt='jirafa'/>
    </div>
  )
}

export default Variable
