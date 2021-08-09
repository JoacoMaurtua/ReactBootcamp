import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


export default function Form(props) {

  const [object,setObject] = useState([]); //AQUI DEBO EXTARER LA LISTA DE DATOS

  const [key,setKey] = useState(''); //AQUI DEBO EXTAER EL ID ESPECIFICO

  const {category} = useParams();

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/${category}`)
    .then(response => setObject(response.data))
    .catch(console.log('Ups, algo salio mal'))

  },[category])

  console.log(object);
  

  return (
   <form onSubmit = {e => e.preventDefault()}>
     <label htmlFor="menu">Search for: </label>
     <select 
        name="menu" 
        id="menu" 
       /*  value = {object}  */
        onChange = {e => setObject(e.target.value)}
      >
      {
          /* object.map((item,index) => (<option key = {index}>{item}</option>)) */
      }
     </select>
     <label htmlFor="id">id: </label>
     <input 
        type="text" 
        id="id"
        value = {key}
        onChange = {e => setKey(e.target.value)} />
     <button>Search</button>


   </form>
  )
}
