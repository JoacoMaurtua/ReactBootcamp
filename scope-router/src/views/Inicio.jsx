import React, {useState,useEffect} from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';

export default function Inicio() {

  const [list,setList] = useState([]);

  useEffect(()=>{
      axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then(pokemons => setList(pokemons.data.results))
      .catch(console.log('ocurrio un problema'))
  },[]);

  return (
    <div>
      <NavBar/>
      <h1>Esta es la pagina de inicio</h1>
      <p>En este ejercicio trabajaremos rutas con parámetros, consumiremos la API</p>
      <p>Trabajaremos con rutas dinamicas</p>

      <ul >
        {
          list?list.map((item,index)=>
          (<li key={index}>{item.name} - {item.url}</li>))
          :null
        }
      </ul>
    </div>
  )
}

