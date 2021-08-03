import React, {useState,useEffect} from 'react';

//LLEVANDO ALGO DEL RENDER AL EXTERIOR

export default function ExampleTwo() {

  const [state,setState] = useState(0);

  useEffect(()=>{
    console.log(`La cuenta es ${state}`);
    document.title = `La cuenta es: ${state}`; //Aqui se usa useEffect porque le paso un estado del DOM a un elemento externo
  });

  return (
    <div>
      <h3>La cuenta es: {state}</h3>
      <button onClick={()=>setState(state+1)}>Aumentar</button>
      
    </div>
  )
}
