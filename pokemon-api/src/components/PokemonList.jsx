import React, {useState,useEffect} from 'react';
import axios from 'axios';

export default function PokemonList() {


  const [list,setList] = useState([]);

  /*****FETCH METHOD*****/

  
    console.log('ftech veces')
    const pokeClick = () =>{
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=1118")
        .then(pokeData => pokeData.json())
        .then(pokeData => setList(pokeData.results))
        .catch(pokeError => alert(pokeError))
    }  




  /*****TRY CATCH METHOD*****/
    const pokeClick2 = async() =>{ 
    await pokeFetch().then(res => setList(res.results))
  }

  const pokeFetch = async() =>{   //declaramos una funcion asincrona
      try{
        const pokeData = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1118");//para que se tome el tiempo necesario para traer la data de la url
        const pokeJson = await pokeData.json(); //una vez resuelta la promise, conviertelos a JSON(es otra promise)
        return pokeJson;
      }catch(err){
        console.error(err);
      }
  } 


  /*****AXIOS METHOD*****/
  const pokeClick3 = () =>{
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1118")

        .then(response=> setList(response.data.results))
         
        .catch(error=> console.error(error))   
  }

  return (
    <div>
      <button onClick={pokeClick2}>Pokemon fetch</button>
      <ul>
        {list ? list.map((pokemon,index)=>{
          return(<li key={index}>{pokemon.name}</li>)})
          :null} 
      </ul>
    </div>
  )
}




