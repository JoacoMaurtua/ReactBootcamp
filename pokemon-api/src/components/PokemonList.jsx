import React, {useState,useEffect} from 'react'

export default function PokemonList() {

  const [list,setList] = useState([]);

  useEffect(()=>{
    console.log("works");
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(pokeData => pokeData.json())
        .then(pokeData => setList(pokeData.results))
        .catch(pokeError => alert(pokeError))
  });

  return (
    <div>
      <button>Pokemon fetch</button>
      <ul>
        {list ? list.map((pokemon,index)=>{
          return(<li key={index}>{pokemon.name}</li>)})
          :null} 
      </ul>
    </div>
  )
}



