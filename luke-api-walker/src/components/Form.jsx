import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

/* const categorys = [
  'people',
  'planets',
  'spaceships',
  'vehicles',
  'films',
  'species'
] */


export default function Form(props) {

  const [options,setOptions] = useState([]); //AQUI DEBO EXTARER LA LISTA DE DATOS

  const [option,setOption] = useState(options[0]); 

  const [item,setItem] = useState(''); 

  /* const {category} = useParams();  */

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/`) //aqui debo poner un iterador 
    .then(response => setOptions(Object.entries(response.data)))
    .catch(console.log('Ups, algo salio mal'))

  },[])

  
  console.log(options)

  return (
   <form onSubmit = {e => e.preventDefault()}>
     <label htmlFor="menu">Search for: </label>
     <select 
        name="menu" 
        id="menu" 
        value = {option}
        onChange = {e => setOption(e.target.value)} //cada seleccion deberia mandarme a una diferente categoria
      >
      {
          options?options.map(([key,value],index)=>
          (<option key = {index} value = {value}>{key}</option>)):null
      }
     </select>
     <label htmlFor="id">id: </label>
     <input 
        type="text" 
        id="id"
    
        onChange = {e => setItem(e.target.value)} />
     <button>Search</button>


   </form>
  )
}
