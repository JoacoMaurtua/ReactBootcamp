import React, {useState,useEffect} from 'react';
import axios from 'axios';

export default function Form(props) {

  const [options,setOptions] = useState([]); //AQUI DEBO EXTARER LA LISTA DE DATOS

  const [datos,setDatos] = useState({
    option:options[0],
    item:''
  });

  const [results,setResults] = useState({
    title:'',
    properties:[]
  })

  const [found,setFound] = useState(true);

  const handleOnChange = e =>{
    setDatos({
      ...datos,
      [e.target.name]:e.target.value
    })
    return datos.option+datos.item //creo sinteticamente una URL
  }

 const handleOnSubmit = async(e) =>{
    e.preventDefault();
    try{
      const url = handleOnChange(e);
      console.log(url);
      const getInfo = async(url) =>{

        try{
          const response = await fetch(url);
          if(response.ok){
            console.log('TODO BIEN')
          }else{
            throw new Error('NO ENCONTRADO')
          }
          const json = await response.json();
          const propiedadesUtiles = Object.entries(json);
          return propiedadesUtiles.slice(0,6) //res.data = [  [key_1, value1], [key_2, value2], [key_3, value3]  ]
 
        }catch(error){
            console.log(error)
        }
       
      }
      const array = await getInfo(url);
      console.log('array: ',array);
      const [[,title]] = array; //primer valor para el titulo

      setResults({
          title,
          properties: array.slice(1) 
      });

    }catch{
      console.log('Objeto no encontrado');
      setFound(false);

    }
  }

  /* const {category} = useParams();  */

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/`) //aqui debo poner un iterador 
    .then(response => setOptions(Object.entries(response.data))) //convertir objeto en arreglo
    .catch(console.log('Ups, algo salio mal'))

  },[])

  
  console.log(options)

  const {title,properties} = results;

  return (
    <div>
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

      {
        found?
        <div className="resultados">
        <h1>{title}</h1>
          {
            properties? properties.map(([key,value],index) => (
              <p key={index}>
                  <strong>{key.replace(/\b\w/g, c=> c.toUpperCase())} : </strong>{value}
              </p>
            )) :null
          }
        </div>
        :
        <div className = 'error'>
          <p>Estos no son los droides que esta buscandos</p>
          <img src="https://media.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif" alt="Obi-wan-kenobi" />
        </div>

      }
    
    </div>
   
  )
}
