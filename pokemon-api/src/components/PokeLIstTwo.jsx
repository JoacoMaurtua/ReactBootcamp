import React, {useState,useEffect} from 'react';
import axios from 'axios';

//UTILIZANDO useEffect()

export default function PokeLIstTwo() {

  const [mostrar,setMostrar] = useState(false);

  return (
    <div>
      <button onClick={()=>setMostrar(true)}>Fetch Pokemon</button>
      {
        mostrar? <PokeRender/>:null
      }
    </div>
  )
}

function PokeRender(){
  const [lista,setLista] = useState([]);

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1118")
    .then(pokeData => setLista(pokeData.data.results)) //palabra reservada data
    .catch(pokeError => alert(pokeError))

    //Desmontado
    return()=>{
      console.log('Limpiado');
      setLista([]);
    }

  },[]);

  console.log('Ocurrio el render');

  return(
    <ul>
      {lista ? lista.map((pokemon,index)=>{
      return(<li key={index}>{pokemon.name}</li>)
      }) :null} 
    </ul>
  )

}

