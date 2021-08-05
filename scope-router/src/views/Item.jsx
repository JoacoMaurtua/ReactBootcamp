import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';

export default function Item() {

  const [item,setItem] = useState([]);

  const {id} = useParams()
  console.log(id);

  useEffect(()=>{
      axios.get(`https://swapi.dev/api/people/${id}`)
      .then(res => setItem(res.data))
      .catch(console.log('ocurrio un problema'))
  },[id]);


  return (
    <div>
      <NavBar/>
      <hr/>
      <h3>Name: {item.name}</h3>
      <p>Height: {item.height}</p>
    </div>
  )
}

