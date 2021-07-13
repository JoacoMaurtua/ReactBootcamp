import React, {useState} from 'react'

export default function PokemonList() {

  const [list,setList] = useState([]);

  const pokeClick = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1118")
      .then(pokeData => pokeData.json())
      .then(pokeData => setList(pokeData.results))
      .catch(pokeError => alert(pokeError))
  }

  return (
    <div>
      <button onClick={pokeClick}>Pokemon fetch</button>
      <ul>
        {list ? list.map((pokemon,index)=>{
          return(<li key={index}>{pokemon.name}</li>)})
          :null} 
      </ul>
    </div>
  )
}



