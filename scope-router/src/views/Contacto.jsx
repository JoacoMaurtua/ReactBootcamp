import React, {useState,useEffect} from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import {Link} from 'react-router-dom';

//CREANDO LINKS DINAMICOS

export default function Contacto() {

  const [list,setList] = useState([]);

  useEffect(()=>{
      axios.get("https://swapi.dev/api/people")
      .then(res => setList(res.data.results))
      .catch(console.log('ocurrio un problema'))
  },[]);

  return (
    <div className="Container">
      <NavBar/>
      <h1>Esta es la apgina de contacto</h1>
      <p>En este ejercicio trabajaremos rutas con parámetros, consumiremos la API</p>
      <p>Trabajaremos con rutas dinamicas</p>

      <ul >
        {
          list?list.map((item,index)=>
            (<li key={index}> 
              <Link to={`/contacto/${index}`}>
                 {item.name} - {item.homeworld}
              </Link>
            </li>))
          :null
        }
      </ul>
    </div>
  )
}
