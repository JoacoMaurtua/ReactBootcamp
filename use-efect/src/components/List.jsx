import React, {useEffect, useState} from 'react';

//LLEVANDO ALGO DEL EXTERIOR(EN ESTE CASO LOS DATOS DE UNA API) AL RENDER

export default function List() {

  //Nota: useEfect evita la carga de la transferencia de datos hacia la API
  const [lista,setLista] = useState([]); 


  useEffect(()=>{
    console.log("fetch veces")
    fetch('https://swapi.dev/api/people/')
        .then(data => data.json())
        .then(data => setLista(data.results)) //trae los datos de la API al array vacio
        .catch(error => console.error(error)) //codigos de error NOT FOUND 404
  },[]) //SOLO CARGA UNA VEZ

  
 
  return (
    <div>
      <ul>
        {lista?lista.map((item,index)=>{return(<li key={index}>{item.name}</li>)}):null}
      </ul>
    </div>
  )
}


