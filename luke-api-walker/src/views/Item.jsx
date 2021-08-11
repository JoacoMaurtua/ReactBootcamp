import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import { useParams } from 'react-router';
import axios from 'axios';

export default function Item() {

  const [item,setItem] = useState([]);

  const {id} = useParams();
  console.log(id);

  useEffect(()=>{
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(res => setItem(res.data))
    .catch(err => console.log(err))
  },[id])


  return (
    <div className="itemContainer">
      <Form/>
      <h2>Name: {item.name}</h2>
      <p>Data: {item.url}</p>
      
    </div>
  )
}

