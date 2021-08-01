import React from 'react';

export default function Input(props) {
  const {initialWord,setInitialWord} = props
  return (
    <div>
      <label htmlFor="words">Filter</label><br/>
      <input type="text" id="words" value={initialWord} onChange = {event => setInitialWord(event.target.value)}/>
    </div>
  );
}

/* La funcion del metodo onChange es apuntar al nuevo valor ingresado en un input */

//AQUI SE USARA EL ONCHANGE para cambiar la entrada del valor