import React, {useState,useEffect} from 'react';
import axios from 'axios';
/* import { useParams,Link } from 'react-router-dom'; */

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

  /* const [option,setOption] = useState(options[0]); 

  const [item,setItem] = useState('');  */

  const [datos,setDatos] = useState({
    option:options[0],
    item:''
  });

  const handleOnChange = e =>{
    setDatos({
      ...datos,
      [e.target.name]:e.target.value
    })
      
    
  }

  /* const {category} = useParams();  */

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/`) //aqui debo poner un iterador 
    .then(response => setOptions(Object.entries(response.data))) //convertir objeto en arreglo
    .catch(console.log('Ups, algo salio mal'))

  },[])

  
  console.log(options)

  return (
   <form onSubmit = {e => e.preventDefault()}>
     <label htmlFor="menu">Search for: </label>
     <select 
        name="menu" 
        id="menu" 
        value = {datos.option}
        onChange = {handleOnChange} //cada seleccion deberia mandarme a una diferente categoria
      >
      {
          options?options.map(([key,value],index)=>
          (<option key = {index} value = {value}>
              {key}
          </option>)):null
      }
     </select>


     <label htmlFor="id">id: </label>
     <input 
        type="number" 
        id="id"
        name = "id"
        value = {datos.item}
    
        onChange = {handleOnChange} />
     <button>Search</button>


   </form>
  )
}
