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

  const [datos,setDatos] = useState({
    option:options[0],
    item:''
  });

  const handleOnChange = e =>{
    setDatos({
      ...datos,
      [e.target.name]:e.target.value
    })
    return datos.option+datos.item
  }

 const handleOnSubmit = async(e) =>{
    e.preventDefault();
    try{
      const url = handleOnChange(e);
      console.log(url);
      const getInfo = url =>{
        axios.get(url)
        .then(res=>{
          const entries = Object.entries(res.data);
          return entries.slice(0,6)
        })
        .catch(err=>console.log(err))
      }
      const array = getInfo(url);
      console.log(array);


    }catch{
      console.log('Objeto no encontrado');
    }
  }



  /* const {category} = useParams();  */

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/`) //aqui debo poner un iterador 
    .then(response => setOptions(Object.entries(response.data))) //convertir objeto en arreglo
    .catch(console.log('Ups, algo salio mal'))

  },[])

  
  console.log(options)

  return (
   <form onSubmit = {handleOnSubmit}>
     <label htmlFor="menu">Search for: </label>
     <select 
        name="option" 
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
        name = "item"
        value = {datos.item}
    
        onChange = {handleOnChange} />
     <button type="submit">Search</button>


   </form>
  )
}
