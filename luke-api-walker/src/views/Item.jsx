import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import { useParams } from 'react-router';
import axios from 'axios';

export default function Item() {

  const {id} = useParams();

  const [item,setItem] = useState([]);

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/${id}`) //aqui debo poner un iterador 
    .then(response => setItem(response.data.results)) //convertir objeto en arreglo
    .catch(console.log('Ups, algo salio mal'))

  },[id])

  return (
    <div>
      <Form/>
      <h1>{item.name}</h1>
    </div>
  )
}

