import React, {useState,useEffect} from 'react';

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
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1118")
    .then(pokeData => pokeData.json())
    .then(pokeData => setLista(pokeData.results))
    .catch(pokeError => alert(pokeError))


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

